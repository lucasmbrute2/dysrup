### Olá, aqui você encontrará instruções de como configurar o projeto em questão. Obrigado por estar aqui!

## Como iniciar

```
1. .env na raiz do projeto -> Crie um arquivo .env na raiz, preencha as variáveis de ambiente como manda o .env.example
2. docker compose up -> Com o Docker devidamente configurado na sua máquia, suba o contaier. Isso deverá criar o banco dev e rodar as migrations
3. npm run test:unit -> Irá rodas os testes unitários
3. Tudo pronto!
```

## Rotas

A plicação consite em rotas para cadastro de projetos (project) e atribuição de tarefas (task). Essas tasks podem ser finalizadas.

### 1. Project

Todas as rotas tem como prefixo /project

GET /project -> Listará todas os projetos em banco.

POST /project
{
"name": "Começar a academia.", -> STRING
"description": "Começar a academia a academia é projetinho felas", -> STRING
"started_at": "2024-06-28" -> STRING DATE yyyy-mm-dd
}

### 2. Task

Todas as rotas tem como prefixo /task

GET /task/:projectId -> Lista todas as tarefas de um projeto.

DELETE /task/:taskId -> Delete uma tarefa específica.

POST /task/:projectId
{
"title": "Fazer a inscrição na academia", -> STRING
"description": "Deve-se fazer a inscrição na academia mais próxima" -> STRING
}

PUT /task/finish/:taskId -> Dá uma tarefa por finalizada.

### Disclaimer

Bom, utilizando a aplicação irá notar que algumas funcionalidades do dia a dia não estão presentes e que serão levadas como pontos de melhoria. Me atentei a entregar estritamente ao que estava no PDF por questão de tempo.

Pontos de melhoria.

1. Adicionar paginação das listagens.
2. Bloquear a criação de projetos com o mesmo nome.
3. Bloquear a crição de tarefas com o mesmo nome.
4. Adicionar testes nos repositórios e controllers.
5. Adicionar rotas para deleção e edição dos projetos.
