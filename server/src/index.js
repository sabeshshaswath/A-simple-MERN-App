import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js"
import { recipesRouter } from "./routes/events.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/recipes",recipesRouter)


mongoose.connect('mongodb://127.0.0.1:27017/fsproj').then(()=>console.log("Db connected"))

app.listen(3001, () => console.log("Server is on 🔥"));