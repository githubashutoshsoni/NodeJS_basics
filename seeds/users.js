/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { name: 'ramesh',address:'damo street,mixture,europe',dob:'1997-06-16' },
    { name: 'suresh',address:'2damo street,mixture,europe',dob:'1998-04-17' },
    {name: 'jeyendra',address:'3damo street,mixture,europe',dob:'1999-02-18' },
  ]);
};
