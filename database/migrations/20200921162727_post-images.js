exports.up = function (knex) {
  return knex.schema.createTable("post-images", (images) => {
    images.increments().primary();
    images.string("url", 255).notNullable();
    images.string("alt", 100).notNullable();
    images
      .integer("posts_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("posts");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('post-images')
};
