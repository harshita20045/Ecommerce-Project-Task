import express from "express";
import {
  addToCart,
  fetchCart,
  deleteCartProduct,
} from "../controller/cart.controller.js";
const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/:userId", fetchCart);
router.delete("/delete/:userId", deleteCartProduct);
export default router;
