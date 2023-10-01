const knex_pg=require("../../database/knex");
let query_helper=require("../../helper/query_helper");

module.exports={

    listRoles:async({name, description, page, limit})=>{
        let offset=query_helper.parsePageToOffset({page,limit})

        let select=["id","name","description","created_at","updated_at"];

        let query=knex_pg.from("roles");
        
        if(name){
            query.whereILike('roles.name',`%${name}%`);
        }

        if(description){
            query.whereILike('roles.description',`%${description}%`);
        }

        let count = 0;

        if (limit) {
            let queryCountData = query.count("* as count");
            // console.log(queryCountData.toQuery());
            count = (await queryCountData)[0].count;
            query.limit(limit);
        }

        if (offset) {
            query.offset(offset);
        }

        query.clearSelect().select(select);

        let datas = await query;

        let result = {
            per_page: limit ? parseInt(limit) : "all",
            last_page: limit ? Math.ceil(count / limit) : 1,
            total_data: parseInt(count),
            current_page: parseInt(page),
            data: datas
        };

        return result;
    },

    listRolesPermission:async({id_roles})=>{
        let query=knex_pg.select([
            "roles.id","roles.name","roles.created_at","roles.updated_at",
            knex_pg.raw("coalesce(json_agg(json_build_object('id',permission.id,'name',permission.name)) filter(where permission.id is not null),'[]') as permission")
        ]).from("roles");

        query.leftJoin("roles_permission as rp","rp.id_roles","roles.id");
        query.leftJoin("permission","permission.id","rp.id_permission");

        if(id_roles){
            query.where({'roles.id':id_roles});
        }

        query.groupBy("roles.id");

        return query;
    }

};
