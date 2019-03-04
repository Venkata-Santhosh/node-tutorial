const path = require('path');

const express = require('express');

const rootDirectory = require('../util/path');


const router = express.Router();


// will be executed for every requests
router.get('/', (req, res, next) => {
	// request, response, next - actually function 
	console.log('In the another middleware');	
	// res.send('<h1>Hello from Express!</h1>');
	res.sendFile(path.join(rootDirectory,'views','shop.html'));
});

module.exports = router;
