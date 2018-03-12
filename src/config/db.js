/**
 * Objeto con las variables de configuracion de las
 * bases de datos a usar en la aplicacion.
 * @class db
 * @module config
 * @author Chistian Giménez <chrisgabo15@gmail.com>
 */

module.exports = {
    /**
     * Indica si se muestran los script que va ejecutando el orm
     * y los errores que arroja la ejeccucion de las setencias sql.
     *
     * @var LOG_SEQUELIZE_TRANSACTIONS
     * @type Boolean
     */
    LOG_SEQUELIZE_TRANSACTIONS: true,
    /**
     * Contiene los parametros de configuracion de las bases de datos
     * que van a ser usadas por la aplicación.
     *
     * @var DATABASE
     * @type Object
     */
    DATABASE_CONFIG: {
        HOST: '127.0.0.1',
        NAME: 'bitly',
        USERNAME: 'root',
        PASSWORD: 'd34dl0ck',
        DB_TYPE: 'mysql',
        POOL: {
            max: 5,
            min: 0,
            idle: 100
        },
        TIMEZONE: '-04:00'
    },
};