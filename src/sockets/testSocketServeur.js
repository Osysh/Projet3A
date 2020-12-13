// côté serveur
// var app = require('express')(); // app is a requestListener function
// function Server eqs http.createServer
// app.listen eqs http.listen
// var http = require('http').Server(app); 
var http = require('http');
var serveur = http.createServer();
var io = require('socket.io')(http); // autre instance http pour socket.io

var fs = require('fs'); //required for file serving

// http.listen(3000, function(){
serveur.listen(3000, function(){
  console.log('listening on :3000');
});

//location to index.html
http.get('http://localhost:3000/', function(req, res){
// app.get('/', function(req, res){
  res.sendFile('D:\\Seatech\\3A\\Conception_application_web\\Source\\Projet-3A-IRIS-2020\\src\\public\\pageTestSocket.html');
});

//trying to serve the image file from the server
io.on('connection', function(socket){
  fs.readFile('D:\\Seatech\\3A\\Conception_application_web\\Source\\Projet-3A-IRIS-2020\\src\\public\\logo.png', function(err, buf){
    socket.emit('image', { image: true, buffer: buf.toString('base64') });
    console.log('image file is initialized');
  });
});