const Sequelize = require('sequelize');

const sequelize = new Sequelize('today','postgres','16081405',{
  dialect: 'postgres',
  host: 'localhost',
});

module.exports = sequelize;
