API para digitalizar processos padrões de um biblioteca.

# Library API

API para digitalizar processos padrões de um biblioteca.

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

Para clonar o projeto em sua máguina siga as instruções:

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

## 🖇️ Rotas e endpoints

### 01 - Na rota `/login`

Deverá receber no body:
```
{
 "email": "admin@admin.com"
 "password": "123456"
}
```
Esses são os dados do administrador responsável pelo sistema e já está cadastrado no banco de dados.

<details>
  <summary>Retornará um token como no exemplo abaixo</summary>
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTY2OTA3MzU0OCwiZXhwIjoxNjY5MTU5OTQ4fQ.5DSxpFgQt9h66BeWdo91KchI68MR6mYt4AjpZmvblB4"
}
```


</details>

## ✒️ Autor

* **Daniel Filipe** - *API* - [DanFilipe2000](https://github.com/DanFilipe2000)
