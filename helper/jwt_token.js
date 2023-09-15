const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_JWT||"RahasiaDong!=112";

class jwttoken {

    static generateToken(payload, seconds) {
      /*
        The payload can contain objects, strings of other data types, but object is recommended
        {
            user:ObjectID("6235125"),
            isVerified:true,
            permission:['Admin']
        }
      */
      let expiresIn = '1d';

      if (seconds) {
        expiresIn = seconds;
      }

      return jwt.sign(payload, secret);
      // return jwt.sign(payload, secret, {expiresIn: expiresIn});
    }
    
    static verifytoken(token, callback) {
      return jwt.verify(token, secret, (err, decoded)=>{
        if (err) {
          callback(err, null);
        } else {
          // console.log(decoded);
          callback(null, decoded);
        }
      });
    }

}


module.exports = jwttoken;