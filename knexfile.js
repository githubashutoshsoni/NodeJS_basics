// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    debug:true,
    client: 'postgresql',
    connection: {
      host :'127.0.0.1',
      database: 'postgres',
      user:     'postgres',
      password: 'postgres'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host :'127.0.0.1',
      port:5433,
      database: 'postgres',
      user:     'postgres',
      password: 'soni'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      port:5433,
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
