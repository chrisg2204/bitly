'use strict';

/**
 * Clase para manejar las validaciones.
 * @module utils
 * @class ValidateUtil
 */
class ValidateUtil {

	constructor() {

	}

	/**
	 * Verifica que la URL sea valida.
	 * @method  verifyUrl
	 * @param  {String} url La url insertada.
	 * @return {Boolean}     denota si es valida o no.
	 */
	verifyUrl(url) {
		let retVal = true;
		let regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

		if (!url.match(regex)) {
			retVal = false;
		}

		return retVal;
	}

}

module.exports = new ValidateUtil();