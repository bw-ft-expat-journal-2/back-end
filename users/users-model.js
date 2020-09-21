const db = require("../database/dbConfig");

module.exports = {
  findBy,
  add,
  remove,
  update,
  get,
};

function get() {
  return db("users");
}

function findBy(id) {
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