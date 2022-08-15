const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'assist',
        password: 'password',
        database: 'business'
    },
    console.log('Connected to the business database.')
);

module.exports = db;