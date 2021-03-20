const express = require('express')
const server = express()
const db = require('../data/db-config')
server.use(express.json())

const getRecipeById = (recipe_id) => {
return db('recipes').where('recipe_id', recipe_id)
}

server.get('/:id', (req,res) => {
    getRecipeById(req.params.id)
    .then((recipe) => {
        res.json(recipe)
    })
    .catch((err) => {
        console.log(err)
    })
    
})

module.exports = server