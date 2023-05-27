const { Model, Datatypes, Sequelize } = require('sequelize');

class Client extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            phone: Sequelize.STRING,
            cnpj: Sequelize.STRING,
        }, {
            sequelize,
            tableName: 'client'
           
        })
    }


};

module.exports = Client;