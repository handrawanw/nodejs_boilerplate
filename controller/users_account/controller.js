const services = require("./controller.service_1.js");
const response = require("../../helper/response");
const hashing=require("../../helper/hashing");
const function_helper=require("../../helper/function.js");

module.exports = {

    listUsers: async (req, res, next) => {
        try {

            const { username, email,page,limit } = req.query;

            let payload = await services.listUsers({
                username,email,page,limit
            });

            return response.ok({
                payload
            }, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    },

    createUsers: async (req, res, next) => {
        try {

            let { username, email, verified, birthday, gender, roles } = req.body;
            // https://evmon.konekthing.com/api/v1/upload/pictures/none.png default avatar
            let password_digit=function_helper.getRandomFloat(100000,999999);

            await services.createUsers({
                payload: {
                    username, email, verified, birthday, gender,
                    password:hashing.hashPass(String(parseInt(password_digit)))
                },
                roles
            });

            return response.ok({
                email,
                your_password:String(parseInt(password_digit))
            }, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    },

    updateUsers: async (req, res, next) => {
        try {

            const { id_users } = req.params;

            let { username, email, verified, birthday, gender, roles=[] } = req.body;

            await services.updateUsers({
                payload: {
                    username, email, verified, birthday, gender
                }, id_users, roles
            });

            return response.ok({}, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    },

    deleteUsers: async (req, res, next) => {
        try {

            const { id_users } = req.params;

            await services.deleteUsers({
                id_users
            });

            return response.ok({}, res);

        } catch (error) {
            console.log(error);
            return response.error({}, res, error.message);
        }
    }

};