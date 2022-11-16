const config ={
  client: 'pg',
  version: '8.8.0',
  connection: {
    host : process.env.DATABASE_HOST,
    port : process.env.DATABASE_PORT,
    user : process.env.DATABASE_USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
  },
  pool: { min: 0, max: 15 }
};

const knex = require('knex')(config);

module.exports = knex;