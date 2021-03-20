
exports.up = function(knex) {
  return knex.schema
  .createTable('Recipes', (tbl) => {
    tbl.increments('recipe_id')
    tbl.string('recipe_name', 120).unique()
  })
  .createTable('Steps', (tbl) => {
    tbl.increments('step_id')
    tbl.integer('step_number')
    tbl.text('step_instructions')
    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe_id')
    .inTable('Recipes')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
  })
  .createTable('Ingredients', (tbl) => {
    tbl.increments('ingredient_id')
    tbl.string('ingredient_name', 120).unique()
   
  })
  .createTable('Step_Ingredients', (tbl) => {
    tbl.increments('step_ingredient_id')
    tbl.integer('step_id')
    .unsigned()
    .notNullable()
    .references('step_id')
    .inTable('Steps')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
    tbl.integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('ingredient_id')
    .inTable('Ingredients')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
    tbl.float('quantity')

  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Step_Ingredients')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Steps')
    .dropTableIfExists('Recipes')
};
