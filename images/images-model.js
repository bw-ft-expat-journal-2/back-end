const db = require("../database/dbConfig");

module.exports = {
  findById,
  add,
  remove,
  update,
  getImages,
};

function getImages() {
    return db('post-images');
}

function findById(id) {
    return db('post-images').where({ id: id }).first()
}

function add(image) {
    return db('post-images')
        .insert(image, 'id')
        .then((id) => {
            return findById(id)
        })
}

function remove(id) {
    return db('post-images').where({ id: id }).first().del()
}

function update(id, image) {
    return db('post-images').where({ id: id }).first().update(image)
}