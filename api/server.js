const express = require('express')
const server = express()
const Recipe = require('./model')
server.use(express.json())


server.get('/:id', (req,res) => {
    Recipe.getRecipeById(req.params.id)
    .then((recipe) => {
        res.json(recipe)
    })
    .catch((err) => {
        console.log(err)
    })
    
})

module.exports = server