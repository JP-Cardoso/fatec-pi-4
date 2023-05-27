const ClientRepository = require('./client-Repository');

const create = async (client) => {

    return ClientRepository.save(client);
};

const findAll = async () => {
    return ClientRepository.findAll();
};

const getById = async (id) => {
    return ClientRepository.getById(id);
};

const updated = async (item) => {
  
    return ClientRepository.updated(item)
};

const remove = async(id) => {
    return ClientRepository.remove(id)
};

module.exports = { create, findAll, getById, updated, remove }