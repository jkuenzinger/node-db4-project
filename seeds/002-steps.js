exports.seed = function(knex) {
    return knex("steps")
      .truncate()
      .then(function() {
        return knex("steps").insert([
          {
            recipe_id: 1,
            step_number: 1,
            description: "remove toes"
          },
          {
            recipe_id: 1,
            step_number: 2,
            description: "boil toes in earwax broth"
          },
          { recipe_id: 1, step_number: 3, description: "add fingers" }
        ]);
      });
  };