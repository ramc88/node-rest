const mysql = require('mysql2');

function init() {
    console.log("\x1b[34m%s\x1b[0m", '               CONNECTING TO MYSQL')
    const credentials = process.env.MYSQL ? JSON.parse(process.env.MYSQL) : undefined || global.config.db.mysql;

    // CREDENTIALS EXAMPLE
    // {
    //     host: 'localhost',
    //     user: 'me',
    //     password: 'secret',
    //     database: 'my_db'
    // }

    const connection = mysql.createConnection(credentials);

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log("\x1b[34m%s\x1b[0m", '              ➪ connection established');
    });

    global.mySql = connection;

    let credentials1 = {};
    Object.assign(credentials1, credentials);
    credentials1.connectionLimit = 10;

    const pool = mysql.createPool(credentials1);

    pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log("\x1b[34m%s\x1b[0m", '              ➪ pool opened');
    });

    global.mySqlPool = pool;
};

module.exports = {
    init,
};