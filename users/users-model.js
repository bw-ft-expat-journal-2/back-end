const db = require("../database/dbConfig");

module.exports = {
  findById,
  add,
  remove,
  update,
  getUsers,
};

function getUsers() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id: id }).first();
}

function add(user) {
    return db('users')
        .insert(project, 'id')
        .then((id) => {
            return findById(id)
        })
}

function remove() {

}

function update() {

}