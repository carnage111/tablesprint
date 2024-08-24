import { Router } from 'express';
import { addSubCategory, getSubCategories } from '../controllers/subCategoryController.js';

const subCategoryRouter = Router();

subCategoryRouter.post('/add', addSubCategory);
subCategoryRouter.get('/:category_id', getSubCategories);

export default subCategoryRouter;