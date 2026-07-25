# 📘 Projeto Curriculum GdaInfor

🚀 **Sobre o Projeto**
Este projeto é uma aplicação Full-Stack moderna que integra **Angular 20** no Front-End e **Spring Boot** no Back-End.
Com objetivo principal é o gerenciamento de mensagens de contato, utilizando uma arquitetura robusta com persistência em tempo real via **H2 Database**.
Nesse projeto Me Apresento com analista e desesenvolvimento de sistemas na qual fasso uso de de tecnologias atual para uma melhor eficiência do codigo facil manutenção.
desmostra minha qualificação de aprendizado acadêmico

---

## 🏗️ Estrutura do Projeto (Monorepo)

```text
curriculum-gdainfor/
├── backend/                # API Spring Boot (Java 17+)
│   ├── src/main/java       # Configurações de CORS, Model (Contato.java) e Controllers
│   ├── src/main/resources  # application.properties (H2 e Logs)
│   └── pom.xml             # Dependências Maven
├── frontend/               # SPA Angular 20
│   ├── src/app/services    # contato.service.ts (Integração HttpClient)
│   ├── src/assets/styles   # Variáveis SCSS e Mixins (_variables.scss)
│   ├── styles.scss         # Estilos globais
│   └── package.json        # Dependências NPM
└── start.sh                # Script de automação e gerenciamento de processos
````

## 🛠️ Tecnologias Utilizadas

```text
Front-End: Angular CLI 20 (TypeScript)

Back-End: Spring Boot 3.x (Java 17+)

Banco de Dados: H2 Database (Banco em memória)

Estilização: SCSS (Sass) com variáveis globais

Integração: API REST / JSON / HttpClient
````

📊 Fluxo de Dados e Modelo

```text
O sistema utiliza um modelo de dados padronizado para garantir a integridade das informações.

Campos do Formulário (Model):

id: Identificador único gerado automaticamente.

nome: Nome completo do remetente.

email: Endereço de correio eletrônico.

mensagem: Conteúdo da mensagem enviada.
````

## Diagrama de Fluxo

```text
Snippet de código
graph LR
    A[Angular Form] -->|POST JSON| B(CORS Policy)
    B -->|Authorized| C(Spring REST API)
    C -->|JPA Repository| D[(H2 Database)]
    D -->|Persistence| C
    C -->|Status 201 Created| A
````

🔒 Configuração de Segurança (CORS)

```text
Implementada configuração global no Back-End para permitir a comunicação segura entre as origens:

Origem permitida: http://localhost:4200 (Angular)

Métodos liberados: GET, POST, PUT, DELETE, OPTIONS.
````

🚀 Inicialização Automatizada (start.sh)

```text
## 🚀 Inicialização Local
O arquivo `start.sh` está configurado com caminhos absolutos. Para rodar em sua máquina:
1. Abra o `start.sh`.
2. Altere `BACKEND_PATH` e `FRONTEND_PATH` para os diretórios onde o projeto foi clonado.
3. Execute `./start.sh` no terminal Git Bash.
````

```text
Para facilitar a inicialização e evitar processos travados na memória, utilize o script de automação com comando trap:

Dar permissão: chmod +x start.sh

Executar: ./start.sh

O script iniciará o Spring Boot (8080) e o Angular (4200) simultaneamente. Ao usar Ctrl+C, ambos serão encerrados automaticamente.
````

🌐 Endereços de Acesso

```text
Front-End: http://localhost:4200

Back-End API: http://localhost:8080/api/contatos

H2 Console: http://localhost:8080/h2-console

JDBC URL: jdbc:h2:mem:testdb

User: sa | Password: (vazio)

````

👨‍💻 Autor

```text
Desenvolvido por Genivaldo Anjos. Focado em estudos de integração Full-Stack, automação de ambiente de desenvolvimento e arquiteturas modernas.
