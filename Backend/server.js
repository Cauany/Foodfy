//All require
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

//Other constants

//Start Server
const server = express()

//Looking file public
server.use(express.static('public'))
server.use(routes)

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

server.listen(5000, function(){
    console.log("It's running")
})