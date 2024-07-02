const knex=require("../database/knex");

module.exports={

    init:async()=>{
        let query=knex.select("*").from("user");

        return query;
    }

};