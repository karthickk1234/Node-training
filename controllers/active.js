
const { Sequelize, Op } = require("sequelize");
const Survey = require("../models/survey");

//active
exports.getactive = (req, res, next) => {
    let date = new Date();
    Survey.findAll({
        where: {
            [Op.and]: {
                endDate: {
                    [Op.gt]: date
                },
                startDate: {
                    [Op.lt]: date
                }
            }
        }
    })
        .then((response) => {
            console.log(response);
            res.send(response);
        }).catch();
}

//inactive
exports.getinactive = (req, res, next) => {
    let date = new Date();
    Survey.findAll({
        where: {
            [Op.or]: {
                endDate: {
                    [Op.lt]: date
                },
                startDate: {
                    [Op.gt]: date
                }
            }
        }
    })
        .then((response) => {
            res.send(response);
        }).catch();
}


