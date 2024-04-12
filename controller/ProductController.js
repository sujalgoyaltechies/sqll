const Product = require('../model/ProductModel');


const createProduct = async (req, res) => {
    try {
        const { productName, price, quantity } = req.body;
        const newProd = await Product.create({ productName, price, quantity });
        res.status(201).json(newProd);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const ViewProd = await Product.findAll();
        res.status(201).json(ViewProd);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getOneProd = async (req, res) => {
    try {
        const ViewOne = await Product.findByPk(req.params.id);
        res.status(201).json(ViewOne);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = { createProduct, getProduct, getOneProd };