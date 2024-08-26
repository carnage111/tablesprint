import { Router } from 'express';
import { addCategory, getCategory } from '../controllers/categoryController.js';
import upload from '../middleware/uploadFile.js';

const categoryRouter = Router();

categoryRouter.post('/add', upload.single('image'), addCategory);
categoryRouter.get('/', getCategory);

export default categoryRouter;