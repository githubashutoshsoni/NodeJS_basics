/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    { task: 'rowValue1'},
    { task: 'rowValue2'},
    { task: 'rowValue3'}
  ]);
};
