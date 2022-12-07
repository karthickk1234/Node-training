const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Survey = sequelize.define('survey', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
}, {
  freezeTableName: true, 
  timestamps: false,
  tableName: 'survey',
  individualHooks: true,
});



module.exports = Survey;

