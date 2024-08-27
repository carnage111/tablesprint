import { Router } from 'express';
import { addSubCategory, getSubCategories, editSubCategory, deleteSubCategorys } from '../controllers/subCategoryController.js';
import upload from '../middleware/uploadFile.js';

const subCategoryRouter = Router();

subCategoryRouter.post('/add', upload.single('image'), addSubCategory);
subCategoryRouter.get('/:category_id', getSubCategories);
subCategoryRouter.put('/edit/:id', upload.single('image'), editSubCategory);
subCategoryRouter.delete('/delete/:id', deleteSubCategorys);

export default subCategoryRouter;