const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const person = sequelize.define('person', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
}, {
  freezeTableName: true, 
  timestamps: false,
  tableName: 'person',
  individualHooks: true,
});

module.exports = person;