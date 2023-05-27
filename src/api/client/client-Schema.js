const Joi = require('joi');

const postClient = {
    payload: Joi.object({
        name: Joi
            .string().min(3).max(200).required(),
        cnpj: Joi
            .string().max(18).required(),
        phone: Joi
            .string().max(11).required(),
        email: Joi
            .string().email().required(),
    })
};

const getClient = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
    })
}
module.exports = { postClient, getClient };