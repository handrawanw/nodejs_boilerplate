const knex_pg=require("../../database/knex");


module.exports={

    login:async({email})=>{
        let query=knex_pg.select(["*"]).from("users");

        query.where({email});

        return query.first();
    }    

};