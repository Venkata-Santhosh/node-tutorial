const path = require('path');

const express = require('express');

const rootDirectory = require('../util/path');

const router = express.Router();


router.get('/add-product', (req, res, next) => {
	// res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"> <button type="submit">Add Product</button></form>');
	res.sendFile(path.join(rootDirectory, 'views','add-product.html'))
});

router.post('/add-product', (req,res, next) => {
	res.redirect('/');
});

module.exports = router;