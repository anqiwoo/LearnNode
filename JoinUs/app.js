const { faker } = require('@faker-js/faker');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PW,
    database: 'join_us'
});

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    // Find the count of users in DB
    var q = "SELECT COUNT(*) count FROM users";
    connection.query(q, function(err, results) {
        if (err) throw err;
        var count = results[0].count;
        res.render('home', { count: count });
        // var msg = "We have " + results[0].count + " users in our db!";
        // res.send(msg);
    });
    // console.log(req);
    // res.send('Hello World!');
});

app.get('/joke', function(req, res) {
    var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
    res.send(joke);
});

app.get("/luckyNumber", function(req, res) {
    var num = Math.floor(Math.random() * 10) + 1;
    res.send('Your lucky number is ' + num);
});

app.listen(port, function() {
    console.log('listening on port', port);
});