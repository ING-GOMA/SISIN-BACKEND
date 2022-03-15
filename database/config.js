const { Sequelize } = require('sequelize');


const dbConnection = async() => {
    try {
        const db = new Sequelize(process.env.DB_BASE, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: 'mysql',
            //logging: false
        })

        await db.authenticate();
        console.log("BASE DE DATOS ONLINE");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    dbConnection
}