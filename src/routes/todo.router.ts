import { Router } from 'express';
import TodosController from '../controllers/todo.controller';

const router = Router();
const todosController = new TodosController();

router.get('/todos', todosController.get);

export default router;