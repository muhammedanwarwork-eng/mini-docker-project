const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// DB connection
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Hello from Node.js! DB time: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

