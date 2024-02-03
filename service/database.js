const { Pool } = require('pg');
const user = process.env['DB_USER'];
const password = process.env['DB_PASSWORD'];
const host = process.env['DB_HOST'];
const database = process.env['DB_DATABASE'];
const port = process.env['DB_PORT'];

// Create a connection pool
const pool = new Pool({
    user: user,
    password: password,
    host: host,
    database: database,
    port: port,
    ssl: {
        rejectUnauthorized: false, // For SSL encryption
    },
});

// Export a function to get a connection from the pool
exports.getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.connect().then((connection) => {
            resolve(connection);
        }).catch((err) => {
            reject(err);
        });
    });
};

// Export the pool for other modules to use
exports.pool = pool;
