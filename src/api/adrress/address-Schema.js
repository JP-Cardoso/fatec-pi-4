const Joi = require('joi');

const postAddress = {
    payload: Joi.object({
        zipcode: Joi
            .string().required().min(8).max(9).trim(),
        street: Joi
            .string().min(3).max(100).required(),
        number: Joi 
            .string().min(1).max(5).required(),
    })
};




module.exports = {postAddress}