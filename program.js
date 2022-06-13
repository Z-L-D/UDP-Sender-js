const dgram = require('dgram');

const socket_object = dgram.createSocket('udp4');

var command = "Hello From Javascript";
var address = "127.0.0.1";
var port = 5500;

socket_object.send(command,0, command.length, port, address);