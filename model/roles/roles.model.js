const sub_query=require("./query_1");// CREATE,UPDATE,DELETE
const sub_query_1=require("./query_2"); // GET

module.exports={

    createRoles:sub_query.createRoles,
    updateRoles:sub_query.updateRoles,
    deleteRoles:sub_query.deleteRoles,
    listRoles:sub_query_1.listRoles,
    mappingPermission:sub_query.mappingPermission,
    listRolesPermission:sub_query_1.listRolesPermission

};