const config = require('../config')

const mongoose = require('mongoose')
const db_URI = 'mongodb://admin:tbd_admin9081@ds135364.mlab.com:35364/tbd'


const options = {
	useNewUrlParser: true,
	autoIndex: false, // Don't build indexes
	reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
	reconnectInterval: 500, // Reconnect every 500ms
	poolSize: 10, // Maintain up to 10 socket connections
	// If not connected, return errors immediately rather than waiting for reconnect
	bufferMaxEntries: 0,
	connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	family: 4 // Use IPv4, skip trying IPv6,
	
};

mongoose.connect(db_URI, options, function(err){
	if (err) return err;
	console.log("mongo DB has connected")
});

mongoose.connection.on('error',function (err) {  
	console.log('Mongoose default connection error: ' + err);
}); 
  
mongoose.connection.on('disconnected', function () {  
	console.log('Mongoose default connection disconnected'); 
  });

process.on('SIGINT', function() {
	mongoose.connection.close(function(){
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	})
}); 
  

//=============== possible code used in the future ===================
// const dbConfig = {
// 	user: config.db.user,
// 	password: config.db.password,
// 	database: config.db.database,
// 	host: config.db.host,
// 	port: config.db.port,
// 	max: config.db.max,
// 	idleTimeoutMillis: config.db.idleTimeoutMillis,
// }


function createConnection(){
	console.log('create connection returned')
	return mongoose.createConnection(db_URI, function(err){
		if (err) return err;
		console.log('mongodb connection returned');
	});
}


module.exports.createConnection = createConnection()
