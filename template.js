const CONTROLLER = `const [MODEL_NAME]_model=require("../model/[MODEL_NAME].model.js");
const response = require("../helper/response");

module.exports={

   init:async(req,res,next)=>{
        try {
            let data=await [MODEL_NAME]_model.init();

            return response.ok(data,res)
        }catch(error){
            console.log(error);
            return response.error({},res,error.message);
        }
   }

};`;

const MODEL=`const knex=require("../database/knex");

module.exports={

    init:async()=>{
        let query=knex.select("*").from("[MODEL_NAME]");

        return query;
    }

};`;

const ROUTER=`const router=require("express").Router();

const controller = require("../controller/[MODEL_NAME].controller.js");

const auth=require("../middleware/auth.js");

const schemas=require("../schemas/[MODEL_NAME].validate.js");
const validate=require("../middleware/validate_joi.js");

router.post("/init",auth.authjwt,validate.body(schemas.init),controller.init);

module.exports=router;
`

const SCHEMA = `const Joi=require("joi");

module.exports = {
    init: Joi.object({
        data: Joi.string().required()
    }),
}`;

const VIEWS = `
<%- include('../layout/header.ejs') %>
    <%- include('../layout/sidebar.ejs') %>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script>
        $(document).ready(function() {
            var table = $('#myTable').DataTable({
                processing: true,
                serverSide: true,
                ajax: "/agent/table-list",
                type: 'GET',
                columns: [
                    {
                        data: 'id',
                        visible: false
                    },
                    { data: 'agent_id' },
                    { data: 'name' },
                    { data: 'username' },
                    { data: 'email' },
                    { 
                        data: 'created_at',
                        render: function (data, type, row) {
                            return "<span class='badge badge-success'>ok</span>";
                        }
                    },
                    {
                        data: 'id',
                        render: function (data, type, row) {
                            return '<button type="button" class="btn btn-warning btn-sm btnUbah" id="' + data + '"> Ubah</button>'
                                + '&nbsp;<button type="button" class="btn btn-danger btn-sm btnHapus" id="' + data + '"> Hapus</button>';
                        }
                    }
                ]
            });

        });

    </script>
<%- include('../layout/footer.ejs') %>
`;

const SWAGGER_DOCS = `
// [SWAGGER_DOCS].js

/**
 * @swagger
 * swagger: "2.0"
 * info:
 *   title: Account API
 *   description: Account API for managing Account
 *   version: "1.0.0"
 *
 * securityDefinitions:
 *   BearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * 
 * tags:
 *   - name: Account
 *     description: The Account managing API
 *
 * paths:
 *   /account/login:
 *     post:
 *       summary: Login
 *       tags: [Account]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: "aliansi"
 *                 password:
 *                   type: string
 *                   example: "123456"
 *       responses:
 *         200:
 *           description: Login Account response
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/LoginAccountResponse'
 *         400:
 *           description: Bad request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: boolean
 *                     example: false
 *                   message:
 *                     type: string
 *                     example: "You must fill all the fields"
 *         401:
 *           description: Unauthorized
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "Agent Unauthorized | Password doesn't match"
 *         404:
 *           description: Not found Account
 *           content:
 *             application/json:
 *               schema:
 *                type: object
 *                properties:
 *                 status:
 *                  type: boolean
 *                  example: false
 *                 message:
 *                  type: string
 *                  example: "Account tidak terdaftar"
 *         500:
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                type: object
 *                properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Ops... Internal server error, please contact support" 
 *
 * definitions:
 *   LoginAccountResponse:
 *     type: object
 *     properties:
 *       status:
 *         type: boolean
 *         example: true
 *       access_token:
 *         type: string
 *         example: "eyJhbsciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5IiwidXNlcm5hbWUiOiJhbGlhbmRvbmgybyIsImFnZW50X2lkIjoiZHNlLWJvcyIsImlhdCI6MTcxOTc1asYwN30.aL8yRch4rbrDH7xEHkSzW3GFV8DGtEMYxrzjw1HCGoc"
 *       token_type:
 *         type: string
 *         example: "bearer"
 */
`;

module.exports = {
    CONTROLLER,
    MODEL,
    ROUTER,
    SCHEMA,
    VIEWS,
    SWAGGER_DOCS
}