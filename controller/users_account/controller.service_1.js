const query=require("../../model/users_account/users_account.model.js");

let users_account={};

users_account.listUsers=async({username,email,page,limit})=>{
    try {
        
        return query.listUsers({username,email,page,limit});
        
    } catch (error) {
        throw error;
    }
};

users_account.createUsers=async({payload,roles})=>{
    try {

        if(!Array.isArray(roles)){
            roles=[roles];
        }

        return query.createUsers({payload,roles});
        
    } catch (error) {
        throw error;
    }
};

users_account.updateUsers=async({payload,id_users,roles})=>{
    try {

        if(!Array.isArray(roles)){
            roles=[roles];
        }
        
        return query.updateUsers({payload,id_users,roles});
        
    } catch (error) {
        throw error;
    }
};

users_account.deleteUsers=async({id_users})=>{
    try {
        
        return query.deleteUsers({id_users});
        
    } catch (error) {
        throw error;
    }
};

module.exports=users_account;