const services = require("./controller.service_1.js");
const response = require("../../helper/response");

module.exports = {

    listPermission: async (req, res, next) => {
        try {

            const { name, description, page, limit } = req.query;

            let payload = await services.listPermission({
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

    createPermission: async (req, res, next) => {
        try {

            const { name, description } = req.body;

            await services.createPermission({
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

    updatePermission: async (req, res, next) => {
        try {

            const { id_permission } = req.params;

            const { name, description } = req.body;

            await services.updatePermission({
                payload: {
                    name, description
                }, id_permission
            });

            return response.ok({}, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    },

    deletePermission: async (req, res, next) => {
        try {

            const { id_permission } = req.params;

            await services.deletePermission({
                payload: {
                    is_deleted:1
                }, id_permission
            });

            return response.ok({}, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    }

};