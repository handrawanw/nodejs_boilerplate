const Joi=require("joi");

module.exports = {
    init: Joi.object({
        data: Joi.string().required()
    }),
}