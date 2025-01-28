require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3000;
const PG_USER = process.env.PG_USER;
const PG_HOST = process.env.PG_HOST;
const PG_DATABASE = process.env.PG_DATABASE;
const PG_PASSWORD = process.env.PG_PASSWORD;
const PG_PORT = process.env.PG_PORT;

const app = express();
const pool = new Pool({
    user: PG_USER,
    host: PG_HOST,
    database: PG_DATABASE,
    password: PG_PASSWORD,
    port: PG_PORT,
});


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Health check route
app.get('/health', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW() AS current_time');
        res.status(200).json({ status: 'OK', time: result.rows[0].current_time });
    } catch (error) {
        res.status(500).json({ status: 'ERROR', message: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
