const dgram = require('dgram');

var command = "Hello from Javascript";
var address = "127.0.0.1";
var port = 5500;

const socket_object = dgram.createSocket('udp4');
socket_object.send(command,0, command.length, port, address);