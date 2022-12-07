const path = require('path');
const express = require('express');
const activeController = require('../controllers/active');
const personController = require('../controllers/person');
const surveyController = require('../controllers/survey');
const fourthController = require('../controllers/fourth');
const countController = require('../controllers/count');
const router = express.Router();


router.get('/active', activeController.getactive);
router.get('/inactive', activeController.getinactive);
router.get('/person', personController.getperson);
router.get('/question', surveyController.getquestion);
router.post('/fourth', fourthController.POSTfourth);
router.get('/count', countController.getSummary);
module.exports = router;