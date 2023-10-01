const knex_pg=require("../../database/knex");

module.exports={

    createRoles:async({payload})=>{
        await knex_pg("roles").insert(payload);
    },

    updateRoles:async({payload,id_roles})=>{
        await knex_pg.transaction(async(trx)=>{
            await trx("roles").update(payload).where({'id':id_roles});
            await trx("roles").update({updated_at:knex_pg.fn.now()}).where({'id':id_roles});
        })
    },

    deleteRoles:async({id_roles})=>{
        await knex_pg.transaction(async(trx)=>{
            await trx("roles_permission").where({id_roles}).del();
            await trx("users_roles").where({'id_roles':id_roles}).del();
            await trx("roles").where({'id':id_roles}).del();
        })
    },

    mappingPermission:async({mapper_data,id_roles})=>{
        await knex_pg.transaction(async(trx)=>{
            await trx("roles_permission").where({id_roles}).del();
            await trx("roles_permission").insert(mapper_data);
        });
    }

};
