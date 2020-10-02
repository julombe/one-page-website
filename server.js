const express = require('express')  //importando a biblioteca do express
const nunjucks = require('nunjucks') //importando a biblioteca do nunjucks

const server = express()

//use CSS
server.use(express.static('public'))

//configure template engine(nunjucks)
server.set("view engine", "njk")   //setar qual é o motor de views da app, qual é a extensão dos arquivos para abrir 
nunjucks.configure("views", {
    express: server,               //indica ao nunjucks que vamos usar o Express com a var Server
    autoescape: false,             //impede que o nunjucks mostre o codigo html em variaveis
    noCache: true                  //bloqueando o cache do nunjucks         
    
})


// create route
server.get("/", function(req, res) {
    return res.render("index")
})














//start server

server.listen(3000, function() {
    console.log("server is running")
})