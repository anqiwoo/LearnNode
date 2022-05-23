const mysql = require('mysql');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PW,
    database: 'join_us'
});


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    // Find the count of users in DB
    var q = "SELECT COUNT(*) count FROM users";
    connection.query(q, function(err, results) {
        if (err) throw err;
        var count = results[0].count;
        res.render('home', { count: count });
    }); // Put them within one parens -> Just to prevent callback hell!!!
});

app.post('/register', function(req, res) {
    var person = { email: req.body.email };
    connection.query('INSERT INTO users SET ?', person, function(err, results) {
        if (err) throw err;
        console.log(err);
        console.log(results);
        res.redirect('/');
    });
})

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