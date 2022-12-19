/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert([
    {id: 1, name: 'tujhe dekha to yeh jana sanam'},
    {id: 2, name: 'heart on fire'},
    {id: 3, name: 'sapno ki rani kab aayegi tuu. '}
  ]);
};
