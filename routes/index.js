const Router=require("express").Router();
const response=require("../helper/response");

Router.use("/v1",require("./version_1"))

Router.get("/version",(req,res)=>{
     response.ok({
        s:'v1',
        version:'1.0.0'
     },res);
});

module.exports=Router;