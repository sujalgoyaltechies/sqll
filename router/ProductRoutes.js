const express = require('express');
const router = express.Router();
const productController = require('../controller/ProductController');

router.post('/api/products', productController.createProduct);
module.exports = router;