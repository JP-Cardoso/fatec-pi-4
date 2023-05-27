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
        console.log(result);
        return h.response(result).code(201);
    } catch (error) {
        console.error(error);
    }
};

module.exports = { create }