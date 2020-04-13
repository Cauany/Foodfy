//All require
const express = require('express')
const nunjucks = require('nunjucks')

//Other constants

//Start Server
const server = express()
const recipes = require("./data")

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
    return res.render('recipe', { items: recipes})
})

server.get('/recipeDetail', function(req, res){
    const id = req.query.id

    const detail = recipes.find(function(recipes){
        if(recipes.id == id){
            return true
        }
    })

    if (!detail) {
        return res.send("Recipe  not found!")
    }

    return res.render('detail', { item : detail })
})

server.listen(5000, function(){
    console.log("It's running")
})