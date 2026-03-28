# 📘 Projeto Curriculum GdaInfor


Aplicação **Full-Stack** de portfólio para demonstração de habilidades em desenvolvimento web moderno.  
Permite o envio de mensagens de contato através de um formulário SPA em **Angular 20**, processadas por uma API REST em **Spring Boot 3.x**, com persistência em banco H2 em memória.

**Objetivo principal**:  
Exibir um fluxo completo e funcional (frontend → backend → banco → feedback), com ênfase em:
- Arquitetura limpa e separada
- Comunicação REST/JSON com CORS
- Automação inteligente de inicialização
- Código limpo, documentado e portátil

## Tecnologias Utilizadas

| Camada              | Tecnologia                  | Versão / Observação                          |
|---------------------|-----------------------------|----------------------------------------------|
| Frontend            | Angular                     | 20.x (Angular CLI)                           |
|                     | TypeScript                  | ^5.x                                         |
|                     | SCSS                        | Estilos globais e componentes                |
|                     | HttpClient                  | Chamadas assíncronas à API                   |
| Backend             | Spring Boot                 | 3.x (Java 17+)                               |
|                     | Spring Web + Data JPA       | REST API + ORM                               |
|                     | Maven                       | Gerenciamento de dependências + Wrapper      |
| Banco de Dados      | H2 Database                 | Em memória + Console web                     |
| Integração          | REST API                    | JSON, CORS configurado                       |
| Automação           | Bash Script                 | `start.sh` – detecção automática de estrutura|
| Ferramentas         | Git, IntelliJ IDEA, VS Code | Desenvolvimento e debug                      |

## Estrutura do Projeto

```
curriculoGdaInfor/
├── backend/                        # Aplicação Spring Boot (porta 8080)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/               # Controllers, Models, Services, Config (CORS)
│   │   │   └── resources/
│   │   │       ├── application.properties  # Configuração H2, porta, logging
│   │   │       └── static/         # (opcional para build Angular em produção)
│   ├── pom.xml                     # Dependências e plugins Maven
│   └── mvnw / mvnw.cmd             # Maven Wrapper
├── frontend/                       # Aplicação Angular (porta 4200)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/         # Formulário de contato
│   │   │   ├── services/           # Serviço HttpClient para API
│   │   │   └── environments/       # Configurações de ambiente (apiUrl)
│   │   ├── assets/
│   │   └── styles.scss             # Estilos globais
│   ├── angular.json
│   ├── package.json
│   └── tsconfig*.json
├── start.sh                        # Script de inicialização inteligente
├── logs/                           # Gerado em runtime
│   ├── backend.log
│   └── frontend.log
└── .ecosystem_configured           # Cache de configuração (gerado na 1ª execução)
```

## Pré-requisitos

- Java ≥ 17 (recomendado: 17 ou 21)
- Node.js ≥ 18 (recomendado: 20.x ou 22.x LTS)
- npm
- Angular CLI (`npm install -g @angular/cli@20` ou versão compatível)
- Maven 3.6+ (ou use `./mvnw` do projeto)
- Sistema operacional: Linux (nativo), macOS, Windows (WSL ou Git Bash recomendado)

## Inicialização Automática (Recomendada)

O script `start.sh` é **inteligente e auto-configurável**. Ele:

- Detecta automaticamente as pastas `backend/` e `frontend/`
- Salva caminhos absolutos em `.ecosystem_configured`
- Reconfigura sozinho se o projeto for movido ou renomeado
- Verifica dependências (Java, Maven, npm, Angular CLI)
- Instala `node_modules` se ausente
- Compila o backend se necessário
- Inicia backend em background com health check
- Inicia frontend com `ng serve --open`
- Redireciona logs para `logs/`
- Trata Ctrl+C para encerrar ambos os processos de forma limpa

### Como executar

```bash
# Entre na raiz do projeto
cd curriculoGdaInfor

# Dê permissão de execução (apenas na primeira vez)
chmod +x start.sh

# Execute
./start.sh
```

### Exemplo de saída na primeira execução

```
ℹ️  Sistema Operacional: Linux
ℹ️  Diretório do script: /home/.../curriculoGdaInfor

ℹ️  Analisando estrutura do projeto...
✅ Estrutura detectada: monorepo
✅ Configuração salva em: ./.ecosystem_configured
✅ Backend encontrado: .../backend
✅ Frontend encontrado: .../frontend

ℹ️  Verificando dependências...
✅ Java 21 detectado
✅ Maven Wrapper presente
✅ Angular CLI instalado

ℹ️  Iniciando Backend (Spring Boot)...
✅ Backend iniciado (PID: 12345)
ℹ️  Aguardando inicialização (máx. 10s)...
✅ Backend pronto! (http://localhost:8080)

ℹ️  Iniciando Frontend (Angular)...
ℹ️  Abrindo navegador em http://localhost:4200
ℹ️  Pressione Ctrl+C para parar ambos os serviços
```

### Forçar reconfiguração (se necessário)

```bash
rm .ecosystem_configured
./start.sh
```

## Acesso aos Serviços

| Serviço                  | URL                                      | Descrição                                      |
|--------------------------|------------------------------------------|------------------------------------------------|
| Aplicação (Frontend)     | http://localhost:4200                    | Formulário de contato responsivo               |
| API REST (exemplo)       | http://localhost:8080/api/contatos       | GET (lista) / POST (nova mensagem)             |
| Console H2 Database      | http://localhost:8080/h2-console         | JDBC URL: `jdbc:h2:mem:testdb`<br>User: `sa`<br>Senha: (vazia) |

## Autor

**Genivaldo Anjos**  
Desenvolvedor Full-Stack  
GitHub: [@Genivaldo2230](https://github.com/Genivaldo2230)

Projeto criado em 2026 com foco em qualidade de código, automação e facilidade de manutenção.

Feito com ☕ e boas práticas.
```

### Como salvar o arquivo agora mesmo (no terminal):

1. Entre na raiz do projeto:
   ```bash
   cd ~/caminho/para/curriculoGdaInfor
   ```

2. Crie/editar o arquivo:
   ```bash
   nano README.md
   ```

3. Cole todo o conteúdo acima (Ctrl+Shift+V no terminal ou clique direito → Colar)

4. Salve e saia:
  - Ctrl+O → Enter (salvar)
  - Ctrl+X (sair)

5. Commit e envie para o GitHub:
   ```bash
   git add README.md
   git commit -m "Adiciona README.md profissional e técnico completo"
   git push origin main
   ```

Pronto! 
