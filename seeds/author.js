/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('authors').del()
  await knex('authors_books').del()
  await knex('authors').insert([
    {id: 1, name: 'lemony snickeet '},
    {id: 2, name: 'Sir Arthur conan doyale'},
    {id: 3, name: 'j.k rowling. '},
  ]);

  

  await knex('authors_books').insert([
    {author_id: 1, book_id: 1},
    {author_id: 2, book_id: 2},
    {author_id: 3, book_id: 3},
    {author_id: 3, book_id: 4}
  ]);

};
