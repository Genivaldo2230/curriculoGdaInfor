#!/bin/bash

# Caminho do backend (Spring Boot)
BACKEND_PATH=~/Documents/Projetos-Vscode-Dez/Projeto-curriculo-angular/curriculoGdaInfor/serv_dto/dto_serv

# Caminho do frontend (Angular)
FRONTEND_PATH=~/Documents/Projetos-Vscode-Dez/Projeto-curriculo-angular/curriculoGdaInfor

# Inicia o backend em segundo plano
(cd $BACKEND_PATH && ./mvnw spring-boot:run) &

# Inicia o frontend em segundo plano
(cd $FRONTEND_PATH && ng serve --open) &

# Mantém o script rodando para não encerrar os processos
wait
