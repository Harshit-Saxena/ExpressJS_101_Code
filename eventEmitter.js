const eventEmitter = require('events');



const customEventEmitter = new eventEmitter();

customEventEmitter.on('response', (name, id) => {
    console.log(`data received ${name} ${id}`);
})

customEventEmitter.on('response', () => {
    console.log(`data received`);
})

customEventEmitter.emit('response', 'harsh',24)

// this is server creating and extending eventEmiiter
const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
    res.end('Welcome to LocusCoder ')
})
