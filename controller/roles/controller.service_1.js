const query=require("../../model/roles/roles.model.js");

let roles={};

roles.listRoles=async({username,email,page,limit})=>{
    try {
        
        return query.listRoles({username,email,page,limit});
        
    } catch (error) {
        throw error;
    }
};

roles.createRoles=async({payload})=>{
    try {
        
        return query.createRoles({payload});
        
    } catch (error) {
        throw error;
    }
};

roles.updateRoles=async({payload,id_roles})=>{
    try {
        
        return query.updateRoles({payload,id_roles});
        
    } catch (error) {
        throw error;
    }
};

roles.deleteRoles=async({id_roles})=>{
    try {
        
        return query.deleteRoles({id_roles});
        
    } catch (error) {
        throw error;
    }
};

roles.mappingPermission=async({mapper_data,id_roles})=>{
    try {

        let new_mapperdata=[];

        for(let id_permission of mapper_data){
            new_mapperdata.push({
                id_roles,
                id_permission:id_permission
            })
        }
        
        return query.mappingPermission({mapper_data:new_mapperdata,id_roles});
        
    } catch (error) {
        throw error;
    }
};

roles.listRolesPermission=async({id_roles})=>{
    try {

        return query.listRolesPermission({id_roles});
        
    } catch (error) {
        throw error;
    }
};

module.exports=roles;