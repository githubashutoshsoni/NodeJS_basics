/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments().unique;
        table.string('name');
        table.string('address');
        table.date('dob');
        table.timestamps();
      }).then(result=>console.log(result));
};



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
 return knex.schema.dropTableIfExists('users').then(result=> console.log(result));
};
