const config = require('../config')

const mongoose = require('mongoose')
const db_URI = 'mongodb://tbd:tbd@ds149437.mlab.com:49437/statcart'
console.log('db returned')

const dbConfig = {
	user: config.db.user,
	password: config.db.password,
	database: config.db.database,
	host: config.db.host,
	port: config.db.port,
	max: config.db.max,
	idleTimeoutMillis: config.db.idleTimeoutMillis,
}


function connect(){
	const options = {
		useMongoClient: true,
		autoIndex: false, // Don't build indexes
		reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
		reconnectInterval: 500, // Reconnect every 500ms
		poolSize: 10, // Maintain up to 10 socket connections
		// If not connected, return errors immediately rather than waiting for reconnect
		bufferMaxEntries: 0,
		connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
		socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
		family: 4 // Use IPv4, skip trying IPv6
	};
	mongoose.createConnection(db_URI, options, function(error){
	  console.log('mongodb connected')
	})
	db = mongoose.connection
	return db
  }

module.exports = function(){
	connect()
}
