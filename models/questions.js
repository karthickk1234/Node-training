
const Sequelize = require('sequelize');

const offeredanswers = require('./offeredanswers');
const sequelize = require('../util/database');

const question = sequelize.define('question', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  questiontext: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'question',
  individualHooks: true,
});
question.hasMany(offeredanswers)
module.exports = question;