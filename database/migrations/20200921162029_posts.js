exports.up = function (knex) {
  return knex.schema.createTable("posts", (posts) => {
    posts.increments();
    posts.string("title", 255).notNullable();
    posts.string("contents", 5000).notNullable();
    posts
      .integer("users_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts')
};
