const express = require('express')

const server = express()

server.get('/', function(req, res){
    return res.send('All okay!')
})







server.listen(5000, function(){
    console.log("It's running")
})