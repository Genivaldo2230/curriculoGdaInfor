📘 Projeto Curriculum GdaInfor

🚀 Sobre o Projeto
Este projeto foi desenvolvido com Angular CLI 20 no Front-End e Spring Boot no Back-End, como parte de um processo de aprendizado e construção de aplicações modernas.
O sistema permite o registro de contatos (nome, e-mail e mensagem), que são persistidos inicialmente em um banco de dados H2 Console, com previsão de futura migração para MySQL ou PostgreSQL.

🛠️ Tecnologias Utilizadas
• 	Front-End: Angular CLI 20
• 	Back-End: Spring Boot
• 	Banco de Dados: H2 Console (planejado upgrade para MySQL/PostgreSQL)
• 	Integração: API REST para persistência de dados

📂 Funcionalidades
• 	Página de Contatos com formulário para nome, e-mail e mensagem
• 	Persistência dos dados no banco H2
• 	Estrutura preparada para migração futura para MySQL/PostgreSQL
• 	Integração entre Angular e Spring Boot

⚙️ Instalação e Execução
🔧 Pré-requisitos
• 	Node.js e Angular CLI instalados
• 	Java JDK 17+
• 	Maven.
▶️ Passos para rodar o projeto

1. 	Clonar o repositório

2. 	Instalar dependências do Front-End

2-1. Instalar uma dependência de produçãoUse este comando para bibliotecas que seu aplicativo precisa para rodar (ex: Bootstrap, Lodash, RxJS).

2-3. 	## npm install <nome-do-pacote>

3.   Instalar uma dependência de desenvolvimento (DevDependency) Use para ferramentas que só servem para o momento de codificação ou build (ex: Linters, tipos do TypeScript, ferramentas de teste).

3-1.  ## npm install <nome-do-pacote> --save-dev

3-2. Se você acabou de baixar um projeto do GitHub e ele não tem a pasta node_modules, basta rodar apenas npm install na raiz do projeto para restaurar tudo.

3-3   ## npm install

   	
5. 	Rodar o Back-End

6. 	Inciando o Back-End  executar o comando no terminal na pasta raiz do seu projeto Java (onde está o arquivo pom.xml) e digite:

    ## mvn spring-boot:run


    O que acontece nos bastidores?
    Quando você executa esse comando, o Maven realiza um ciclo de vida simplificado:
    
    Compila as classes do seu projeto.
    
    Copia os recursos (como arquivos .properties ou .yml).
    
    Sobe um servidor embutido (geralmente o Tomcat) na porta padrão 8080.

    ## Dicas úteis para o dia a dia
    Limpando o cache: Se o código não estiver atualizando como deveria, tente limpar os builds antigos antes de rodar:
    mvn clean spring-boot:run
    
    Porta ocupada: Se receber um erro de "Port 8080 already in use", você pode mudar a porta no arquivo src/main/resources/application.properties adicionando:
    server.port=8081
    
    Sem o Maven instalado globalmente: Se você estiver usando o "Maven Wrapper" (comum em projetos gerados pelo Spring Initializr), use:
    
    No Windows: .\mvnw spring-boot:run
    
    No Linux/Mac: ./mvnw spring-boot:run		

7. 	Acessar a aplicação
• 	Front-End: 
• 	Back-End API: 
• 	H2 Console: 

📌 Futuras Melhorias
• 	Migração do banco de dados para MySQL/PostgreSQL
• 	Implementação de autenticação e autorização
• 	Deploy em ambiente de nuvem (AWS/Azure/Heroku)

👨‍💻 Autor
    Projeto desenvolvido por Genivaldo Anjos como parte de estudos e prática em Angular e Spring Boot.

#   Foi criado um Script com nome de ( START.SH )
  Ele serve pra da inicio ao sistema conjuto back-end eo Front-End assim poupando serviço de inicialização pra melhora a manutenção do codigo  se deve inicia no terminal o comando 

 ./start.sh

O erro comum: "Permission Denied"
Se ao digitar o comando o terminal retornar que você não tem permissão, é porque o arquivo ainda não foi marcado como executável. Resolva com:

com esse comando de propriedade da pasta se tornando o adminstrador

# chmod +x start.sh


O que um bom start.sh Full Stack deve conter
Para que ele realmente "poupe serviço", o ideal é que ele gerencie os dois processos. Um exemplo de estrutura eficiente para o seu caso (Angular + Spring Boot) seria:
Linha de comando da criação do Script automatizando inicialização do codigo BACK-END e FRONT-END codigo abaixo eo SCRIPT

#=========================================================================================================================================================#
Bash
#!/bin/bash

# Iniciando o Back-end em segundo plano
echo "Iniciando Spring Boot..."
cd ./backend
mvn spring-boot:run & 

# Guardar o ID do processo do back-end para fechar depois, se necessário
BACK_PID=$!

# Iniciando o Front-end
echo "Iniciando Angular..."
cd ../frontend
ng serve

#=========================================================================================================================================================#
Por que isso ajuda na manutenção?

Padronização: Garante que todos os desenvolvedores do time usem as mesmas flags (ex: perfis de banco de dados específicos).

Agilidade: Você não esquece de subir uma parte do sistema e fica tentando debugar um erro de conexão que, na verdade, é só o servidor desligado.

Logs centralizados: Você consegue ver o fluxo de dados saindo do Angular e chegando no Spring no mesmo console.

Gerenciamento de Processos : Se você notar que, após fechar o terminal, o Spring Boot continua rodando e travando a porta 8080, você pode adicionar um comando de ( trap ) no seu script para que, ao dar Ctrl+C, ele derrube tanto o Front quanto o Back simultaneamente.

O seu script já está configurado para rodar os dois ao mesmo tempo ou ele trava na inicialização do primeiro?

# CurriculoGdaInfor

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

================================================================================================

Para documentar o uso do arquivo de Style.css traduzido em (estilos globais) e a organização dos estilos em um projeto Angular. Assim você terá uma base clara e bem estruturada:

# Guia de Estilos do Projeto

Este projeto utiliza **estilos globais** e **estilos específicos de componentes** para manter a aplicação organizada e consistente.

## 📂 Estrutura de Arquivosmarkdown
# Guia de Estilos do Projeto

Este projeto utiliza **estilos globais** e **estilos específicos de componentes** para manter a aplicação organizada e consistente.

## 📂 Estrutura de Arquivos

src/
├── styles.scss        # Estilos globais da aplicação
├── app/
│    ├── app.component.scss   # Estilos específicos do componente principal
│    ├── components/
│    │    ├── header/
│    │    │    └── header.component.scss
│    │    └── footer/
│    │         └── footer.component.scss
└── assets/
└── styles/
├── _variables.scss   # Variáveis globais (cores, fontes, etc.)
├── _mixins.scss      # Mixins reutilizáveis
└── _layout.scss      # Estilos de layout

Código

## 🌍 Estilos Globais (`styles.scss`)

- Defina regras que se aplicam a toda a aplicação.
- Configure fontes, cores padrão e resets de CSS.
- Exemplo:
  ```scss
  body {
    margin: 0;
    font-family: $font-primary;
    background-color: $color-background;
    color: $color-text;
  }
🎨 Variáveis SCSS (_variables.scss)
scss
// Paleta de cores
$color-primary: #007bff;
$color-secondary: #6c757d;
$color-success: #28a745;
$color-danger: #dc3545;
$color-warning: #ffc107;
$color-info: #17a2b8;
$color-light: #f8f9fa;
$color-dark: #343a40;

// Cores de fundo e texto
$color-background: #f5f5f5;
$color-text: #212529;

// Tipografia
$font-primary: 'Roboto', sans-serif;
$font-secondary: 'Open Sans', sans-serif;
$font-size-base: 16px;
$font-size-heading: 2rem;
📦 Importação de Arquivos
No styles.scss, importe os arquivos parciais:

scss
@import 'assets/styles/variables';
@import 'assets/styles/mixins';
@import 'assets/styles/layout';
🎯 Boas Práticas
Use styles.scss apenas para estilos globais.

Mantenha estilos específicos dentro dos arquivos de cada componente.

Prefira SCSS para aproveitar variáveis, mixins e nesting.

Nomeie arquivos parciais com _ (ex.: _variables.scss) e importe-os no styles.scss.

Esse README serve como guia para manter os estilos organizados e facilitar a manutenção do projeto.

Código

---

Com esse exemplo, você já tem uma **paleta de cores reutilizável** e uma **base tipográfica consistente** para todo o projeto. 
