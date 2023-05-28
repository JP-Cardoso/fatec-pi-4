const CoffeeRepository = require('./coffee-Repository');

const create = async (item) => {
    return CoffeeRepository.create(item);
};

const findAll = async () => {
    return CoffeeRepository.findAll();
};

const getById = async (id) => {
    return CoffeeRepository.getById(id);
};

const updated = async (item) => {
    return CoffeeRepository.updated(item);
};

const remove = async (id) => {
    return CoffeeRepository.remove(id);
};

module.exports = { create, findAll, getById, updated, remove };