const ClientModel = require('../../models/Client');

const save = async (client) => {
    const result = ClientModel.create(client);
    return result;
};

const findAll = async (options) => {
    const { offset, limit } = options.pagins;
    const result = ClientModel.findAll({
        raw: true,
        limit,
        offset,
    });//offset: 5 passa o proximo valor
    return result;
};

const getById = async (id) => {
    const result = await ClientModel.findByPk(id, { raw: true })
    return result;
};

const updated = async (item) => {
    console.log('repo', item);
    const { id, name, cnpj, phone, email } = { ...item }

    const result = await ClientModel.update(
        { name, cnpj, phone, email }, {
        where: {
            id
        }
    }, { raw: true });
    console.log('Resultado', result);
    return result
};

const remove = async (id) => {
    console.log('id, repo', id);
    const result = await ClientModel.destroy({
        where: {
            id
        }
    }, { raw: true });
    console.log('Destroy', result);
};

module.exports = { save, findAll, getById, updated, remove }