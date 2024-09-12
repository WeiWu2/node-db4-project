
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {step_number:1, step_instructions:"get bananas", recipe_id:1},
        {step_number:2, step_instructions:"get bread", recipe_id:1},
        {step_number:3, step_instructions:"make banana bread", recipe_id:1},
      ]);
    });
};
