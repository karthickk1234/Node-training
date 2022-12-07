
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const offeredanswers = sequelize.define('offeredanswers', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  answertext : {
  type: Sequelize.STRING(50),
    allowNull: false,
  },
}, {
  freezeTableName: true, 
  timestamps: false,
  tableName: 'offeredanswers',
  individualHooks: true,
});

module.exports = offeredanswers;