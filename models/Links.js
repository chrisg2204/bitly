'use strict';

// Libs
let moment = require('moment');

/**
 * Modelo encargado de realizar las operaciones
 * de base de dato para la entidad links.
 * @module models
 * @name Links
 * @type {Object}
 */
module.exports = (sequelize, DataTypes) => {
	let Links = sequelize.define('links', {
		linkId: {
			field: 'id',
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			validate: {
				isInt: true
			}
		},
		linkOrigin: {
			field: 'link_origin',
			type: DataTypes.TEXT,
			allowNull: false
		},
		creationTime: {
			field: 'create_time',
			type: DataTypes.DATE,
			defaultValue: moment()
		},
		expirationTime: {
			field: 'expiration_time',
			type: DataTypes.DATE,
			defaultValue: moment().add(7, 'days')
		}
	}, {
		classMethods: {
			/**
			 * Relaciona los modelos entre si.
			 * @method associate
			 * @param  {Object} models modelos listados
			 * @return {[type]}        [description]
			 */
			associate: (models) => {

			},
			/**
			 * Guardar los datos del link.
			 * @method addLink
			 * @param  {Object} objData datos del link
			 * @return {Object} instancia de objeto link
			 */
			addLink: (objData) => {
				let models = require('./index');
				return Links.create(objData, {
					returning: true
				});

			},
			/**
			 * Encuentra los datos de un link.
			 * @method  findOneLink
			 * @param  {Object} objCondition condición de búsqueda
			 * @return {Object} instancia de objeto link
			 */
			findOneLink: (objCondition) => {
				let models = require('./index');
				return Links.findOne(objCondition);
			}
		}
	});

	return Links;
};