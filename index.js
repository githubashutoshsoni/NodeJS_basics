var express = require('express');
var app = express();
var users = require('./users/index')
const cors = require("cors");
const db = require("./data/db.js");
app.use('/users',users)


// const knexConfig = require('./knexfile');
// const discolse = knexConfig['staging']

// //initialize knex
// const knex = require('knex')(knexConfig['staging'])



var corsOptions = {
   origin: "http://127.0.0.1:8081"
 };
 
 app.use(cors(corsOptions));
 
 // parse requests of content-type - application/json
 app.use(express.json());

 // parse requests of content-type - application/x-www-form-urlencoded
 app.use(express.urlencoded({ extended: true }));

 app.get("/todo", async (req, res) => {
   const todos = await db("todo"); // making a query to get all todos
   res.json({ todos });
 });
 

// const { Client } = require('pg')
// const client = new Client({
//   user: 'postgres',
//   host: '34.70.240.206',
//   database: 'postgres',
//   password: 'postgres',
//   port: 5432,
// })


// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected! to datbase!!!");
// });


// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})


var server = app.listen(8081,'127.0.0.1', function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})