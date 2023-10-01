const knex_pg=require("../../database/knex");

module.exports={

    createUsers:async({payload,roles})=>{
        await knex_pg.transaction(async(trx)=>{
            let id_users=await trx("users").insert(payload).returning("id");
            let new_roles=[];
            if(Array.isArray(roles)){
                for(let id of roles){
                    new_roles.push({
                        id_roles:id,
                        id_users:id_users[0].id
                    })
                }
            }
            if(new_roles.length>0){
                await trx("users_roles").insert(new_roles);
            }
        })
    },

    updateUsers:async({payload,id_users,roles})=>{
        await knex_pg.transaction(async(trx)=>{
            await trx("users").update(payload).where({'id':id_users});
            let new_roles=[];
            if(Array.isArray(roles)){
                for(let id of roles){
                    new_roles.push({
                        id_roles:id,
                        id_users:id_users
                    })
                }
            }
            if(new_roles.length>0){
                await trx("users_roles").where({id_users}).del();
                await trx("users_roles").insert(new_roles);
            }
        })
    },

    deleteUsers:async({id_users})=>{
        await knex_pg.transaction(async(trx)=>{
            await trx("users_roles").where({id_users}).del();
            await trx("users").where({'id':id_users}).del();
        })
    },

};
