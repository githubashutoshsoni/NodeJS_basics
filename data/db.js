
require("dotenv").config();


// const knex = require('knex');
// const db = knex({
//    client: 'pg',
//    connection: {
//      host: '127.0.0.1',
//      user: 'postgres',
//      password: 'postgres',
//      database: 'postgres',
//      port:5432
//    },
//  });


let knex = require('knex')


const knexConfig = require('../knexfile');
const discolse = knexConfig['staging']
console.log('process.env.NODE_ENV ' + process.env.NODE_ENV)
//initialize knex 
// todo help see how to fix the issue with 
module.exports = knex(knexConfig['staging'])


