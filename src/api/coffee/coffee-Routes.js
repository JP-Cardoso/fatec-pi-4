const {create, find, getById, updated, remove} = require('./coffee-Controller');
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
            
        ]);
    })
};


module.exports = plugin;