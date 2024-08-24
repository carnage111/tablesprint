import { db } from '../config/db.js';

export async function createProduct({ product_name, sub_category_id, category_id, status, image }) {
    const connection = await db();
    const [result] = await connection.query(
        'INSERT INTO products (product_name, sub_category_id, category_id, status, image) VALUES (?, ?, ?, ?, ?)',
        [product_name, sub_category_id, category_id, status, image]
    );
    return result.insertId;
}

export async function getProductsBySubCategoryId(sub_category_id) {
    const connection = await db();
    const [rows] = await connection.query(
        'SELECT * FROM products WHERE sub_category_id = ?',
        [sub_category_id]
    );
    return rows;
}