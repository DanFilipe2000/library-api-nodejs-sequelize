API para digitalizar processos padrões de uma biblioteca.

# Library API

API para digitalizar processos padrões de uma biblioteca.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

Você precisará ter o Node.Js na versão 16.14.2 ou superior instalado em sua máquina

## Para instalar no linux:
```
sudo apt-get install curl
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Para instalar no Windows:
```
Acesse a página do Node.Js e siga as instruções:
https://nodejs.org/en/download/
```

### 🔧 Instalação

Para clonar o projeto em sua máquina siga as instruções:

```
git clone git@github.com:DanFilipe2000/library-api.git
cd library-api
npm install
```

Configure as variáveis de ambiente:

```
Apaque o ".exemple" do arquivo ".env.exemple" e configure as variáveis do seu ambiente:
Exemplo:

  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_DB_NAME=library-api
  MYSQL_USER=seuUserDoMySQL
  MYSQL_PASSWORD=suaSenhaDoMySQL
  
Troque as variáveis de acordo com os dados do seu MySQL server.
```

Como subir o banco de dados localmente:
```
*Na raiz do projeto execute os seguintes comandos:*

    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
```

## 📦 Implantação

API foi criada para que no futuro pudesse ser implementada num sistema de gerenciamento de uma biblioteca.

## 🛠️ Construído com

* [Node.Js](https://nodejs.org/en/)
* [Sequelize](https://sequelize.org/)
* [JWT](https://jwt.io/)


## Recomendações de ferramentas:

Recomendo que para rodar essa API seja utilizado um das seguintes ferramentas:

* [Postman](https://www.postman.com/)
* [Insomnia](https://insomnia.rest/download)

## 🖇️ Rotas e endpoints

### 01 - Na rota `/login` com o método `POST`

Deverá receber no body:
```
{
 "email": "admin@admin.com"
 "password": "123456"
}
```
Esses são os dados do administrador responsável pelo sistema e já está cadastrado no banco de dados.

Se o login der certo a API responderá com `STATUS HTTP 200` e deverá retornar um token:
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTY2OTA3MzU0OCwiZXhwIjoxNjY5MTU5OTQ4fQ.5DSxpFgQt9h66BeWdo91KchI68MR6mYt4AjpZmvblB4"
}
```
Esse token deverá ser adicionado a header nas demais requisições.

### 02 - Na rota `/client` com o método `POST`

Deverá receber os dados do cliente que será cadastrado:
```
{
	"nome": "Fulano",
	"matricula": "18293",
	"telefone": "61993975072"
}
```
Se o cadastro der certo a API responderá com `STATUS HTTP 201` e deverá retornar:

```
{
	"id": 1,
	"nome": "Fulano",
	"matricula": "18293",
	"telefone": "61993975072"
}
```
Se o cliente já tiver sido cadastrado anteriormente a API responderá com `STATUS HTTP 400` e deverá retornar:


```
{
	"message": "O cliente já foi cadastrado"
}
```

### 03 - Na rota `/autor` com o método `POST`

Para cadastrar um autor, deverá receber no body:
```
{
	"nome": "Machado de Assis",
	"pais_de_origem": "Brasil"
}
```

Se o cadastro der certo a API responderá com `STATUS HTTP 201` e deverá retornar:
```
{
	"id": 1,
	"nome": "Machado de Assis",
	"pais_de_origem": "Brasil"
}
```
Se o autor já tiver sido cadastrado anteriormente a API responderá com `STATUS HTTP 400` e deverá retornar:
```
{
	"message": "O Autor já foi cadastrado"
}
```

### 04 - Na rota `/book` com o método `POST`

Para cadastrar um livro, deverá receber no body:
```
{
	"isbn": "978-3-16-148410-0",
  	"nome": "Memórias Póstumas de Bras Cubas",
	"autor": "Machado de Assis",
	"editora": "Tipografia Nacional",
	"ano_de_publicacao": 1881,
	"disponivel": true
}
```

Se o cadastro der certo a API responderá com `STATUS HTTP 201` e deverá retornar:
```
{
	"id": 3,
	"isbn": "978-3-16-148410-0",
	"nome": "Memórias Póstumas de Bras Cubas",
	"autor": "Machado de Assis",
	"editora": "Tipografia Nacional",
	"ano_de_publicacao": 1881,
	"disponivel": true
}
```
Se o livro já tiver sido cadastrado anteriormente a API responderá com `STATUS HTTP 400` e deverá retornar:
```
{
	"message": "O Livro já foi cadastrado"
}
```

## ✒️ Autor

* **Daniel Filipe** - *API* - [DanFilipe2000](https://github.com/DanFilipe2000)
