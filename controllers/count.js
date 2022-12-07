const offeredanswers = require("../models/offeredanswers");
const question = require("../models/questions");
const answers = require("../models/answers");
const survey = require("../models/survey");
const Sequelize = require("../util/database")



exports.getSummary = (req, res, next) => {
  answers.findAll({
    attributes: ['answers.surveyId', 'answers.questionId', 'answers.offeredanswersId'],
    include: [
      {
        model: survey,
        attributes: ['description'],
        required: true,
      },
      {
        model: question,
        attributes: ['questiontext'],
        required: true,
      },
      {
        model: offeredanswers,
        attributes: ['answertext'],
        required: true,
      }
    ],
    group: ['surveyId', 'questionId', 'offeredanswersId', 'survey.id', 'question.id', 'offeredanswer.id'],
    attributes: [[Sequelize.fn('COUNT', 'offeredanswers'), 'count']],
  })
    .then((response) => {
      // var output = [];
      // let array = response;
      // array.forEach(function (item) {
      //   var existing = output.filter(function (v, i) {
      //     return v.question.questiontext == item.question.questiontext;
      //   });
      //   if (existing.length) {
      //     var existingIndex = output.indexOf(existing[0]);
      //     output[existingIndex].offeredanswer.answertext = output[existingIndex].offeredanswer.answertext.concat(item.offeredanswer.answertext);
      //   } 
      //   else {
      //     if (typeof item.offeredanswer.answertext == 'string')
      //       item.offeredanswer.answertext = [item.offeredanswer.answertext];
      //        //[[Sequelize.fn('COUNT', 'answertext'), 'count']],
      //     output.push(item);
      //   }
      // });
      res.send(response);
    }).catch();
  }
