'use strict';

// Config
const configApp = require('../config/App');
// Libs
const chalk = require('chalk');
const log = require('loglevel');
const btoa = require('btoa');
const atob = require('atob');
// Utils
const response = require('../utils/ResponseUtil');
const validate = require('../utils/ValidateUtil');
// Models
const models = require('../models/index');

/**
 * Controlador para las operaciones de Link.
 * @module controllers
 * @class LinkController
 */
class LinkController {

	constructor() {}

	/**
	 * Método donde se realiza el proceso de recortar url.
	 * @method shortenLink
	 * @param  {Object} req express request
	 * @param  {Object} res express response
	 * @return {[type]}     [description]
	 */
	shortenLink(req, res) {
		let body = req.body;
		let toCreate = {};
		let findCondition = {};
		if ('url' in body) {
			if (validate.verifyUrl(body.url) === true) {
				let Links = models.links;

				findCondition.where = {
					linkOrigin: body.url
				};

				Links.findOneLink(findCondition)
					.then(linkFinded => {
						if (!linkFinded) {
							toCreate.linkOrigin = body.url;

							Links.addLink(toCreate)
								.then(linkCreated => {
									log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/shorten - LinkController?shortenLink')}`);
									response.sendResponse(res, 200, configApp.SERVICE_URL + btoa(linkCreated.dataValues.linkId), false);
								})
								.catch(err => {
									log.error(err);
									log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/shorten - LinkController?shortenLink')}`);
								});
						} else {
							log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/shorten - LinkController?shortenLink')}`);
							response.sendResponse(res, 200, configApp.SERVICE_URL + btoa(linkFinded.dataValues.linkId), false);
						}
					})
					.catch(err => {
						log.error(err);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/shorten - LinkController?shortenLink')}`);
					});
			} else {
				response.sendResponse(res, 400, `Url no valida.`, true);
			}
		} else {
			response.sendResponse(res, 400, `Formulario incompleto.`, true);
		}
	}

	/**
	 * Método donde se realiza el proceso de redireccionamiento.
	 * @method reditectToOrigin
	 * @param  {Object} req express request
	 * @param  {Object} res express response
	 * @return {[type]}     [description]
	 */
	reditectToOrigin(req, res) {
		let urlHash = req.params.hash;
		let findCondition = {};
		let Links = models.links;

		findCondition.where = {
			linkId: atob(urlHash)
		};

		Links.findOneLink(findCondition)
			.then(linkFinded => {
				if (!linkFinded) {
					response.sendResponse(res, 404, 'URl ' + configApp.SERVICE_URL + urlHash + ' no encotrada.', true);
					log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/:hash - LinkController?reditectToOrigin')}`);
				} else {
					log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/:hash - LinkController?reditectToOrigin')}`);
					res.redirect('https://' + linkFinded.linkOrigin.replace(/(^\w+:|^)\/\//, ''));
				}
			})
			.catch(err => {
				log.error(err);
				log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/:hash - LinkController?reditectToOrigin')}`);
			});
	}
}

module.exports = new LinkController();