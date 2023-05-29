const AddressRepository = require("./address-Repository");

const create = async (item) => {
    return await AddressRepository.create(item);
};

const findAll = async (id) => {
    return await AddressRepository.findAll(id);
};

module.exports = { create, findAll }