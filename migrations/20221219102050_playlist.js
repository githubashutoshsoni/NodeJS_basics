/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex,Promise) {
  return  knex.schema.createTable('playlist', function(t) {
        t.increments().primary();
        t.string('name').comment('This is the playlist field');
        t.string('songs').comment('this is songs field');
        t.string('song_ids').comment('this is song id ');
      }).then(result=>console.log(result));

      
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return  knex.schema.dropTableIfExists('playlist').then(result=>console.log(result));
};
