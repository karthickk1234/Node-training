
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const app = express();
const adminRoutes = require('./routes/admin');

const {json } = require('body-parser');
const { response } = require('express');

app.use(bodyParser.json())
app.use('/admin', adminRoutes);

sequelize.sync()
  .then();
  app.listen(6000);
   
  
  