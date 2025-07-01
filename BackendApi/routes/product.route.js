import express from "express";
import {
  list,
  saveInBulk,
  fetchProduct,
  searchProduct,
} from "../controller/product.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.post("/bulk-create", auth, saveInBulk);
router.get("/search", auth, searchProduct);
router.get("/:id", auth, fetchProduct);
router.get("/", auth, list);
export default router;
