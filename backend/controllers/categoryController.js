import { createCategory, getCategories } from '../models/categoryModel.js';
import asyncHandler from 'express-async-handler';

export const addCategory = asyncHandler(async (req, res) => {
    const { category_name, category_sequence, status } = req.body;
    const image = req.file.path;
    const categoryId = await createCategory({ category_name, category_sequence, status, image });

    res.status(201).json({
        status: "success",
        data: {
            id: categoryId,
            category_name,
            category_sequence,
            status,
            image,
        },
    });
});

export const getCategory = asyncHandler(async (req, res) => {
    const categories = await getCategories();

    res.status(200).json({
        status: "success",
        data: categories,
    });
});