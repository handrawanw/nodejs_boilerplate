const query=require("../../model/users/users.model");
const hashing=require("../../helper/hashing");
const jwttoken=require("../../helper/jwt_token");

let users={};

users.login=async({email,password})=>{
    try {

        let data=await query.login({
            email
        });

        if(data){
            let valid_password = hashing.checkPass(password, data.password);

            if(valid_password){
                let token = await jwttoken.generateToken({
                    id: data.id,
                    username: data.username
                });
                return {valid_password,data,token};
            }
            
        }

        return null;

    } catch (error) {
        return response.error({},res,error.message);
    }

}

module.exports=users;