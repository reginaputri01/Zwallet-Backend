# Zwallet - BackEnd

Simple application to CRUD database with node js, Express, and MySql.
This application use JWT to authentication and authorization.

## Table of Contents

- [Zwallet-Back-End](#zwallet-back-end)
  - [Table of Contents](#table-of-contents)
  - [General info](#general-info)
  - [Built With](#built-with)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Setup .env example](#setup-env-example)
  - [Run the app](#run-the-app)
  - [REST API](#rest-api)
  
## General info
This project is simple CRUD data
## Built With
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/) for testing
* [Database](database-example.sql)
	
## Setup
To run this project, install it locally using npm:

```
$ npm install
```

## Setup .env example

Create .env file in your root project folder.

```env
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = your_password
DB_DATABASE = your_database
PORT = 4000
BASE_URL = http://localhost:4000/
SECRET_KEY = your-secret
```
## Run the app

Development mode

```bash
$ npm run dev
```

Deploy mode

```bash
$ npm start
```

## REST API

You can view my Postman collection [here](https://documenter.getpostman.com/view/5773671/TVKFybRT)
