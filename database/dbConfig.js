const knex = require('knex');

const knexConfig = require('../knexfile');

const environment = process.env.DB_ENV || 'development';

const config = knexConfig[environment]

module.exports = knex(config);