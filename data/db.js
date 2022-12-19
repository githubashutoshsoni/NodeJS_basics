

const knexfile = require('../knexfile');

const knex = require('knex');
const db = knex({
   client: 'pg',
   connection: {
     host: '127.0.0.1',
     user: 'postgres',
     password: 'postgres',
     database: 'postgres',
     port:5432
   },
 });



//  module.exports = db

  
const env = process.env.NODE_ENV || 'staging';
const configOptions = knexfile[env];

module.exports = knex(configOptions);
