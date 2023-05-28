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

const findAll = {
    query: Joi.object({
        offset: Joi
            .number().integer().min(0)
            .default(0),
        limit: Joi
            .number().integer().min(1).max(5).default(5),
    })
}

const getById = {
    params: Joi.object({
        id: Joi
            .number().integer().required()
    })
};

const updated = {
    query: Joi.object({
        id: Joi
            .number().integer().required()
    }),
}

module.exports = { postClient, getById, updated, findAll };