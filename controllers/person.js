const person = require("../models/person");

exports.getperson = (req, res, next) => {
    person.findAll({
        attributes: ['firstName', 'lastName'],
        group: ["firstName", "lastName"],
    })
        .then((response) => {
            res.send(response);
        }).catch();
}