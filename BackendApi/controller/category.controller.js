import { validationResult } from "express-validator";
import { Category } from "../model/category.model.js";

export const categoryAdd = async (request, response, next) => {
  try {

   let name=request.body;
   let category=await Category.create({name})

   return response.status(201).json({message:"Category Added",category})

  } catch (err) {
    console.log("Internal Server Error", err);
    return response.status(500).json({message:"Internal Server Error"})
  }
};
