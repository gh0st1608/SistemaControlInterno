const pg = require('pg')

// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
var config = {
  user: 'postgres', // env var: PGUSER
  database: 'dbpostgres', // env var: PGDATABASE
  password: 'santiago123', // env var: PGPASSWORD
  host: 'instpostgres.cgp7o6r1hiqa.us-east-1.rds.amazonaws.com', // Server hosting the postgres database
  port: 5432, // env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}

const pool = new pg.Pool(config)

async function query (q:any,p:any) {
  const client = await pool.connect()
  let res
  try {
    await client.query('BEGIN')
    try {
      res = await client.query(q,p)
      await client.query('COMMIT')
    } catch (err) {
      await client.query('ROLLBACK')
      throw err
    }
  } finally {
    client.release()
  }
  return res
}

module.exports = query