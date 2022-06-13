const dgram = require('dgram');

const client = dgram.createSocket('udp4');

var message = 'Hello World!'

client.send(message,0, message.length, 5500, '127.0.0.1');