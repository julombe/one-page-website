const express = require('express')  //importando a biblioteca do express
const nunjucks = require('nunjucks') //importando a biblioteca do nunjucks
const routes = require('./routes') //chamando o ficheiro de rotas

const server = express()

//use CSS
server.use(express.static('public'))
server.use(routes)

//configure template engine(nunjucks)
server.set("view engine", "njk")   //setar qual é o motor de views da app, qual é a extensão dos arquivos para abrir 
nunjucks.configure("views", {
    express: server,               //indica ao nunjucks que vamos usar o Express com a var Server
    autoescape: false,             //impede que o nunjucks mostre o codigo html em variaveis
    noCache: true                  //bloqueando o cache do nunjucks         
    
})

//start server

server.listen(3000, function() {
    console.log("server is running")
})