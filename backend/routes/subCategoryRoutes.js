import { Router } from 'express';
import { addSubCategory, getSubCategories } from '../controllers/subCategoryController.js';
import upload from '../middleware/uploadFile.js';

const subCategoryRouter = Router();

subCategoryRouter.post('/add', upload.single('image'), addSubCategory);
subCategoryRouter.get('/:category_id', getSubCategories);

export default subCategoryRouter;