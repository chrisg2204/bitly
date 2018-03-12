'use strict';

/**
 * Rutas disponibles juntos a sus
 * controladores.
 * @module src
 */

// Utils
const response = require('./utils/ResponseUtil');
// Controllers
const userController = require('./controllers/UserController');
const linkController = require('./controllers/LinkController');

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
		response.sendResponse(res, 200, 'all ok.', null);
	});

	/**
       * @api {POST} /shorten
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
       *     	"error": false
       *     }
       */
	router.post('/shorten', (req, res) => {
		linkController.shortenLink(req, res);
	});

	/**
       * @api {GET} /:hash
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
       *     	"error": false
       *     }
       */
	router.get('/:hash', (req, res) => {
		linkController.reditectToOrigin(req, res);
	});

	return router;
};