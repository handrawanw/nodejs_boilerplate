const sub_query=require("./query_1");// CREATE,UPDATE,DELETE
const sub_query_1=require("./query_2"); // GET

module.exports={

    createPermission:sub_query.createPermission,
    updatePermission:sub_query.updatePermission,
    deletePermission:sub_query.deletePermission,
    listPermission:sub_query_1.listPermission

};