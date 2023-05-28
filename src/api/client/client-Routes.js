const { create, find, getById, updated, remove } = require('./client-Controller');
const schema = require('./client-Schema');

const plugin = {
    name: 'client-v1-route',
    verion: 1,
    register: (server => {
        server.route([
            {
                method: "POST",
                path: "/clients",
                options: {
                    validate: schema.postClient,
                    handler: create
                }
            },
            {
                method: "GET",
                path: "/clients",
                options: {
                    validate: schema.findAll,
                    handler: find
                }
            },
            {
                method: "GET",
                path: "/client/{id}",
                options: {
                    validate: schema.getById,
                    handler: getById
                }
            },
            {
                method: "PUT",
                path: "/client/{id}",
                options: {
                    validate: schema.updated,
                    handler: updated
                }
            },
            {
                method: "DELETE",
                path: "/client/{id}",
                handler: remove
            },
        ]);
    })
};


module.exports = plugin;