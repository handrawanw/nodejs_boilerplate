const router=require("express").Router();

router.use("/users",require("./users/route"));
router.use("/users_account",require("./users_account/route"));
router.use("/roles",require("./roles/route"));
router.use("/permission",require("./permissions/route"));

module.exports=router;