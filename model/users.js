let express = require('express')

let dbConfig = require('../data/db.js');
const bookshelf = require('bookshelf')(dbConfig)
const CreditCard = require('./creditcard')





const User = bookshelf.Model.extend({ 
  tableName:'users',
  credit_cards(){
    return this.hasOne('CreditCard')
  }
  })
  
  

// module.exports = {router,User}

module.exports = User

