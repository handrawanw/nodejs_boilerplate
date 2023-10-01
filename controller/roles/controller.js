const services = require("./controller.service_1.js");
const response = require("../../helper/response");

module.exports = {

    listRoles: async (req, res, next) => {
        try {

            const { name, description, page, limit } = req.query;

            let payload = await services.listRoles({
                name, description, page, limit
            });

            return response.ok({
                payload
            }, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    },

    createRoles: async (req, res, next) => {
        try {

            const { name, description } = req.body;

            await services.createRoles({
                payload: {
                    name, description
                }
            });

            return response.ok({}, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    },

    updateRoles: async (req, res, next) => {
        try {

            const { id_roles } = req.params;

            const { name, description } = req.body;

            console.log(id_roles);

            await services.updateRoles({
                payload: {
                    name, description
                }, id_roles
            });

            return response.ok({}, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    },

    deleteRoles: async (req, res, next) => {
        try {

            const { id_roles } = req.params;

            await services.deleteRoles({
                payload: {
                    is_deleted:1
                }, id_roles
            });

            return response.ok({}, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    },

    mappingPermission: async (req, res, next) => {
        try {

            const { id_roles } = req.params;

            let {mapper_data=[]} = req.body;

            await services.mappingPermission({
                mapper_data, id_roles
            });

            return response.ok({}, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    },

    listRolesPermission: async (req, res, next) => {
        try {

            const { id_roles } = req.params;

            let payload=await services.listRolesPermission({
                id_roles
            });

            return response.ok({payload}, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    }

};