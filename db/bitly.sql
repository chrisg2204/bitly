-- Tabla links
CREATE TABLE `bitly`.`links`(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	link_origin TEXT NOT NULL,
	create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	expiration_time TIMESTAMP

);

-- Tabla users
CREATE TABLE `bitly`.`users`(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	user_email VARCHAR(250) NOT NULL,
	user_password VARCHAR(255) NOT NULL,
	user_fistname VARCHAR(100) NOT NULL,
	user_lastname VARCHAR(100) NOT NULL,
	user_status TINYINT DEFAULT 1,
	create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- Tabla users_links
CREATE TABLE `bitly`.`users_links`(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	id_users INT(6) NOT NULL,
	id_links INT(6) NOT NULL

);

ALTER TABLE `bitly`.`users_links`
ADD CONSTRAINT `fk_users` FOREIGN KEY (`id_users`)
REFERENCES `bitly`.`users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `bitly`.`users_links`
ADD CONSTRAINT `fk_links` FOREIGN KEY (`id_links`)
REFERENCES `bitly`.`links` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
