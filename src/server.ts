import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/routes';
import pool from './config/db.connector';
import sequelize from './config/db.config';

const API_URL = process.env.API_URL || "http://localhost:3000";

const corsOptions: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: API_URL,
    preflightContinue: false,
};


class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
        //use cors middleware
        this.app.use(cors(corsOptions));
    }

    private dbConnect() {
        pool.connect(function (err: any, client, done) {
            if (err) throw new Error(err);
            console.log('Connected');
        });
    }

    private routerConfig() {
        this.app.use('/api', routes);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;