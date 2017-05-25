var express = require('express')
var router = express.Router();


router.get('/', function(req, res){
    //Prepare output in JSON format
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
})

//app.post('/process_post', urlencodedParser, function(req, res){
router.post('/', function(req, res){
    //Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
})


/*
* 이렇게 route 모듈을 export를 해줘야한다
* 안해주면 express 엔진은 해당 라우트에 접근불가함
* */
module.exports = router;