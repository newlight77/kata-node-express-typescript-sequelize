import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

const host = process.env.DB_ADDRESS || 'localhost';
const port = parseInt(process.env.DB_PORT || '5432');
const database = process.env.DB_NAME || 'consultant';
const username = process.env.DB_USER || 'consultant';
const password = process.env.DB_PASSWORD || 'Pa55w0rd';
const dialect: any = process.env.DB_DIALECT || 'postgres';

class DBConfig {

    options: SequelizeOptions = {
        host,
        port,
        database,
        dialect,
        username,
        password,
        // storage: ':memory:',
        // repositoryMode: true,
        // logging: (...msg) => console.log(msg),
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        // only matched filename prefix == model classname
        modelMatch: (filename, member) => {
            return (filename.substring(0, filename.indexOf('.entity')) + 'entity') === member.toLowerCase();
        },
        // models: [SignupEntity] // or [Player, Team],
        models: [__dirname + '/../**/*.entity.ts'] // or [Player, Team],
    };
    
    sequelize: Sequelize = new Sequelize(this.options);

    connect() {
        this.sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");
        
        console.info("models", this.sequelize.modelManager.all);
        this.sequelize.authenticate()
            .then(function() {
                console.log("database connected ...")
            })
            .catch(function(error) {
                console.log("Database catch block : "+ error)
            });
    }

}


export default new DBConfig();