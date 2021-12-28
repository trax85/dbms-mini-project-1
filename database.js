const mysql = require('mysql');

// setting the db credentials
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sharan',
    password: 'SharanSql@90350',
    database: 'nodeapp'
});

// establishing connection to the database
connection.connect(function(err) {
    if(err) throw err;
    console.log('database is connected successfully !');
});

module.exports = connection;