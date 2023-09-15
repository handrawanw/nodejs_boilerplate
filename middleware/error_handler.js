const response = require("../helper/response");

module.exports=(err,req,res,next)=>{
    let message=err.message||"Internal server error";

    if(message.includes("File : ")){// multer upload
        return response.bad(err,res,message);
    }
    
    return response.error(null,res,message);
};