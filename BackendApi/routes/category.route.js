import express from "express";
import {
  categoryAdd,
  getCategoryById,
  getCategoryByName,
} from "../controller/category.controller.js";
const router = express.Router();
router.post("/add", categoryAdd);
router.get("/:id", getCategoryById);
router.get("/name/:name", getCategoryByName);
export default router;
