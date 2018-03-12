'use strict';

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
		classMethods: {
			associate: (models) => {

			}
		}
	});

	return UsersLinks;
};