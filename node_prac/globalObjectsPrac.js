console.log("__filename: " + __filename);
console.log("__dirname: " + __dirname);



/*
 * setTimeout(cb, ms)는 ms후에 cb를 실행시키기 위한 함수
 * */
function printHelloTimeout(){
    console.log("SetTimeout: Hello, World!");
}
setTimeout(printHelloTimeout, 1000);

/*
* clearTimeout(t)은 setTimeout()과 함께 생성된 타이머를 멈추는 것
* */

function printHelloClear(){
    console.log("SetTimeout: Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHelloClear, 2000);

// Now clear the timer
clearTimeout(t);

/*
* setInterval(cb, ms) 글로벌 펑션은 callback;cb를 적어도 milliseconds;ms마다 반복해서 실행시키기 위해 사용됨
* */
function printHelloInterval(){
    console.log("Set Interval: Hello, World!");
}
//Now call above function after 2 seconds
setInterval(printHelloInterval, 2000);