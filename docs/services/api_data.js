define({ "api": [
  {
    "type": "POST",
    "url": "/shorten",
    "title": "",
    "version": "1.0.0",
    "name": "addLink",
    "group": "Link",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url que se va a recortar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos del url agregado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t&quot;code&quot;: 200,\n\t&quot;data&quot;: &quot;Su url recortada http://127.0.0.1:9020/Z21haWwuY29t&quot;,\n\t&quot;error&quot;: false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./docs/webservices_classes/files/routes.js.html",
    "groupTitle": "Link",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/shorten",
    "title": "",
    "version": "1.0.0",
    "name": "addLink",
    "group": "Link",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url que se va a recortar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos del url agregado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 200,\n\t\"data\": \"Su url recortada http://127.0.0.1:9020/Z21haWwuY29t\",\n\t\"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "Link",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/:hash",
    "title": "",
    "version": "1.0.0",
    "name": "findOneLink",
    "group": "Link",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>Url encodificada (pathParam).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Redirecciona a la url original.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t&quot;code&quot;: 200,\n\t&quot;data&quot;: &quot;redireccionando..&quot;,\n\t&quot;error&quot;: false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./docs/webservices_classes/files/routes.js.html",
    "groupTitle": "Link",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/:hash",
    "title": "",
    "version": "1.0.0",
    "name": "findOneLink",
    "group": "Link",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>Url encodificada (pathParam).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Redirecciona a la url original.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>Objeto de errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 200,\n\t\"data\": \"redireccionando..\",\n\t\"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.js",
    "groupTitle": "Link",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Código HTTP.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "allowedValues": [
              "null"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>Data de respuesta.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>objeto de errores.</p>"
          }
        ]
      }
    }
  }
] });
