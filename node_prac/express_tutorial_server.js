var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');


var routes = require('./routes/index');


app.use(express.static('public'));
// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json()); //parse_json_field api를 쓰고 싶을떄 풀어야함

app.use('/', routes);


app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/", "index.html");
})


// Request & Response
app.get('/', function(req, res){
    console.log('Got a GET request for the homepage');
    res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function(req, res){
    console.log('Got a POST request for the homepage');
    res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page
app.delete('/del_user', function(req, res){
    console.log('Got a DELETE request for the del_user');
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function(req, res){
    console.log('Got a DELETE request for the /list_user');
    res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('ab*cd', function(req, res){
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})

app.get('/process_get', function(req, res){
    //Prepare output in JSON format
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
})

//app.post('/process_post', urlencodedParser, function(req, res){
app.post('/process_post', function(req, res){
    //Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
})

app.get('/listUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data){
        console.log(data);
        res.end(data);
    });
})

var user = {
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
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

// Show Detail
app.get('/:id', function(req, res){
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", "utf8", function(err, data){
        users = JSON.parse(data);
        var user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
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
