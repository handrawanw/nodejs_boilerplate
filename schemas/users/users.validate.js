const Joi=require("joi");

module.exports = {
    init: Joi.object({
        init: Joi.string().required()
    }),
}