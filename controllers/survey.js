
const offeredanswers = require("../models/offeredanswers");
const question = require("../models/questions");
const sqa = require("../models/sqa");
const Sequelize = require("../util/database")


exports.getquestion = (req, res, next) => {
  sqa.findAll({
    attributes: ["sqa.questionId", "sqa.offeredanswersId"],
    include: [
      {
        model: question,
        attributes: ['questiontext'],
        required: true,
      },
      {
        model: offeredanswers,
        attributes: ["answertext"],
        required: true,
      },
    ],
  })
    .then((response) => {
      var output = [];
      let array = response;
      array.forEach(function (item) {
        var existing = output.filter(function (v, i) {
          return v.question.questiontext == item.question.questiontext;
        });
        if (existing.length) {
          var existingIndex = output.indexOf(existing[0]);
          output[existingIndex].offeredanswer.answertext = output[existingIndex].offeredanswer.answertext.concat(item.offeredanswer.answertext);
        } else {
          if (typeof item.offeredanswer.answertext == 'string')
            item.offeredanswer.answertext = [item.offeredanswer.answertext];
          output.push(item);
        }
      });
      res.send(output);
    }).catch()
}








