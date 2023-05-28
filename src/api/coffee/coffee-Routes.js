const { create, findAll, getById, updated, remove } = require('./coffee-Controller');
const schema = require('./coffee-Schema');

const plugin = {
    name: 'coffee-v1-route',
    verion: 1,
    register: (server => {
        server.route([
            {
                method: "POST",
                path: "/coffees",
                options: {
                    validate: schema.postCoffee,
                    handler: create
                }
            },
            {
                method: "GET",
                path: "/coffees",
                handler: findAll
            },
            {
                method: "GET",
                path: "/coffee/{id}",
                options: {
                    validate: schema.getById,
                    handler: getById
                }

            },
            {
                method: "PUT",
                path: "/coffee/{id}",
                options: {
                    validate: schema.updated,
                    handler: updated
                }
            },
            {
                method: "DELETE",
                path: "/coffee/{id}",
                options: {
                    // validate: schema.getClient,
                    handler: remove
                }
            },
        ]);
    })
};


module.exports = plugin;