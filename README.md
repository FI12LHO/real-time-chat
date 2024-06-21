# Real Time Chat
Este é um projeto de chat em tempo real que consiste em um cliente construído utilizando ReactJS (com TypeScript) e um servidor desenvolvido com Laravel. A comunicação em tempo real é gerenciada com Websockets, utilizando o Laravel Reverb, e a autenticação é feita por meio de JSON Web Tokens (JWT).

## Índice
- [Real Time Chat](#real-time-chat)
  - [Índice](#índice)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
    - [Clonando o Repositório](#clonando-o-repositório)
    - [Configurando backend](#configurando-backend)
    - [Configurando frontend](#configurando-frontend)
  - [Executando projeto](#executando-projeto)
    - [Cliente](#cliente)
    - [Backend](#backend-1)
    - [Websocket](#websocket)

## Funcionalidades
- Autenticação de usuários utilizando JWT.
- Comunicação em tempo real através de Websockets.
- Interface de usuário interativa e responsiva desenvolvida com ReactJS e TypeScript.
- Backend robusto com Laravel.

## Tecnologias Utilizadas
### Frontend
- ReactJS
- TypeScript
- TailWindCss

### Backend
- Laravel
- Laravel Reverb (Websockets)
- JWT (JSON Web Tokens)

## Requisitos
- Node.js
- Composer
- PHP >= 8
- SQLite
- Laravel
- ReactJs

## Instalação
### Clonando o Repositório
`git clone https://github.com/FI12LHO/real-time-chat.git`
`cd real-time-chat`

### Configurando backend
- Acessando diretorio
`cd server`
- Gerando arquivo env com base no exemplo
`cp .env.example .env`
- Baixando dependencias
`composer install`
- Gerando chave da aplicação
`php artisan key:generate`
- Gerando token jwt
`php artisan jwt:secret`
- Executando migrates
`php artisan migrate` 
- Executando seeds
`php artisan db:seed`

### Configurando frontend
- Acessando diretorio
`cd client`
- Baixando dependencias
`npm install`

## Executando projeto
Para execução do projeto é necessario que o cliente, o backend e o servidor websocket estejam em execução.

### Cliente
- Acessando a pasta raiz do cliente
`cd client`
- Execute o ReactJs
`npm start`

### Backend
- Acessando a pasta raiz do servidor
`cd server`
- Iniciando servidor para autenticação
`php artisan serve`

### Websocket
- Acessando a pasta raiz do servidor
`cd server`
- Iniciando servidor websocket
`php artisan reverb:start`