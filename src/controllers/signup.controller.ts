import { Request, Response } from 'express';

import signupRepository from '../repository/signup.repository';

class SignupController {

    public create(req: Request, res: Response) {
        console.info("SignupController create ", this)
        try {
            const model = req.body;
            console.debug(`create signup with username ${model.username}`, model );
            const signup = signupRepository.create(model);
            res.send(signup);
        } catch (error) {
            console.error("an error has occurred :", error);
            res.status(400).send(error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const name = req.params['name'];
            const model = req.body;
            const signup = signupRepository.update(name, model);
            res.send(signup);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const name = req.params['name'];
            const signup = signupRepository.delete(name);
            res.send("ok");
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async findByName(req: Request, res: Response) {
        try {
            const name = req.params['name'];
            const signup = signupRepository.findOne(name);
            res.send(signup);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async findAll(req: Request, res: Response) {
        try {
            const signups = signupRepository.findAll();
            res.send(signups);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default SignupController;