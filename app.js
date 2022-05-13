// install faker in your command line: npm install @faker-js/faker --save-dev
// require it inside of a JS file: const { faker } = require('@faker-js/faker'); 


const { faker } = require('@faker-js/faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PW,
    database: 'join_us'
});

// INSERT a single user!!!!===============================
// var person = {
//     'email': faker.internet.email(),
//     'created_at': faker.date.past()
// };

// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//     if (err) throw err;
//     console.log(result);
// });

// INSERT 500 users!!!!===============================
var data = [];
for (var i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?';

var end_result = connection.query(q, [data], function(err, result) {
    if (err) throw err;
    console.log(result);
});
// console.log(end_result.sql); //print out the compiled sql code ~~~
connection.end();

function generateAddress() {
    console.log(faker.address.streetAddress());
    console.log(faker.address.city());
    console.log(faker.address.state());
}

generateAddress();