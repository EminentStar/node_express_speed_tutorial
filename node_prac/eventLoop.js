var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('connection successful.');

    // Fire an event
    eventEmitter.emit('data_received');
}

//Bind event and event handler as follows
eventEmitter.on('connection', connectHandler);


//Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received successfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended');
