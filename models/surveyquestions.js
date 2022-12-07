const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Surveys = require('./survey');
const questions = require('./questions');
const surveyQuestions = sequelize.define('surveyquestions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },

}, {
  freezeTableName: true, 
  timestamps: false,
  tableName: 'surveyQuestions',
  individualHooks: true,
});


surveyQuestions.belongsTo(Surveys, {
  foreignKey: 'surveyId',
});
surveyQuestions.belongsTo(questions, {
  foreignKey: 'questionId',
});
module.exports = surveyQuestions;