var express = require('express')
var router = express.Router();

/*
router.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/", "index.html");
})


// Request & Response
router.get('/', function(req, res){
    console.log('Got a GET request for the homepage');
    res.send('Hello GET');
})

// This responds a POST request for the homepage
router.post('/', function(req, res){
    console.log('Got a POST request for the homepage');
    res.send('Hello POST');
})
*/

router.get('/', function(req, res, next){
    resultJson = {
        title: 'Express Test',
        languages: ['php', 'node', 'ruby'],
        user: {
            //admin: true
            name: "Junkyu Park",
            contact: {
                twitter: "MyTwitter"
            },
            address: {
                city: "Seoul",
                state: "Seoul"
            }
        }
    };
    res.render('index', resultJson);
});

router.get('/unescaped_output', function(req, res, next){
    resultJson = {
        arr: [
            '<a>a</a>',
            '<i>italic</i>',
            '<strong>bold</strong>'
        ]
    };
    res.render('index', resultJson);
});
/*
* 이렇게 route 모듈을 export를 해줘야한다
* 안해주면 express 엔진은 해당 라우트에 접근불가함
* */
module.exports = router;