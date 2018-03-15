YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "EnableCrossDomain",
        "LinkController",
        "Links",
        "ModuleFactoryUtil",
        "ResponseUtil",
        "app",
        "db",
        "index"
    ],
    "modules": [
        "config",
        "controllers",
        "middlewares",
        "models",
        "src",
        "utils"
    ],
    "allModules": [
        {
            "displayName": "config",
            "name": "config",
            "description": "Objeto con las variables de configuracion principal de la aplicacion"
        },
        {
            "displayName": "controllers",
            "name": "controllers",
            "description": "Controlador para las operaciones de Link"
        },
        {
            "displayName": "middlewares",
            "name": "middlewares",
            "description": "Middleware express para habilitar soporte de cross domain."
        },
        {
            "displayName": "models",
            "name": "models",
            "description": "Modelo encargado de realizar las operaciones SQL\npara la entidad links."
        },
        {
            "displayName": "src",
            "name": "src",
            "description": "Archivo para el manejo de tareas\nllevados a cabo por GruntJS"
        },
        {
            "displayName": "utils",
            "name": "utils"
        }
    ],
    "elements": []
} };
});