const { Model, Datatypes, Sequelize } = require('sequelize');

class Coffee extends Model {
    static init(sequelize) {
        super.init({
            type: Sequelize.STRING,
            bags: Sequelize.STRING,
            weight: Sequelize.STRING,
        }, {
            sequelize,
            tableName: 'coffee'

        })
    }


};

module.exports = Coffee;