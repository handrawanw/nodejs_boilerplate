const sub_query=require("./query_1");// CREATE,UPDATE,DELETE
const sub_query_1=require("./query_2"); // GET

module.exports={

    createUsers:sub_query.createUsers,
    updateUsers:sub_query.updateUsers,
    deleteUsers:sub_query.deleteUsers,
    listUsers:sub_query_1.listUsers

};