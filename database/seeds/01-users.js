exports.seed = function(knex, Promise) {
    return knex('users').insert([
        {
            username: 'LoganMetzger',
            password: 'securepassword',
            email: 'logan@logan.com',
        },
        {
            username: 'AndrewMuto',
            password: 'reduxisfun',
            email: 'andrew@andrew.com',
        },
        {
            username: 'JamesLundin',
            password: 'woohoo',
            email: 'james@james.com',
        },
        {
            username: 'JeffreyOrndorff',
            password: 'yayfortls',
            email: 'jeffry@jeffrey.com',
        },
    ])
}