const Sequielze = require('sequelize');
const dbConfig = require('../config/database');


const connection = new Sequielze(dbConfig);

const Client = require('../models/Client');
const Coffee = require('../models/Coffee');

Client.init(connection);
Coffee.init(connection);

module.exports = connection