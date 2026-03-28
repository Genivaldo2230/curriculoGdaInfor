#!/bin/bash

# ============================================
# REINSTALAÇÃO COMPLETA COM VERIFICAÇÃO
# ============================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🧹 REINSTALAÇÃO COMPLETA DE DEPENDÊNCIAS"
echo "======================================="
echo ""

BACKEND_DIR="$SCRIPT_DIR/serv_dto/dto_serv"
FRONTEND_DIR="$SCRIPT_DIR"

# ============================================
# VERIFICA FERRAMENTAS
# ============================================
echo "🔍 Verificando ferramentas..."
echo ""

# Java
if command -v java &>/dev/null; then
    JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}')
    echo "   ✅ Java: $JAVA_VERSION"
else
    echo "   ❌ Java não encontrado!"
    echo "      Instale: sudo apt install openjdk-17-jdk"
    exit 1
fi

# Node.js
if command -v node &>/dev/null; then
    NODE_VERSION=$(node --version)
    echo "   ✅ Node.js: $NODE_VERSION"
else
    echo "   ❌ Node.js não encontrado!"
    echo "      Instale: sudo apt install nodejs npm"
    exit 1
fi

# Maven (ou Maven Wrapper)
if command -v mvn &>/dev/null; then
    MVN_VERSION=$(mvn -version | head -1)
    echo "   ✅ Maven: $MVN_VERSION"
elif [ -f "$BACKEND_DIR/mvnw" ]; then
    echo "   ✅ Maven Wrapper encontrado"
else
    echo "   ⚠️  Maven não encontrado (usarei wrapper se existir)"
fi

echo ""

# ============================================
# 1. FRONTEND - NPM
# ============================================
echo "📦 1. Reinstalando Frontend (NPM)"
echo "-----------------------------------"

cd "$FRONTEND_DIR" || exit 1

echo "   • Removendo node_modules..."
rm -rf node_modules

echo "   • Removendo package-lock.json..."
rm -f package-lock.json yarn.lock 2>/dev/null || true

echo "   • Limpando cache npm..."
npm cache clean --force

echo "   • Instalando dependências (pode demorar)..."
npm install

if [ $? -eq 0 ]; then
    echo "   ✅ node_modules recriado!"
    echo "      $(find node_modules -maxdepth 1 -type d | wc -l) pacotes"
else
    echo "   ❌ Erro no npm install"
    echo "      Tente: npm install --legacy-peer-deps"
    exit 1
fi

# Angular CLI
if ! command -v ng &>/dev/null; then
    echo "   • Instalando Angular CLI global..."
    npm install -g @angular/cli
fi

echo ""

# ============================================
# 2. BACKEND - MAVEN
# ============================================
echo "📦 2. Reinstalando Backend (Maven)"
echo "------------------------------------"

cd "$BACKEND_DIR" || exit 1

echo "   • Removendo target/..."
rm -rf target

echo "   • Removendo .m2/repository (opcional, pode demorar)..."
read -p "   Limpar cache Maven também? (s/n): " resposta
if [[ "$resposta" =~ ^[Ss]$ ]]; then
    rm -rf ~/.m2/repository
    echo "   ✅ Cache Maven limpo"
fi

echo "   • Download de dependências..."
if [ -f "./mvnw" ]; then
    chmod +x ./mvnw
    ./mvnw dependency:go-offline -q
    ./mvnw clean compile -q
else
    mvn dependency:go-offline -q
    mvn clean compile -q
fi

if [ $? -eq 0 ]; then
    echo "   ✅ Dependências Maven OK!"
else
    echo "   ❌ Erro no Maven"
    exit 1
fi

echo ""
echo "======================================="
echo "✅ REINSTALAÇÃO CONCLUÍDA!"
echo "======================================="
echo ""
echo "🚀 Próximos passos:"
echo ""
echo "1. Inicie o sistema:"
echo "   ./start.sh"
echo ""
echo "2. Ou teste manualmente:"
echo "   Backend: cd serv_dto/dto_serv && ./mvnw spring-boot:run"
echo "   Frontend: ng serve --host 127.0.0.1"
echo ""
echo "💡 Se ainda houver erros, verifique:"
echo "   • Versão do Java (recomendado: 17+)"
echo "   • Versão do Node (recomendado: 18+)"
echo "   • Logs: cat logs/backend.log"
