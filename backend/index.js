// packages
import path from 'path';
import express from 'express';//ES6
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from  'cors';
// utils
import connectDB from './config/db.js';

import userRoutes from "./routes/userRoutes.js";
import dishRoutes from "./routes/dishRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import mealRoutes from "./routes/mealRoutes.js";

const app = express();

app.use(cors());

dotenv.config()
const port = process.env.PORT || 5000;

connectDB()

//const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api", mealRoutes);
app.use("/api", dishRoutes);
app.use("/api", menuRoutes);
app.use("/api", feedbackRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello World");
// })

app.listen(port, () => console.log(`Server running on port: ${port}`))