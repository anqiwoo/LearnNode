const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    console.log(req);
    res.send('Hello World!');
});


app.listen(port, function() {
    console.log('listening on port', port);
});