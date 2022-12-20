/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
 return knex.schema.createTable('credit_card', function (table) {
  table.increments().unique;
  table.string('number');
  table.string('cvv');
  table.date('date').defaultTo(knex.fn.now());
  table.integer('user_id');
  table.timestamps();
}).then(result=>console.log(result));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
return  knex.schema.dropTableIfExists('credit_card').then(result=>console.log(result));
};
