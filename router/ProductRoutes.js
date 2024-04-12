const express = require('express');
const router = express.Router();
const productController = require('../controller/ProductController');

router.post('/products', productController.createProduct);
router.get("/getProduct", productController.getProduct);
router.get("/getProduct/:id", productController.getOneProd);
module.exports = router;