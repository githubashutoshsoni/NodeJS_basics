/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return  knex.raw('ALTER table credit_card ADD CONSTRAINT fk_credit_users_id FOREIGN KEY (user_id) REFERENCES users(id) ');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.raw('ALTER table credit_card DROP CONSTRAINT fk_credit_users_id');
};
