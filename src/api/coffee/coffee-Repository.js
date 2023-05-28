const CoffeModel = require('../../models/Coffee');

const create = async (item) => {
    const result = await CoffeModel.create(item, { raw: true });
    return result;
};

const findAll = async () => {
    const result = await CoffeModel.findAll({ raw: true });
    return result;
};

const getById = async (id) => {
    const result = await CoffeModel.findByPk(id, { raw: true });
    return result;
};

const updated = async (item) => {
    console.log('repo', item);
    const { id, type, bags, weight, } = { ...item }

    const result = await CoffeModel.update(
        { type, bags, weight }, {
        where: {
            id
        }
    }, { raw: true });
    console.log('Resultado', result);
    return result
};

const remove = async (id) => {
    console.log('id, repo', id);
    const result = await CoffeModel.destroy({
        where: {
            id
        }
    }, { raw: true });
    console.log('Destroy', result);
};

module.exports = { create, findAll, getById, updated, remove };