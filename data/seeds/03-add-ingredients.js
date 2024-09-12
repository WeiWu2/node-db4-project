
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {ingredient_name:'banana'},
        {ingredient_name:'bread'}
      ]);
    });
};
