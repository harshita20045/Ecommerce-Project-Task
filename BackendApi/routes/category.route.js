import express from "express";
import { body } from "express-validator";
import { categoryAdd } from "../controller/category.controller.js";
const router = express.Router();

router.post(
  "/add",
  categoryAdd
);

export default router;
