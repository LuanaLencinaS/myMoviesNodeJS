# My Movies

Projeto criado em node.js com express para exercicio com migrations/sequelize/sql

# Funcionalidades!

  - Adicionar a um cátalogo os filmes que você quer ou já assitiu
  - Marcar como visto filme que você cadastrou
  
### Instalação

É necessário ter [Node.js](https://nodejs.org/) v10+ to run.

Passos:

```sh
$ cd mymovies
$ npm install
```
Depois da instalação de dependencias, crie um banco de dados vazio e faça as configurações de conexão no arquivo config/database.js e continue com os seguintes comandos:
```sh
$ npx sequelize migrate
$ node index.js
```
Assim será criado as tabelas necessária e irá subir o servidor. Para acessar bastar entrar http://localhost:3000


## Commits no padrão...
``` bash
#grupos de commit:
    
•feat(escopo)
    #para novas features ou incrementos em features existentes
    #ex: feat(login): create login page

•chore
    #para qualquer alteração de arquitetura. Seja alteração do package.json ou algum arquivo de configuração, ou mesmo alteração da organização de pastas/código do projeto
    #ex: chore: add build script

•fix(escopo)
    #irá indicar o que foi concertado em uma feature.
    #ex: fix(login): add type="email" to login form

•refactor(escopo)
    #usado para indicar que um código sofreu refactoring. Ou seja: o resultado final daquele código refatorado não foi alterado.
    #ex: refactor(style): use sass mixins to handle darken backgrounds

•docs(escopo)
    #usado ao adicionar comentários no código, jsdoc, storyboard e tudo que não interfira no código, porém indique o funcionamento do mesmo.
    #ex: docs(login): add jsdoc to functions

•test(escopo)
    #usado ao commitar código de testes unitários e/ou end-to-end.
    #ex: test(login): add unit test
```

## Mensagens de commit styleguide emojis

- Modo imperativo ("Adiciona feature" não "Adicionando feature" ou "Adicionada feature")

Emoji | Code | Commit Type
------------ | ------------- | -------------
:tada: | `:tada:` | initial commit
:art: | `:art:` | quando melhorar a estrutura/formato do código
:racehorse: | `:racehorse:` | quando melhorar a performance
:memo: | `:memo:` | quando escrever alguma documentação
:bug: | `:bug:` | quando corrigir um bug
:fire: | `:fire:` | quando remover códigos ou arquivos
:white_check_mark: | `:white_check_mark:` | quando adicionar testes
:lock: | `:lock:` | quando melhorar a segurança
:arrow_up: | `:arrow_up:` | quando der upgrade em dependências
:arrow_down: | `:arrow_down:` | quando der downgrade em dependências
:poop: | `:poop:` | deprecated
:construction: | `:construction:` | em construção
:rocket: | `:rocket:` | nova feature
:see_no_evil: | `:see_no_evil:` | gambiarra
:gift: | `:gift:` | nova versão

[LinkedIn](https://www.linkedin.com/in/luana-lencina-dos-santos-944474195/)

[+Projetos](https://github.com/LuanaLencinaS)
