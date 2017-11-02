var app = require('express')();
var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var _ = require('underscore')._;


app.use(sassMiddleware({
    /* Options */
    src: __dirname + '/sass',
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/> 
}));

app.use(express.static('public'));

if(!rooms){
	var rooms = [ 
		'p',
		'i',
		't',
		'o',
		'tt',
		'h',
		'c'
	];
	console.log("SetRooms: " + rooms);
}
if(!room){
	var room = 'default';
	console.log("SetRoom: " + room);
}

if(!history){
	var history = {};
		history[room] = [];

for (var i in rooms) {
  val = rooms[i];
  history[val] = [];
  console.log("SetHistoryRooms: " + val);
  console.log("History: " + history[val]);
}

}

function setRoom(r){
	room = r;
	console.log("SetRoom: " + room);
}

console.log('Server Running');
console.log('Server Default Room: ' + room);


app.get('/bingo/:id*', function(req, res){

  console.log('Get - Ha solicitado unirse a: ' + req.params.id);
  if(_.contains(rooms, req.params.id)){
  	r = req.params.id;
  	console.log('Get - Room: ' + r + ' existe!');
  	setRoom(r);
  }else{
    r = 'bingoDefault';
    console.log('Get - NO existe!');
    setRoom(r);
  }
  res.sendFile(__dirname + '/bingo.html');
});

app.get('/*', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

console.log('Out Room: ' + room);
console.log('Out History: ' + history)
    
	io.sockets.on('connection', function(socket) {
		console.log('Connection - Nueva conexión de: ' + socket);
		socket.on('disconnect', function(){
		    console.log('Connection - Conexión terminada de:' + socket.id);
	 	});
	    
		socket.on('ultimo numero', function(nro){
			io.to(room).emit('ultimo numero', nro);
			history[room].push(nro);
			console.log('Ult Num History[' + room + ']: ' + history[room]);
		});
		socket.on('join', function(room) {
	    	console.log('Join ' + socket.id + ' ha entrado a ' + room);
	        socket.join(room);
	        room = room;       
        	var keys = _.keys(history);
        	console.log("Join History: " + history);
        	console.log("Join History[room]: " + history[room]);
        	if (_.contains(keys, room)) {
				socket.emit("history", history[room]);
				console.log('Emit history - Room: ' + room);
			}else{
				console.log('Join - Room: ' + room);
				console.log('Join - sin datos');
			}
	    });
	
	});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
