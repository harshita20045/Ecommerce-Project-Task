import express from "express";
import {
  addToCart,
  fetchCart,
  deleteCartProduct,
} from "../controller/cart.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.post("/add-to-cart", auth, addToCart);
router.get("/:userId", auth, fetchCart);
router.delete("/delete/:userId", auth, deleteCartProduct);
export default router;
