import { Router } from 'express';
import { addProduct, getProducts } from '../controllers/productController.js';

const productRouter = Router();

productRouter.post('/add', addProduct);
productRouter.get('/:sub_category_id', getProducts);

export default productRouter;