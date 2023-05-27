const Sequielze = require('sequelize');
const dbConfig = require('../config/database');


const connection = new Sequielze(dbConfig);

const Client = require('../models/Client');

Client.init(connection);

module.exports = connection