import { Router } from 'express';
import TodosController from '../controllers/todo.controller';
import SignupController from '../controllers/signup.controller';


const router = Router();

const todosController = new TodosController();
router.get('/hello', todosController.hello);
router.get('/todos', todosController.get);

const signupController = new SignupController();
console.info("SignupController routes", signupController)
router.post('/signup', signupController.create);
router.put('/signup/:name', signupController.update);
router.delete('/signup/:name', signupController.delete);
router.get('/signup/:name', signupController.findByName);
router.get('/signup', signupController.findAll);

export default router;