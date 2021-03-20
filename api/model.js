const db = require('../data/db-config')

// [
//     {
//         "ingredient_id": 1,
//         "ingredient_name": "banana",
//         "quantity": 1,
//         "step_id": 1,
//         "step_instructions": "get bananas",
//         "step_number": 1
//     },
//     {
//         "ingredient_id": 2,
//         "ingredient_name": "bread",
//         "quantity": 5.5,
//         "step_id": 2,
//         "step_instructions": "get bread",
//         "step_number": 2
//     }
// ]
const getRecipeById = async (recipe_id) => {
    const recipe = await db('Step_Ingredients as si').select('si.step_id', 'i.ingredient_id', 'quantity', 
    'step_number', 'step_instructions','st.recipe_id', 'recipe_name', 'ingredient_name')
    .leftJoin('Steps as st', 'si.step_id', 'st.step_id')
    .leftJoin('Recipes as r', 'st.recipe_id', 'r.recipe_id')
    .leftJoin('Ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .where('r.recipe_id', recipe_id)
    const formattedRecipe = {
        recipe_id: recipe[0].recipe_id,
        recipe_name:recipe[0].recipe_name,
        steps: recipe.map((recipe) => {
                return {
                    step_id:recipe.step_id,
                    step_number:recipe.step_number,
                    step_instructions:recipe.step_instructions,
                    ingredients: [{ingredient_id:recipe.ingredient_id, ingredient_name: recipe.ingredient_name, quantity: recipe.quantity}]
                }
            })
    }

    return formattedRecipe
    }



module.exports = {getRecipeById}


// [
//     {
//         "ingredient_id": 1,
//         "ingredient_name": "banana",
//         "quantity": 1,
//         "recipe_id": 1,
//         "recipe_name": "banana bread",
//         "step_id": 1,
//         "step_instructions": "get bananas",
//         "step_number": 1
//     },
//     {
//         "ingredient_id": 2,
//         "ingredient_name": "bread",
//         "quantity": 5.5,
//         "recipe_id": 1,
//         "recipe_name": "banana bread",
//         "step_id": 2,
//         "step_instructions": "get bread",
//         "step_number": 2
//     }
// ]