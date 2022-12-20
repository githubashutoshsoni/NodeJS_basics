/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable('songs', function(t) {
        t.increments().primary().comment('this is song id ');;
        t.string('name').comment('This is the playlist field');
        t.string('length').comment('this is songs field');
      }).then(result=>console.log(result));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTableIfExists('songs').then(result=>console.log(result));
};
