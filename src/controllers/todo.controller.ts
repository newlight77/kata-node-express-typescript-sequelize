import { Request, Response } from 'express';

import pool from "../config/db.connector";

class TodosController {

    public async hello(req: Request, res: Response) {
        try {
            res.send("hello");
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async get(req: Request, res: Response) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM todos";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default TodosController;