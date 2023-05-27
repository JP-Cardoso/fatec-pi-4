const Joi = require("joi");

const postCoffee = {
    payload: Joi.object({
        type: Joi
            .string().min(1).max(300).required(),
        bags: Joi
            .string().required(),
        weight: Joi
            .string().required(),
    })
};

module.exports = {postCoffee};