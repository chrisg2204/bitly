'use strict';

/**
 * Modelo encargado de realizar las operaciones
 * de base de dato para la entidad users_links.
 * @module models
 * @name UsersLinks
 * @type {Object}
 */
module.exports = (sequelize, DataTypes) => {
	let UsersLinks = sequelize.define("users_links", {
		usersLinksId: {
			field: 'id',
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			validate: {
				isInt: true
			}
		},
		userId: {
			field: 'id_users',
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			}
		},
		linkId: {
			field: 'id_links',
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			}
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

			}
		}
	});

	return UsersLinks;
};