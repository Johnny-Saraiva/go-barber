<h1 align="center">
    <img alt="Gobarber" title="gobarber" src=".github/logo.svg" width="200px" />
</h1>

<h4 align="center">
   💈 GoBarber 💈 
</h4>

<p align="center">
<img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/Johnny-Saraiva/go-barber?color=%23FF9000">
<img alt="Made by Johnny" src="https://img.shields.io/badge/made%20by-Johnny Saraiva-%20?color=%23FF9000">
<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/Johnny-Saraiva/go-barber?color=%23FF9000">
<img alt="GitHub license" src="https://img.shields.io/github/license/Johnny-Saraiva/go-barber?color=%23FF9000">
</p> 

<p align="center">
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <img alt="GoBarber" src=".github/gobarber.gif" width="100%">
</p>

<br>

## Projeto 💻

O GoBarber é um projeto exemplo do Bootcamp da Rocketseat onde será feito um aplicativo completo Backend, Web e Mobile. Será atualizado conforme eu for evoluindo e adquirindo aprendizado nos conteúdos passados em cada módulo...

## 🚀 Tecnologias

Esse projeto está utilizando as seguintes tecnologias:

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](https://facebook.github.io/react-native/)
-  [@rocketseat/unform](https://github.com/Rocketseat/unform)
-  [Styled-components](https://www.styled-components.com/)
-  [React-toastify](https://github.com/fkhadra/react-toastify)
-  [React Navigation](https://reactnavigation.org/)
-  [React-icons](https://react-icons.netlify.com/)
-  [Express](https://expressjs.com/pt-br/)
-  [Docker](https://www.docker.com/docker-community)
-  [Axios](https://github.com/axios/axios)
-  [Polished](https://polished.js.org/)
-  [Yup](https://www.npmjs.com/package/yup)
-  [Date-fns](https://date-fns.org/)
-  [ESLint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [EditorConfig](https://editorconfig.org/)
-  [VS Code](https://code.visualstudio.com/)


## 🔖 Layout

...

## 🚀 Instalação e execução

Foi utilizado uma imagem do Docker com PostgresSQL, caso queira utilizar o mesmo realizar os passos abaixo:

```bash
# Instalar a imagem do Postgres
$ docker run --name imagename -e POSTGRES_PASSWORD=yourPassword -p 5432:5432 -d postgres

# Exemplo criando um docker com database:

$ docker run --name gostack-postgres -e POSTGRES_USER=docker -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# start Postgres
$ docker start imageName

```

### Backend

  Clone e instalação de Dependências.

```bash
# Faça clone do repositório:
$ git clone https://github.com/Johnny-Saraiva/go-barber.git

# Abra a pasta backend:
$ cd go-barber/backend

#Instalar as dependências do backend:
$ yarn

```


```bash

# run migrations
$ yarn typeorm migration:run

# Rodar o teste
$ yarn dev:server

```

### Frontend

```bash

# Abra uma nova aba do terminal e instale as dependências do frontend:

$ cd frontend
$ yarn
$ yarn start

```

### Mobile

...

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

