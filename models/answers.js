const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Surveys = require('./survey');
const questions = require('./questions');
const offeredanswers = require('./offeredanswers');
const person = require('./person');
const answers = sequelize.define('answers', {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  comments: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
}, {
  freezeTableName: true, 
  timestamps: false,
  tableName: 'answers',
  individualHooks: true,
});
answers.belongsTo(person, {
  foreignKey: 'personId',
});
answers.belongsTo(Surveys, {
  foreignKey: 'surveyId',
});
answers.belongsTo(questions, {
  foreignKey: 'questionId',
});
answers.belongsTo(offeredanswers, {
  foreignKey: 'offeredanswersId',
});

module.exports = answers;