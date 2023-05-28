const CoffeeBusiness = require('./coffee-Business')

const create = async (request, h) => {
    try {
        const payload = request.payload;
        const item = {
            type: payload.type,
            bags: payload.bags,
            weight: payload.weight,
        };

        const result = await CoffeeBusiness.create(item);

        return h.response(result).code(201);
    } catch (error) {
        return h.response(error.message).code(500);
    }
};

const findAll = async (request, h) => {
    try {

        const result = await CoffeeBusiness.findAll();

        return h.response(result).code(200);
    } catch (error) {
        return h.response(error.message).code(500);
    }
};

const getById = async (request, h) => {
    try {

        const id = request.params.id;
        const result = await CoffeeBusiness.getById(id);

        return h.response(result).code(200);
    } catch (error) {

        return h.response(error.message).code(500);
    };
};

const updated = async (request, h) => {
    try {
        const id = request.params.id
        const client = request.payload;
        const obj = { id, ...client };

        const result = await CoffeeBusiness.updated(obj);

        return h.response(result).code(200);
    } catch (error) {

        return h.response(error.message).code(500);
    }
};

const remove = async (request, h) => {
    try {

        const id = request.params.id;
        const result = await CoffeeBusiness.remove(id);

        return h.response(result).code(200);
    } catch (error) {

        return h.response(error.message).code(500);
    }
};

module.exports = { create, findAll, getById, updated, remove }