import { Router } from 'express';
import { addCategory, getCategory, editCategory, deleteCategorys } from '../controllers/categoryController.js';
import upload from '../middleware/uploadFile.js';

const categoryRouter = Router();

categoryRouter.post('/add', upload.single('image'), addCategory);
categoryRouter.get('/', getCategory);
categoryRouter.put('/edit/:id', upload.single('image'), editCategory);
categoryRouter.delete('/delete/:id', deleteCategorys);

export default categoryRouter;