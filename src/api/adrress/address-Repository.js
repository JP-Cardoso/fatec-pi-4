const AddressModel = require('../../models/Address');
const ClientModel = require('../../models/Client')

const create = async (item) => {
    const { client_id, zipcode, street, number } = item;

    const client = await ClientModel.findByPk(client_id);

    if (!client) {
        return new Error
    }

    const address = await AddressModel.create({
        zipcode,
        street,
        number,
        user_id,
    }, { raw: true });

    return address;
};

const findAll = async(id) => {
    const address = await AddressModel.findAll(client_id, {
        include: {
            association: 'addresses'
        }
    }, {raw: true});

    return address;
};

module.exports = { create, findAll };
