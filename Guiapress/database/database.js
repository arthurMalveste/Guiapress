const Sequelize = require('sequelize');
const connection = new Sequelize('guiapress',
    'root',
    's3s!barretos@123', {
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = connection 