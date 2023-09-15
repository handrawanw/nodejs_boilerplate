const { verifytoken } = require("../helper/jwt_token");

// response
const response = require("../helper/response");
// response


module.exports = {

    authjwt:(req,res,next)=>{
        // const token = req.headers.authorization?.split(' ')[1];
        const authorization = req.headers.authorization || "";
        let token = authorization.replace("Basic ", "");
        token = token.replace("Bearer ", "");
        verifytoken(token, async(err, payload) => {
            // await m_log_trace.createLogTrace({
            //     name:"log token",
            //     description:`${token} ? ${err}`
            // });
            // console.log(payload);
            if (err) {
                return response.unauthorized({
                    isTokenExpired: true
                }, res, "Your token is expired");
            } else {
                req.decoded = payload;
                // console.log(payload.id," ID USER");
                next();
            }
        });
    },

};
