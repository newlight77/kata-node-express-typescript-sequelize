module.exports = {
    HOST: "localhost",
    USER: "consultant",
    PASSWORD: "Pa55w0rd",
    DB: "consultant",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};