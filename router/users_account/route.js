const router=require("express").Router();

const controller=require("../../controller/users_account/controller.js");

const auth=require("../../middleware/auth.js");

const v_request=require("../../schemas/users_account/users_account.validate.js");
const validate=require("../../middleware/validate_joi.js");

router.get("/",auth.authjwt,controller.listUsers);
router.post("/create",auth.authjwt,controller.createUsers);
router.put("/update/:id_users",auth.authjwt,controller.updateUsers);
router.delete("/delete/:id_users",auth.authjwt,controller.deleteUsers);

module.exports=router;
