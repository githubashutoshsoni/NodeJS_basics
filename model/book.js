const dbConfig = require('../data/db');
const bookshelf = require('bookshelf')(dbConfig)
 require('./summary')


const Book = bookshelf.model('Book', {
  
  tableName: 'books',
    // summary() {
    //   return this.hasMany('Summary')
    // }
  })

  module.exports = Book