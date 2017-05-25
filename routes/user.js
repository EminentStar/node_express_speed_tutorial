var express = require('express')
var router = express.Router();

// This responds a DELETE request for the /del_user page
router.delete('/', function(req, res){
    console.log('Got a DELETE request for the del_user');
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
router.get('/list', function(req, res){
    console.log('Got a DELETE request for the /list_user');
    res.send('Page Listing');
})


/*
* 이렇게 route 모듈을 export를 해줘야한다
* 안해주면 express 엔진은 해당 라우트에 접근불가함
* */
module.exports = router;