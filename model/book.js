const { bookshelf } = require("../data/bookshelf");



const Book = bookshelf.model('Book', {
  
  tableName: 'books',
  hasTimestamps: true,
  autoIncrement: true,
    summary() {
      return this.hasMany('Summary')
    },
    authors(){
      return this.hasMany('Author')
    }
  })

  module.exports = Book