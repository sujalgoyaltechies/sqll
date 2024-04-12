const express = require('express');
const router = express.Router();
const productController = require('../controller/ProductController');

router.post('/api/products', productController.createProduct);
router.get("/api/getProduct", productController.getProduct);
router.get("/api/getProduct/:id", productController.getOneProd);
router.get("/", productController.Home)
router.all('*', productController.ErrorP)
module.exports = router;