const CoffeModel = require('../../models/Coffee');

const create = async (item) => {
    const result = await CoffeModel.create(item, {raw: true});
    return result;
};

module.exports = {create};