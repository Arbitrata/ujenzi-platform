const knex = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.DATABASE_HOST,
      user : process.env.DATABASE_USER,
      port: process.env.DATABASE_PORT,
      password :  process.env.DATABASE_USER_PASSWORD,
      database :  process.env.DATABASE
    },
    pool: { min: 0, max: 7 }
  });

module.exports = knex;