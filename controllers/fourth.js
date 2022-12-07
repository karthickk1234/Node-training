// const offeredanswers = require("../models/offeredanswers");
// const question = require("../models/questions");
const ap = require("../models/answers");
// const person = require("../models/person");
const { response } = require("express");


exports.POSTfourth = (req, res, next) => {
  const id = req.body.id;
  const comments = req.body.comments;
  const personId = req.body.personId;
  const surveyId = req.body.surveyId;
  const questionId = req.body.questionId;
  const offeredanswersId = req.body.offeredanswersId;
  ap.create({
    id: id,
    comments: comments,
    personId: personId,
    surveyId: surveyId,
    questionId: questionId,
    offeredanswersId :offeredanswersId,
  })
    .then(result => {
      console.log(result);
      res.send('created');
    }).catch(err => {
      console.log(err);
    });
}


