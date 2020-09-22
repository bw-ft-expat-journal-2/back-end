exports.seed = function(knex, Promise) {
    return knex('post-images').insert([
        {
            url: `https://unsplash.com/photos/vcu-OZBxxRk`,
            alt: 'ha long bay!',
            posts_id: 1
        },
        {
            url: 'https://unsplash.com/photos/3xJ9AeCwjTQ',
            alt: 'killimanjaro',
            posts_id: 2
        },
        {
            url: 'https://unsplash.com/photos/69ilqMz0p1s',
            alt: 'espresso',
            posts_id: 3
        },
        {
            url: `https://unsplash.com/photos/n0CTq0rroso`,
            alt: 'tourists',
            posts_id: 4
        },
        {
            url: `https://unsplash.com/photos/qWlkCwBnwOE`,
            alt: 'weird',
            posts_id: 1
        },

    ])
}