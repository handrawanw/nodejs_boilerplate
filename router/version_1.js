const router=require("express").Router();

router.use("/users",require("./users/route"));
router.use("/init",require("./report_event/route"));

module.exports=router;