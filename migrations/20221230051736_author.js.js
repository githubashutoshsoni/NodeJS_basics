exports.up = function(knex) {
    return knex.schema.createTable('authors', function(table) {
      table.increments('id').primary()
      table.string('name')
    }).createTable('authors_books', function(table) {
      table.integer('author_id').unsigned().references('authors.id')
      table.integer('book_id').unsigned().references('books.id')
    }).then(result=>console.log(result));
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('authors_books')
      .dropTable('authors')
      .dropTable('books').then(result=>console.log(result));
  }