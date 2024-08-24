import { Router } from 'express';
import { addCategory, getCategory } from '../controllers/categoryController.js';

const categoryRouter = Router();

categoryRouter.post('/add', addCategory);
categoryRouter.get('/', getCategory);

export default categoryRouter;