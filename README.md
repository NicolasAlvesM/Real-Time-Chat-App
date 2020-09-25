# Real-Time-Chat-App
uma aplicação de chat em tempo real feito com React, Node e Socket.io

## Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

* [Socket.io](https://socket.io/)
* [Node](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [Express](https://expressjs.com/)
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)

 [Ideia](https://github.com/NicolasMorenoAlves/app-ideas/blob/master/Projects/3-Advanced/Chat-App.md)
## User Stories
-   [X] User can see an `input field` where he can type a new message
-   [X] By pressing the enter key or by clicking on the `send` button the text will be displayed in the `chat box`.
-   [ ] User is prompted to enter a username when he visits the chat app. The username will be stored in the application
-   [ ] By pressing the `enter` key or by clicking on the `send` button the text will be displayed in the `chat box` alongside his username (e.g. `John Doe: Hello World!`)

## Bonus features

-   [ ] The messages will be visible to all the Users that are in the chat app (using WebSockets)
-   [ ] When a new User joins the chat, a message is displayed to all the existing Users
-   [ ] Messages are saved in a database
-   [ ] User can send images, videos and links which will be displayed properly
-   [ ] User can select and send an emoji
-   [ ] Users can chat in private
-   [ ] Users can join `channels` on specific topics

## Executando a aplicação
### Pré-requisitos
- É necessário possuir o Node.js instalado no computador
- Também, é preciso ter um gerenciador de pacotes seja o NPM ou Yarn.
### Executando  


  #### API
  ```
   $ cd server
   ##### Instalando as dependências do projeto.
   $ yarn # ou npm install
   ##### Inicie a API
   $ yarn start # ou npm start
  ```
  #### Aplicação web
  ```
   $ cd web
   ##### Instalando as dependências do projeto.
   $ yarn # ou npm install
   ##### Inicie a aplicação web
   $ yarn start # ou npm start
  ```
