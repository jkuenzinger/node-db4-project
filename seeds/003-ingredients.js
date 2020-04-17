exports.seed = function(knex) {
    return knex("ingredients")
      .truncate()
      .then(function() {
        return knex("ingredients").insert([
          { ingredient_name: "Toes", ingredient_amount: 1 },
          { ingredient_name: "ears", ingredient_amount: 1 },
          { ingredient_name: "number of toes", ingredient_amount: 1.5 }
        ]);
      });
  };