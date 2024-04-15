const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blmc', 'root', '', {
    host: process.env.HOST,
    dialect: 'mysql',
});

module.exports = sequelize;