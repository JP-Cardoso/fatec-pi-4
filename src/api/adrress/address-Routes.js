const { create } = require('./address-Controller');
const schema = require('./address-Schema');

const plugin = {
    name: 'address-v1-route',
    verion: 1,
    register: (server => {
        server.route([
            {
                method: "POST",
                path: "client/{id}/addresses",
                opitions: {
                    validate: schema.postAddress,
                    handler: create
                }
           }
        ]);
    })
};


module.exports = plugin;