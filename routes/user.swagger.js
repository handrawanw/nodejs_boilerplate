
// user.js

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
