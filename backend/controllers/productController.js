import { createProduct, getProductsBySubCategoryId } from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

export const addProduct = asyncHandler(async (req, res) => {
    const { product_name, sub_category_id, category_id, status, image } = req.body;
    const productId = await createProduct({ product_name, sub_category_id, category_id, status, image });

    res.status(201).json({
        status: "success",
        data: {
            id: productId,
            product_name,
            sub_category_id,
            category_id,
            status,
            image,
        },
    });
});

export const getProducts = asyncHandler(async (req, res) => {
    const { sub_category_id } = req.params;
    const products = await getProductsBySubCategoryId(sub_category_id);

    res.status(200).json({
        status: "success",
        data: products,
    });
});