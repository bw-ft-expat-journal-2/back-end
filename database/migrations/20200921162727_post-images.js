exports.up = function (knex) {
  return knex.schema.createTable("post-images", (images) => {
    images.increments();
    images.string("url", 255).notNullable().onUpdate('CASCADE');
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
