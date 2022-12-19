/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('playlist').del()
  await knex('playlist').insert([
    {id: 1, name: 'classic sanskrit',song_ids:"1,2,3",songs:"some songs"},
    {id: 2, name: 'party_theme',song_ids:"1,2,3",songs:"some songs"},
    {id: 3, name: 'old_retro',song_ids:"1,2,3",songs:"some songs"},
  ]);
};
