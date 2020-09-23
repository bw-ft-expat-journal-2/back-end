const db = require("../database/dbConfig");

module.exports = {
  findById,
  add,
  remove,
  update,
  getPosts,
};

function getPosts() {
    return db('posts');
}

function findById(id) {
    return db('posts').where({ id: id }).first()
}

// function add(post) {
//     return db('posts')
//         .insert(post, 'id')
//         .then((id) => {
//             return findById(id)
//         })
// }

function add(post) {
	return db('posts').insert(post, 'id').then((ids) => {
		const [ id ] = ids;
		return findById({ id });
	});
}

function remove(id) {
    return db('posts').where({ id: id }).first().del()
}

function update(id, post) {
    return db('posts').where({ id: id }).first().update(post)
}