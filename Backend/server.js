//All require
const express = require('express')
const nunjucks = require('nunjucks')

//Other constants

//Start Server
const server = express()


//Looking file public
server.use(express.static('public'))

//View Motor
server.set("view engine", "njk")

//Nunjucks configure
nunjucks.configure("views", {
    express: server,
    
    //For clean the cache
    noCache: true

    //Allowed to print the html
    //autoescape: false 
})

//Routes configure
server.get('/', function(req, res){
    return res.render('index')
})

server.get('/about', function(req, res){
    return res.render('about')
})

server.get('/recipe', function(req, res){
    return res.render('recipe')
})

server.listen(5000, function(){
    console.log("It's running")
})