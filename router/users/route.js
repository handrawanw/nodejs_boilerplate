const router=require("express").Router();

const controller=require("../../controller/users/controller.js");

const v_request=require("../../schemas/users/users.validate.js");
const validate=require("../../middleware/validate_joi.js");

router.post("/login",controller.login);

module.exports=router;
