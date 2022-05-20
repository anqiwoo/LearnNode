// npm install @faker-js/faker --save-dev
const { faker } = require('@faker-js/faker');

// npm install mysql
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your root username
    database: 'join_us', // the name of your db
    password: process.env.MYSQL_PW // your root user's password
});

// export MYSQL_PW='your password :)' @ terminal

// SELECT DATA!!!
// var q = 'SELECT COUNT(*) total FROM users';
// connection.query(q, function(err, results) {
//     if (err) throw err;
//     console.log(results);
// });

// connection.end();

// INSERT DATA TAKE 1
// var q = 'INSERT INTO users (email) VALUES ("sdfdfaf@yahoo.com")';
// connection.query(q, function(err, results) {
//     if (err) throw err;
//     console.log(results);
// });
// connection.end();

// INSERT DATA TAKE 2
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };

// connection.query('INSERT INTO users SET ?', person, function(err, results) {
//     if (err) throw err;
//     console.log(results);
// });
// connection.end();


// INSERT A BULK OF DATA AT ONE GO
var data = [];
// generate a bulk of data
for (var i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
};
// insert a bulk of data in an array way
connection.query('INSERT INTO users (email, created_at) VALUES ?', [data], function(err, results) {
    if (err) throw err;
    console.log(results);
});
connection.end();