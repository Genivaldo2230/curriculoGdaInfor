#!/bin/bash

# ============================================
# SCRIPT COMPLETO - COM CORREÇÃO AUTOMÁTICA DE CORS
# ============================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

mkdir -p logs

echo "🚀 Curriculo GdaInfor - Iniciando..."
echo ""

# --------------------------------------------
# DETECTA DIRETÓRIOS
# --------------------------------------------
FRONTEND_DIR="$SCRIPT_DIR"
BACKEND_DIR="$SCRIPT_DIR/serv_dto/dto_serv"

if [ ! -d "$BACKEND_DIR" ]; then
    BACKEND_DIR=$(find "$SCRIPT_DIR" -maxdepth 3 -name "pom.xml" -type f | head -1 | xargs dirname 2>/dev/null)
fi

if [ -z "$BACKEND_DIR" ] || [ ! -f "$BACKEND_DIR/pom.xml" ]; then
    echo "❌ Backend não encontrado (procurei por pom.xml)"
    exit 1
fi

echo "📂 Backend:  $(echo "$BACKEND_DIR" | sed "s|$SCRIPT_DIR/||")"
echo "📂 Frontend: $(basename "$FRONTEND_DIR")"
echo ""

# --------------------------------------------
# CORRIGE CORS AUTOMATICAMENTE
# --------------------------------------------
WEBCONFIG="$BACKEND_DIR/src/main/java/com/gdainfor/curriculo/config/WebConfig.java"

if [ -f "$WEBCONFIG" ]; then
    if ! grep -q "127.0.0.1" "$WEBCONFIG" 2>/dev/null; then
        echo "🔧 Corrigindo CORS para permitir 127.0.0.1:4200..."

        # Backup
        cp "$WEBCONFIG" "$WEBCONFIG.backup"

        # Adiciona 127.0.0.1:4200 às origens permitidas
        # Procura por localhost:4200 e adiciona 127.0.0.1:4200 junto
        if grep -q "localhost:4200" "$WEBCONFIG"; then
            sed -i 's/"http:\/\/localhost:4200"/"http:\/\/localhost:4200", "http:\/\/127.0.0.1:4200"/g' "$WEBCONFIG"
            echo "   ✅ CORS corrigido!"
            echo ""
        fi
    fi
fi

# --------------------------------------------
# CORRIGE SSR NO ANGULAR
# --------------------------------------------
ANGULAR_JSON="$FRONTEND_DIR/angular.json"
if [ -f "$ANGULAR_JSON" ]; then
    if grep -q '"server":' "$ANGULAR_JSON" 2>/dev/null; then
        echo "🔧 Desabilitando SSR..."
        cp "$ANGULAR_JSON" "$ANGULAR_JSON.backup"

        # Usa Python para JSON seguro
        python3 << 'PYEOF' 2>/dev/null || sed -i '/"server":/d; /"ssr":/d; s/"outputMode": "server"/"outputMode": "static"/g' "$ANGULAR_JSON"
import json
import sys

try:
    with open("$ANGULAR_JSON", 'r') as f:
        data = json.load(f)

    for proj in data.get('projects', {}).values():
        opts = proj.get('architect', {}).get('build', {}).get('options', {})
        opts.pop('server', None)
        opts.pop('ssr', None)
        opts['outputMode'] = 'static'

    with open("$ANGULAR_JSON", 'w') as f:
        json.dump(data, f, indent=2)
    print("   ✅ SSR desabilitado")
except Exception as e:
    print(f"   ⚠️  Erro: {e}")
PYEOF
        echo ""
    fi
fi

# --------------------------------------------
# INICIA BACKEND
# --------------------------------------------
echo "🔧 Iniciando Spring Boot..."
cd "$BACKEND_DIR" || exit 1

if [ -f "./mvnw" ]; then
    chmod +x ./mvnw
    ./mvnw spring-boot:run > "$SCRIPT_DIR/logs/backend.log" 2>&1 &
else
    mvn spring-boot:run > "$SCRIPT_DIR/logs/backend.log" 2>&1 &
fi

BACKEND_PID=$!
echo "   PID: $BACKEND_PID"
echo -n "   Aguardando"

for i in {1..20}; do
    sleep 1
    if grep -q "Started" "$SCRIPT_DIR/logs/backend.log" 2>/dev/null || \
       curl -s http://localhost:8080/api/contatos >/dev/null 2>&1; then
        echo ""
        echo "   ✅ Backend pronto!"
        echo "   🌐 http://localhost:8080"
        break
    fi
    echo -n "."
done
echo ""

# --------------------------------------------
# INICIA FRONTEND
# --------------------------------------------
echo ""
echo "🌐 Iniciando Angular..."
cd "$FRONTEND_DIR" || exit 1

if [ ! -d "node_modules" ]; then
    echo "   📦 npm install..."
    npm install
fi

# Verifica Angular CLI
if ! command -v ng &>/dev/null; then
    npm install -g @angular/cli
fi

# Cleanup
trap "echo ''; echo '🛑 Parando...'; kill $BACKEND_PID 2>/dev/null; pkill -f 'ng serve' 2>/dev/null; exit 0" INT TERM

echo ""
echo "   🎯 ng serve --host 127.0.0.1"
echo "   📝 Acesse: http://127.0.0.1:4200"
echo "   🔌 API: http://localhost:8080/api/contatos"
echo "   ⚠️  Pressione Ctrl+C para parar"
echo ""

ng serve --host 127.0.0.1 --port 4200 2>&1 | tee "$SCRIPT_DIR/logs/frontend.log"
