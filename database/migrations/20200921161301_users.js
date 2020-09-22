exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.increments().primary();
    users.string("username", 255).notNullable().unique();
    users.string("password", 255).notNullable();
    users.string("email", 255).notNullable();
    users.string("location", 255);
  });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
