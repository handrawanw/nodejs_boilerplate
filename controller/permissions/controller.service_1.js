const query=require("../../model/permissions/permissions.model.js");

let permission={};

permission.listPermission=async({name,description,page,limit})=>{
    try {
        
        return query.listPermission({name,description,page,limit});
        
    } catch (error) {
        throw error;
    }
};

permission.createPermission=async({payload})=>{
    try {
        
        return query.createPermission({payload});
        
    } catch (error) {
        throw error;
    }
};

permission.updatePermission=async({payload,id_permission})=>{
    try {
        
        return query.updatePermission({payload,id_permission});
        
    } catch (error) {
        throw error;
    }
};

permission.deletePermission=async({id_permission})=>{
    try {
        
        return query.deletePermission({id_permission});
        
    } catch (error) {
        throw error;
    }
};

module.exports=permission;