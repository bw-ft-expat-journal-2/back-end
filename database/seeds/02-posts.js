exports.seeds = function(knex, Promise) {
    return knex('posts').insert([
        {
            title: 'Best Restaurants near Ha Long Bay',
            contents: 'Eat some spicy noodles!',
            users_id: 1
        },
        {
            title: 'How to Summit Killamanjaro',
            contents: 'Eat some spicy noodles!',
            users_id: 2
        },
        {
            title: 'My Favorite Places to Get Espresso in Rome',
            contents: 'Eat some spicy noodles!',
            users_id: 3
        },
        {
            title: `45 Reasons Some Travel Places Are Overrated (You'll Never Guess Which!)`,
            contents: 'Eat some spicy noodles!',
            users_id: 4
        },
        {
            title: `I reall couldn't think of another titile`,
            contents: 'Eat some spicy noodles!',
            users_id: 1
        },

    ])
}