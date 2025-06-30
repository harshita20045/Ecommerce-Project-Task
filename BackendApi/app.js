import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import categoryRouter from "./routes/category.route.js"

dotenv.config();
const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/user", userRouter);
    app.use("/category",categoryRouter);
    app.listen(process.env.PORT, () => {
      console.log("Server Started");
    });
  })
  .catch((err) => console.log("Db not Connected", err));
