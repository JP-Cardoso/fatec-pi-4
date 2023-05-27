const name = process.env.DB_NAME;
const pass = process.env.DB_PASS;
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const diac = process.env.DB_DIAC;

module.exports = {
    logging: console.log,
    dialect: diac, 
    host,
    username: user,
    password: pass, 
    database: name, 
    define: {
        timestamps: true,
        underscored: true,
    }
};