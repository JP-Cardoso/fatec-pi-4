const ClientBusiness = require("./client-Business");

const create = async (request, h) => {

    try {
        const payload = request.payload;

        const client = {
            name: payload.name,
            cnpj: payload.cnpj,
            phone: payload.phone,
            email: payload.email
        };

        const result = toPayload(await ClientBusiness.create(client));

        return h.response(result).code(201);
    } catch (error) {
        return h.response(error.message).code(500);
    }
};

const find = async (request, h) => {
    try {

        const options = { pagins: request.query }
        const result = await ClientBusiness.findAll(options);

        return h.response(result).code(200);
    } catch (error) {

        return h.response(error.message).code(500);
    }
};

const getById = async (request, h) => {
    try {

        const id = request.params.id;
        const result = await ClientBusiness.getById(id);

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
        const result = await ClientBusiness.updated(obj);

        return h.response(result).code(200);
    } catch (error) {
        return h.response(error.message).code(500);
    }
};

const remove = async (request, h) => {
    try {
        const id = request.params.id;
        const result = await ClientBusiness.remove(id);
        return h.response(result).code(200);
    } catch (error) {
        console.error(error).code(500);
    }
};

const toPayload = (clientModel) => {

    if (Array.isArray(clientModel)) {
        const payload = [];
        clientModel.forEach(c => {
            console.log(c);
            payload.push({
                name: c.name,
                cnpj: c.cnpj,
                phone: c.phone,
                email: c.email
            });
        });
        return payload;
    } else {
        const payload = {
            name: clientModel.name,
            cnpj: clientModel.cnpj,
            phone: clientModel.phone,
            email: clientModel.email
        }
        return payload;
    }
};

module.exports = { create, find, getById, updated, remove }