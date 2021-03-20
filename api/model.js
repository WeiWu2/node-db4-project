const db = require('../data/db-config')


const getRecipeById = (recipe_id) => {
    return db('recipes').where('recipe_id', recipe_id)
    }


module.exports = {getRecipeById}