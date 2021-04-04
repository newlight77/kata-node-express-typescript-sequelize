import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import SignupEntity from '../entities/signup.entity';

const host = process.env.DB_ADDRESS || 'localhost';
const port = parseInt(process.env.DB_PORT || '5432');
const database = process.env.DB_NAME || 'consultant';
const username = process.env.DB_USER || 'consultant';
const password = process.env.DB_PASSWORD || 'Pa55w0rd';
const dialect: any = process.env.DB_DIALECT || 'postgres';

const options: SequelizeOptions = {
    host,
    port,
    database,
    dialect,
    username,
    password,
    // storage: ':memory:',
    repositoryMode: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // only matched filename prefix == model classname
    // modelMatch: (filename, member) => {
    //     return (filename.substring(0, filename.indexOf('.entity')) + 'entity') === member.toLowerCase();
    // },
    // models: [__dirname + '/../**/*.entity.ts'] // or [Player, Team],
}

console.info("sequelized configured!", __dirname + '/../**/*.entity.ts');

const sequelize = new Sequelize(options)

sequelize.addModels([SignupEntity]);


export default sequelize;