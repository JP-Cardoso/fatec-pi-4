const name = process.env.DB_NAME;
const pass = process.env.DB_PASS;
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const diac = process.env.DB_DIAC;

module.exports = {
    logging: console.log,
    dialect: 'mysql', 
    host: 'localhost',
    username: 'root',
    password: '1234', 
    database: 'PI', 
    define: {
        timestamps: true,
        underscored: true,
    }
};