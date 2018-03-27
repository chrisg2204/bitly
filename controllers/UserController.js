'use strict';

// Config
const configApp = require('../config/App');
// Libs
const validator = require('validator');
const crypto = require('crypto');
const chalk = require('chalk');
const log = require('loglevel');
// Utils
const response = require('../utils/ResponseUtil');
// Models
const models = require('../models/index');

/**
 * Controlador para las operaciones de Usuarios.
 * @module controllers
 * @class UserController
 */
class UserController {

	constructor() {}

	/**
	 * Método donde se realiza el proceso de login.
	 * @method login
	 * @param {Object} req express request
	 * @param {Object} res express response
	 * @return {[type]} [description]
	 */
	login(req, res) {
		let body = req.body;
		let condition = {};
		let message = '';
		let prepared = true;
		if (body.email && body.password) {
			if (validator.isEmail(body.email) === false) {
				prepared = false;
				message = 'Campo email invalido.';
			}
			if (prepared) {
				condition.attributes = [
					'userId',
					'userEmail',
					'userFirstname',
					'userLastname',
					'userStatus',
					'creationTime'
				];
				condition.where = {
					userEmail: body.email,
					$and: {
						userPassword: crypto.createHash('sha256').update(body.password).digest("hex"),
						userStatus: 1
					}
				};
				const users = models.users;
				users.findOneUser(condition)
					.then(userFinded => {
						if (userFinded) {
							response.sendResponse(res, 200, userFinded, true);
							log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/login - UserController?login')}`);
						} else {
							response.sendResponse(res, 404, `Usuario o Contraseña invalidos.`, false);
							log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/login - UserController?login')}`);
						}
					})
					.catch(error => {
						log.error(error);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/login - UserController?login')}`);
					});
			} else {
				response.sendResponse(res, 400, message, false);
			}
		} else {
			response.sendResponse(res, 400, 'Formulario incompleto.', false);
		}
	}

	/**
	 * Método donde se realiza el proceso de agregar usuario.
	 * @method add
	 * @param {Object} req express request
	 * @param {Object} res express response
	 * @return {[type]} [description]
	 */
	add(req, res) {
		let body = req.body;
		let toCreate = {};
		let condition = {};
		let message = '';
		let prepared = true;
		if (body.email && body.password && body.passwordConfirm) {
			if (validator.isEmail(body.email) === false) {
				prepared = false;
				message = 'Campo email invalido.';
			} else {
				toCreate.userEmail = body.email;
			}
			if (body.passwordConfirm !== body.password) {
				prepared = false;
				message = 'Contraseñas no son iguales.'
			} else {
				toCreate.userPassword = crypto.createHash('sha256').update(body.password).digest("hex");
			}
			if (prepared) {
				condition.where = {
					userEmail: body.email
				};
				const users = models.users;
				users.findOneUser(condition)
					.then(userFinded => {
						if (!userFinded) {
							users.addUser(toCreate)
								.then(userCreated => {
									response.sendResponse(res, 200, userCreated, true);
									log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/add - UserController?add')}`);
								})
								.catch(error => {
									log.error(error);
									log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/add - UserController?add')}`);
								});
						} else {
							response.sendResponse(res, 409, `Existe un usuario con el email ${userFinded.userEmail} .`, false);
							log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/add - UserController?add')}`);
						}
					})
					.catch(error => {
						log.error(error);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/add - UserController?add')}`);
					});
			} else {
				response.sendResponse(res, 400, message, false);
			}
		} else {
			response.sendResponse(res, 400, 'Formulario incompleto.', false);
		}
	}
}

module.exports = new UserController();