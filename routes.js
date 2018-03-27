'use strict';

// Config
const appConfig = require('./config/App');
// Utils
const response = require('./utils/ResponseUtil');
// Controllers
const controllers = require('./controllers/index');

/**
 * Objeto donde se listan las rutas disponibles,
 * junto a sus respectivos controladores.
 * @name routes
 * @type {Object}
 */
module.exports = (express) => {
    let router = express.Router();

    /**
     * @apiDefine CustomContentType
     * @apiHeader {String="application/json"} Content-Type
     */

    /**
     * @apiDefine successResponse
     * @apiSuccess {Integer} code     Código HTTP.
     * @apiSuccess {Object=null} error     Objeto de errores.
     * @apiSuccess {Object} data     Data de respuesta.
     */

    /**
     * @apiDefine errorResponse
     * @apiError {Integer} code     Código HTTP.
     * @apiError {Object=null} data     Data de respuesta.
     * @apiError {Object} error     objeto de errores.
     */

    /**
     * @apiIgnore Not necesary
     * @api {GET} /
     * @apiVersion 0.0.1
     * @apiName TestRoute
     * @apiGroup Test
     */
    router.get('/', (req, res) => {
        response.sendResponse(res, 200, 'App listening on port: ' + appConfig.API_PORT, true);
    });

    /**
    * @api {POST} /shorten Recorta la url
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName addLink
    * @apiGroup Link
    * @apiUse successResponse
    * @apiUse errorResponse
       
    * @apiParam {String} url     Url que se va a recortar.
    *
    * @apiSuccess {Object} data     Datos del url agregado.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *     	"code": 200,
    *     	"data": "Su url recortada http://127.0.0.1:9020/Z21haWwuY29t",
    *     	"success": true
    *     }
    */
    router.post('/shorten', (req, res) => {
        const linkController = controllers.LinkController;
        linkController.shortenLink(req, res);
    });

    /**
    * @api {GET} /:hash Redirecciona a url original
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName findOneLink
    * @apiGroup Link
    * @apiUse successResponse
    * @apiUse errorResponse
       
    * @apiParam {String} hash     Url encodificada (pathParam).
    *
    * @apiSuccess {Object} data     Redirecciona a la url original.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *     	"code": 200,
    *     	"data": "redireccionando..",
    *     	"success": true
    *     }
    */
    router.get('/:hash', (req, res) => {
        const linkController = controllers.LinkController;
        linkController.reditectToOrigin(req, res);
    });

    /**
     * @api {POST} /user/add Agregar usuario
     * @apiUse CustomContentType
     * @apiVersion 1.0.0
     * @apiName addUser
     * @apiGroup User
     * @apiUse successResponse
     * @apiUse errorResponse
     *
     * @apiParam {String} email Email del usuario.
     * @apiParam {String} password Contraseña del usuario.
     * @apiParam {String} passwordConfirm Confirmación de la contraseña.
     *
     * @apiSuccess {Object} data Datos del usuario creado.
     *
     * @apiSuccessExample {json} Success-Response:
     *    HTTP/1.1 200 OK
     *     {
     *       "code": 200,
     *       "data": {
     *           "userFirstname": "",
     *           "userLastname": "",
     *           "userStatus": 1,
     *           "creationTime": "2018-03-27T15:30:37.277Z",
     *           "userId": 3,
     *           "userEmail": "destiny@gmail.com",
     *           "userPassword": "c5e7f5250df1bd70fff81d0b674b1dd02629391ab389b130c726eb4dc4383dc1"
     *       },
     *       "success": true
     *     }
     */
    router.post('/user/add', (req, res) => {
        const userController = controllers.UserController;
        userController.add(req, res);
    });

    /**
     * @api {POST} /user/login Iniciar sesión
     * @apiUse CustomContentType
     * @apiVersion 1.0.0
     * @apiName findOneUser
     * @apiGroup User
     * @apiUse successResponse
     * @apiUse errorResponse
     *
     * @apiParam {String} email Email del usuario.
     * @apiParam {String} password Contraseña del usuario.
     *
     * @apiSuccess {Object} data Datos del usuario logeado
     *     HTTP/1.1 200 OK
     *     {
     *      "code": 200,
     *      "data": {
     *          "userId": 3,
     *          "userEmail": "destiny@gmail.com",
     *          "userFirstname": "",
     *          "userLastname": "",
     *          "userStatus": 1,
     *          "creationTime": "2018-03-27T15:30:37.000Z"
     *          },
     *      "success": true
     *}
     */
    router.post('/user/login', (req, res) => {
        const userController = controllers.UserController;
        userController.login(req, res);
    });

    return router;
};