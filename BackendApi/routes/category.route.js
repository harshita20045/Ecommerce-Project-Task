import express from "express";
import {
  categoryAdd,
  deleteCategory,
  getCategoryById,
  getCategoryByName,
} from "../controller/category.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();
router.post("/add", auth, categoryAdd);
router.get("/:id", auth, getCategoryById);
router.get("/name/:name", auth, getCategoryByName);
router.delete("/delete/:id",deleteCategory)
export default router;
