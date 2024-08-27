import { Router } from 'express';
import { addProduct, getProducts, editProduct, deleteProducts } from '../controllers/productController.js';
import upload from '../middleware/uploadFile.js';

const productRouter = Router();

productRouter.post('/add', upload.single('image'), addProduct);
productRouter.get('/:sub_category_id', getProducts);
productRouter.put('/edit/:id', upload.single('image'), editProduct);
productRouter.delete('/delete/:id', deleteProducts);

export default productRouter;