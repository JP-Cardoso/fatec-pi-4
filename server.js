const Hapi = require("@hapi/hapi");
const routes = require('./src/config/routes');
require('dotenv').config();
require('./src/database/index').authenticate();


const server = Hapi.server({
    port: 8000,
    host: "localhost"
});

const plugins = [
    {
        plugin: routes, options: {
            routesBaseDir: "./src/api"
        }
    }
]


module.exports = { server, plugins };