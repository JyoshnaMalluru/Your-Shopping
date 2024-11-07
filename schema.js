const Joi = require('joi');

module.exports.dresscardSchema = Joi.object({
    dresscard : Joi.object({
        title : Joi.string().required(),
        category:Joi.string().required(),
        image:Joi.string().required(),
        price:Joi.number().required().min(0),
        image:{
            url:Joi.string().allow("", null),
            filename:"default_name"
        },
        like:Joi.boolean()

    }).required()
});