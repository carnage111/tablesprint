import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {db} from './config/db.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';


dotenv.config();    

db()

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.all('*', (req, res, next) => {
    let err = new Error(`Page not found ${req.originalUrl}!`);
    err.statusCode = 404;
    next(err);
});


app.use(globalErrorHandler);

export default app;