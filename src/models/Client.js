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
    };

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
    };

};

module.exports = Client;