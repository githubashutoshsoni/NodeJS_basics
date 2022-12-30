/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('authors_books').del()
  await knex('summaries').del()
  await knex('books').del()
  
  

 
 
  // Deletes ALL existing entries

  await knex('books').insert([
    {id: 1, name: 'A series of unfortunate events'},
    {id: 2, name: 'Sherlock Holmes'},
    {id: 3, name: 'Harry potter'},
    {id:4,name:'The cuckos calling'}
  ]);

   await knex('summaries').insert([{ id:1,details:'This is a really funny book. you gotta read this by lemony snicket',book_id:1
  },
  { id:2,details:'This is a really witty and intelligent book of holmes. He is an amazing detective after all. written by sir arthur conan doyale',book_id:2
  },
  { id:3,details:'This is a written by jk rowling',book_id:3
  }


])


};
