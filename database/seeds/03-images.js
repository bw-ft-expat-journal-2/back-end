exports.seed = function(knex, Promise) {
    return knex('post-images').insert([
        {
            url: `https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`,
            alt: 'ha long bay!',
            posts_id: 1
        },
        {
            url: `https://images.unsplash.com/photo-1535075303792-2c5c8d2aa7f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80`,
            alt: 'killimanjaro',
            posts_id: 2
        },
        {
            url: `https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
            alt: 'espresso',
            posts_id: 3
        },
        {
            url: `https://images.unsplash.com/photo-1518414922567-9da8c8461366?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80`,
            alt: 'tourists',
            posts_id: 4
        },
        {
            url: `https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80`,
            alt: 'weird',
            posts_id: 1
        },

    ])
}