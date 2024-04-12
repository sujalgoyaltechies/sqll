const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('products', 'root', '', {
    host: process.env.HOST,
    dialect: 'mysql',
});

module.exports = sequelize;