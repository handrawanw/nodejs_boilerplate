const router=require("express").Router();

const controller=require("../../controller/permissions/controller.js");

const auth=require("../../middleware/auth.js");

const v_request=require("../../schemas/permissions/permissions.validate.js");
const validate=require("../../middleware/validate_joi.js");

router.get("/",auth.authjwt,controller.listPermission);
router.post("/create",auth.authjwt,controller.createPermission);
router.put("/update/:id_permission",auth.authjwt,controller.updatePermission);
router.delete("/delete/:id_permission",auth.authjwt,controller.deletePermission);

module.exports=router;
