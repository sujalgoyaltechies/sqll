const Product = require('../model/ProductModel');


const createProduct = async (req, res) => {
    try {
        const [ productName, price, quantity ] = ["apple",10.0,100];
        const newProd = await Product.create({ productName, price, quantity });
        res.status(201).json(newProd);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createProduct };