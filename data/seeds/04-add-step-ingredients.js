
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Step_Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Step_Ingredients').insert([
        {step_id:1, ingredient_id:1, quantity:1},
        {step_id:2, ingredient_id:2, quantity:5.5}
      ]);
    });
};
