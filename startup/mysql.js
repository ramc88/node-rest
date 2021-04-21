const mysql = require('mysql');

function init() {
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
        console.log('The solution is: ', results[0].solution);
    });

    global.mySql = connection;

    let credentials1 = {};
    Object.assign(credentials1, credentials);
    credentials1.connectionLimit = 10;

    const pool = mysql.createPool(credentials1);

    pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });

    global.mySqlPool = pool;
};

module.exports = {
    init,
};