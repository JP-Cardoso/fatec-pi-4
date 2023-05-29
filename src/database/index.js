const Sequielze = require('sequelize');
const dbConfig = require('../config/database');


const connection = new Sequielze(dbConfig);

const Client = require('../models/Client');
const Coffee = require('../models/Coffee');
const Address = require('../models/Address');

Client.init(connection);
Coffee.init(connection);
Address.init(connection);

Client.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;