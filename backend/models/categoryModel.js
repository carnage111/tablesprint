import { db } from '../config/db.js';

export async function createCategory({ category_name, category_sequence, status, image }) {
    const connection = await db();
    const [result] = await connection.query(
        'INSERT INTO categories (category_name, category_sequence, status, image) VALUES (?, ?, ?, ?)',
        [category_name, category_sequence, status, image]
    );
    return result.insertId;
}

export async function getCategories() {
    const connection = await db();
    const [rows] = await connection.query('SELECT * FROM categories');
    return rows;
}