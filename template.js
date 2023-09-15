const CONTROLLER = `const services=require("./controller.service_1.js");
const response=require("../../helper/response");

module.exports={

   init:(req,res,next)=>{
        try {
            let payload=services.init();

            return response.ok({
                payload
            },res);
        }catch(error){
            console.log(error);
            return response.error({},res,error.message);
        }
   }

};`;

const CONTROLLER_SERVICE = `const query=require("../../model/[MODEL_NAME]/[MODEL_NAME].model.js");

let [MODEL_NAME]={};

[MODEL_NAME].init=()=>{
    return {message:"OK"};
};

module.exports=[MODEL_NAME];`;

const MODEL=`const sub_query=require("./query_1");

module.exports={

    init:sub_query.init

};`;

const MODEL_SERVICE=`const knex_pg=require("../../database/knex");

module.exports={

    
};
`;

const ROUTER=`const router=require("express").Router();

const controller=require("../../controller/[MODEL_NAME]/controller.js");

const v_request=require("../../schemas/[MODEL_NAME]/[MODEL_NAME].validate.js");
const validate=require("../../middleware/validate_joi.js");

router.post("/init",validate.body(v_request.init),controller.init);

module.exports=router;
`

const SCHEMA = `const Joi=require("joi");

module.exports = {
    init: Joi.object({
        data: Joi.string().required()
    }),
}`;

module.exports = {
    CONTROLLER,
    CONTROLLER_SERVICE,
    MODEL,
    MODEL_SERVICE,
    ROUTER,
    SCHEMA
}