const knex_pg=require("../../database/knex");
let query_helper=require("../../helper/query_helper");

module.exports={

    listPermission:async({name, description, page, limit})=>{
        let offset=query_helper.parsePageToOffset({page,limit})

        let select=["id","name","description","created_at","updated_at"];

        let query=knex_pg.from("permission");
        
        if(name){
            query.whereILike('permission.name',`%${name}%`);
        }

        if(description){
            query.whereILike('permission.description',`%${description}%`);
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
    }

};
