const router=require("express").Router();

const controller=require("../../controller/roles/controller.js");

const auth=require("../../middleware/auth.js");

const v_request=require("../../schemas/roles/roles.validate.js");
const validate=require("../../middleware/validate_joi.js");

router.get("/",auth.authjwt,controller.listRoles);
// router.get("/permission/:id_roles",auth.authjwt,auth.authrole("users_management_create"),controller.listRolesPermission);
router.get("/permission/:id_roles",auth.authjwt,controller.listRolesPermission);
router.post("/create",auth.authjwt,controller.createRoles);
router.post("/permission/:id_roles",auth.authjwt,controller.mappingPermission);
router.put("/update/:id_roles",auth.authjwt,controller.updateRoles);
router.delete("/delete/:id_roles",auth.authjwt,controller.deleteRoles);

module.exports=router;
