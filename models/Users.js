'use strict';

let moment = require('moment');

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
		classMethods: {
			associate: (models) => {

			}
		}
	});

	return Users;
};