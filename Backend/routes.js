const express = require('express')
const routes = express.Router()
const recipes = require("./data")


routes.get('/', function(req, res){
    return res.render('index')
})

routes.get('/about', function(req, res){
    return res.render('about')
})

routes.get('/recipe', function(req, res){
    return res.render('recipe', { items: recipes})
})

routes.get('/recipeDetail', function(req, res){
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

routes.get('/managementRecipe', function(req, res){
    res.render('list.njk')
})

module.exports = routes