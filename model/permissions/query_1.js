const knex_pg=require("../../database/knex");

module.exports={

    createPermission:async({payload})=>{
        await knex_pg("permission").insert(payload);
    },

    updatePermission:async({payload,id_permission})=>{
        await knex_pg.transaction(async(trx)=>{
            await trx("permission").update(payload).where({'id':id_permission});
            await trx("permission").update({updated_at:knex_pg.fn.now()}).where({'id':id_permission});
        })
    },

    deletePermission:async({id_permission})=>{
        await knex_pg.transaction(async(trx)=>{
            await trx("roles_permission").where({id_permission}).del();
            await trx("permission").where({'id':id_permission}).del();
        })
    }

};
