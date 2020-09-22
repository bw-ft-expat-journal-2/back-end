const db = require("../database/dbConfig");

module.exports = {
  findById,
  add,
  remove,
  update,
  getUsers,
  findBy
};

function getUsers() {
  return db("users");
}

function findBy(filter) {
  return db('users').where(filter).first()
}

function findById(id) {
  return db("users").where({ id: id }).first();
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then((id) => {
            return findById(id)
        })
}

function remove() {

}

function update() {

}