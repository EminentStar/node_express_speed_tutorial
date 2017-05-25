var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

var bodyParser = require('body-parser');
var multer = require('multer');


var routes = require('./routes/index');
var user = require('./routes/user');
var process = require('./routes/process');

app.use(express.static('public'));
// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json()); //parse_json_field api를 쓰고 싶을떄 풀어야함

app.use('/', routes);
app.use('/user', user);
app.use('/process', process);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('ab*cd', function(req, res){
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})


app.get('/listUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data){
        console.log(data);
        res.end(data);
    });
})

var userJson = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}

app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = userJson["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

// Show Detail
app.get('/:id', function(req, res){
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", "utf8", function(err, data){
        users = JSON.parse(data);
        var userData = users["user" + req.params.id]
        console.log(userData);
        res.end(JSON.stringify(userData));
    });
})

var id = 2;

app.delete('/deleteUser', function(req, res){
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", "utf8", function(err, data){
        data = JSON.parse(data);
        delete data["user" + 2];

        console.log(data);
        res.end(JSON.stringify(data));
    })
})


app.post('/parse_json_field',function(req, res){
    //Prepare output in JSON format
    console.log(req.body)
    res.send(JSON.stringify(req.body));
})


var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
})

module.exports = app;
