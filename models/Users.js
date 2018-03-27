'use strict';

// Libs
let moment = require('moment');

/**
 * Modelo encargado de realizar las operaciones
 * de base de dato para la entidad users.
 * @module models
 * @name Users
 * @type {Object}
 */
module.exports = (sequelize, DataTypes) => {
	let Users = sequelize.define("users", {
		userId: {
			field: 'id',
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			validate: {
				isInt: true
			}
		},
		userEmail: {
			field: 'user_email',
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		userPassword: {
			field: 'user_password',
			type: DataTypes.STRING,
			allowNull: false
		},
		userFirstname: {
			field: 'user_fistname',
			type: DataTypes.STRING,
			defaultValue: ''
		},
		userLastname: {
			field: 'user_lastname',
			type: DataTypes.STRING,
			defaultValue: ''
		},
		userStatus: {
			field: 'user_status',
			type: DataTypes.INTEGER,
			defaultValue: 1
		},
		creationTime: {
			field: 'create_time',
			type: DataTypes.DATE,
			defaultValue: moment()
		}
	}, {
		/**
		 * Relaciona los modelos entre si.
		 * @method associate
		 * @param  {Object} models modelos listados
		 * @return {[type]}        [description]
		 */
		classMethods: {
			associate: (models) => {

			},
			/**
			 * Agrega un nuevo usuario.
			 * @method addUser
			 * @param  {Object} dataObject [description]
			 * @return {Object}            [description]
			 */
			addUser: (dataObject) => {
				return Users.create(dataObject);
			},
			/**
			 * Encuentra un usuario.
			 * @method findOneUser
			 * @param  {Object} conditionObject [description]
			 * @return {Object}                 [description]
			 */
			findOneUser: (conditionObject) => {
				return Users.findOne(conditionObject);
			}
		}
	});

	return Users;
};