const Sequelize = require('sequelize');

const sequelize = new Sequelize('brit_designs', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;