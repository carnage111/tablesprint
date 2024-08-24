import { createUser, verifyPassword } from "../models/User.js";
import asyncHandler from "express-async-handler";
import { genToken } from "../utils/genToken.js";
import { db } from '../config/db.js';

const register = asyncHandler(async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    const connection = await db();

    const [existingUser] = await connection.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );

    if (existingUser.length > 0) {
        throw new Error("User exists already");
    }

    const userId = await createUser({ name, email, password, confirmPassword });

    const token = await genToken(userId);

    const [newUser] = await connection.query(
        'SELECT id, name, email, created_at, updated_at FROM users WHERE id = ?',
        [userId]
    );

    res.status(201).json({
        status: "success",
        data: newUser[0],
        token
    });
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const connection = await db();

    const [existingUser] = await connection.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );

    if (existingUser.length === 0) {
        return res.status(404).json({ message: "User email is not registered. Please sign up." });
    }

    const user = existingUser[0];
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = await genToken(user.id);

    const { password: pwd, ...userData } = user;

    res.status(200).json({
        status: "Success!",
        data: userData,
        token
    });
});

export { register, login };
