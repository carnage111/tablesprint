import { Router } from 'express';
import { addProduct, getProducts } from '../controllers/productController.js';
import upload from '../middleware/uploadFile.js';

const productRouter = Router();

productRouter.post('/add', upload.single('image'), addProduct);
productRouter.get('/:sub_category_id', getProducts);

export default productRouter;