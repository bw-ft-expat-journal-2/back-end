const dc = require("../database/dbConfig");

module.exports = {
  findById,
  add,
  remove,
  update,
  getImages,
};

function getImages() {
    return db('images');
}

function findById(id) {
    return db('images').where({ id: id }).first()
}

function add(image) {
    return db('images')
        .insert(image, 'id')
        .then((id) => {
            return findById(id)
        })
}

function remove() {

}

function update() {

}