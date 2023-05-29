const AddressBusiness = require('./address-Business');

const create = async (request, h) => {

    try {

        const payload = request.body;

        const item = {
            client_id: request.params.id,
            zipcode: payload.zipcode,
            street: payload.street,
            number: payload.number,
        };

        const result = await AddressBusiness.create(item);
        return h.response(result).code(201);
    } catch (error) {
        return h.response(error.message).code(500);
    }

};

const findAll = async (request, h) => {
    try {
        const id = request.params.id;
        const result = await AddressBusiness.findAll(id);
        return h.response(result).code(200)
    } catch (error) {
        return h.response(error.message).code(500);
    }
};

module.exports = { create }