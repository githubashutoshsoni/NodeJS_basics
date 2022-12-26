/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('credit_card').del()
  await knex('credit_card').insert([
    {id: 1, number: '123456', cvv:'123',date:'1997-04-11', user_id:1},
    {id: 2, number: '543', cvv:'234',date:'1998-03-21', user_id:2},
    {id: 3, number: '1235', cvv:'456',date:'1999-05-31', user_id:3},
  ]);
};
