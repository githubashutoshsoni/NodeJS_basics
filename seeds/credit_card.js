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
    {id: 4, number: '98425', cvv:'4456',date:'1998-04-11', user_id:1},
    {id: 5, number: '45623', cvv:'3258',date:'1999-03-21', user_id:2},
    {id: 6, number: '98655', cvv:'9863',date:'1910-05-31', user_id:3},



  ]);
};
