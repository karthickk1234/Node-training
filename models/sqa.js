const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Surveys = require('./survey');
const questions = require('./questions');
const offeredanswers = require('./offeredanswers');
const sqa = sequelize.define('sqa', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },

}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'sqa',
  individualHooks: true,
});
sqa.belongsTo(Surveys, {
  foreignKey: 'surveyId',
});
sqa.belongsTo(questions, {
  foreignKey: 'questionId',
});
sqa.belongsTo(offeredanswers, {
  foreignKey: 'offeredanswersId',
});
module.exports = sqa;