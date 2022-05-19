// npm install @faker-js/faker --save-dev
const { faker } = require('@faker-js/faker');

// npm install mysql
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',     // your root username
//   database : 'join_us',   // the name of your db
//   password : process.env.MYSQL_PW // your root user's password
// });

// export MYSQL_PW='your password :)' @ terminal

for(var i = 0; i < 8; i++) {
    console.log("Hello Vicky! From", faker.address.city());
}
