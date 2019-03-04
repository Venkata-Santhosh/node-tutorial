const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('node-tutorial:server');

const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// parse request body
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

// // will be executed for every requests
// app.use ((req, res, next) => {
// 	// request, response, next - actually function 
// 	console.log('In the middleware ')
// 	next();
// });

app.use('/admin',adminRoutes);
app.use(shopRoutes);





// const server = http.createServer(app);

// server.listen(3000);

// Express Js is all about middleware 


app.use('/', (req, res, next) => {

	res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
});

// const server = http.createServer(app);

const server = app.listen(3000, () => {
	console.log('listening on port 3000');
});


server.on('listening', ()=> {
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	debug('Listening on ' + bind);
});