import { db } from '../config/db.js';

export async function createSubCategory({ subcategory_name, category_id, sub_category_sequence, status, image }) {
    const connection = await db();
    const [result] = await connection.query(
        'INSERT INTO sub_categories (subcategory_name, category_id, sub_category_sequence, status, image) VALUES (?, ?, ?, ?, ?)',
        [subcategory_name, category_id, sub_category_sequence, status, image]
    );
    return result.insertId;
}

export async function getSubCategoriesByCategoryId(category_id) {
    const connection = await db();
    const [rows] = await connection.query(
        'SELECT * FROM sub_categories WHERE category_id = ?',
        [category_id]
    );
    return rows;
}