const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySQL_DB');

const Product = sequelize.define('Product', {
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Product;