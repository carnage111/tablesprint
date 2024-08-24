import { createSubCategory, getSubCategoriesByCategoryId } from '../models/subCategoryModel.js';
import asyncHandler from 'express-async-handler';

export const addSubCategory = asyncHandler(async (req, res) => {
    const { subcategory_name, category_id, sub_category_sequence, status, image } = req.body;
    const subCategoryId = await createSubCategory({ subcategory_name, category_id, sub_category_sequence, status, image });

    res.status(201).json({
        status: "success",
        data: {
            id: subCategoryId,
            subcategory_name,
            category_id,
            sub_category_sequence,
            status,
            image,
        },
    });
});

export const getSubCategories = asyncHandler(async (req, res) => {
    const { category_id } = req.params;
    const subCategories = await getSubCategoriesByCategoryId(category_id);

    res.status(200).json({
        status: "success",
        data: subCategories,
    });
});