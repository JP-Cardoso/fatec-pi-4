const CoffeeRepository = require('./coffee-Repository');

const create = async (item) => {
    return CoffeeRepository.create(item);
};

module.exports = { create }