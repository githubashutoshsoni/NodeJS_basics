var express = require('express');
var app = express();
var users = require('./users/index')

app.use('/users',users)

const PSQL_PORT='127.0.0.1:5432'


const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: '34.70.240.206',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})


client.connect(function(err) {
  if (err) throw err;
  console.log("Connected! to datbase!!!");
});


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