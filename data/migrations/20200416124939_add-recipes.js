
exports.up = function(knex) {
  return (
      knex.schema
      .createTable("recipes", tbl => {
          tbl.integer("id").primary();
      })
  )
};

exports.down = function(knex) {
  
};
