#!/bin/bash

# Configuração de caminhos
BACKEND_PATH="D:/Projetos-Vscode-Dez/Projeto-curriculo-angular/curriculoGdaInfor/serv_dto/dto_serv"
FRONTEND_PATH="D:/Projetos-Vscode-Dez/Projeto-curriculo-angular/curriculoGdaInfor"

# Arquivos de Log
LOG_BACKEND="log_backend_erro.txt"
LOG_FRONTEND="log_frontend_erro.txt"

echo "🚀 Iniciando ecossistema com LOGS ativo..."

# 1. Inicia o Backend e joga erros para o log
echo "Enviando logs do Backend para: $LOG_BACKEND"
cd "$BACKEND_PATH" || { echo "Erro: Pasta Backend não encontrada" >> "$LOG_BACKEND"; exit 1; }

# O '2>' captura apenas os erros. O '&' manda para o fundo.
./mvnw spring-boot:run 2> "$LOG_BACKEND" &

# 2. Inicia o Frontend e joga erros para o log
echo "Enviando logs do Frontend para: $LOG_FRONTEND"
cd "$FRONTEND_PATH" || { echo "Erro: Pasta Frontend não encontrada" >> "$LOG_FRONTEND"; exit 1; }

# 'ng serve' rodando e capturando erros
ng serve --open 2> "$LOG_FRONTEND"

# Aguarda os processos
wait
