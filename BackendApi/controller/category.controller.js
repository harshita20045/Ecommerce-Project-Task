import { Category } from "../model/category.model.js";
export const categoryAdd = async (request, response, next) => {
  try {
    let name = request.body.name;
    if (!name) {
      return response
        .status(400)
        .json({ message: "Category name is required...." });
    }
    console.log(name);
    let category = await Category.create({ name: name });
    if (!category) {
      return response.status(400).json({ message: "Category not added...." });
    }
    return response
      .status(201)
      .json({ message: "Category Added....", category });
  } catch (err) {
    console.log("Internal Server Error....", err);
    return response.status(500).json({ message: "Internal Server Error...." });
  }
};
export const getCategoryById = async (request, response, next) => {
  try {
    let { id } = request.params;
    console.log(id);

    let category = await Category.findById(id);
    console.log(category);
    if (!category) {
      return response.status(400).json({ message: "Category not found...." });
    }
    return response
      .status(201)
      .json({ message: "Category by Id is :", category });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ message: "Internal Server Error...." });
  }
};

export const getCategoryByName = async (request, response, next) => {
  try {
    let { name } = request.params;
    console.log(name);
    let category = await Category.findOne({ name: name });
    console.log(category);
    if (!category) {
      return response
        .status(400)
        .json({ message: "Category does'nt exist...." });
    }
    return response
      .status(201)
      .json({ message: "Category by name is : ", category });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ message: "Internal Server Error...." });
  }
};

export const deleteCategory = async (request, response, next) => {
  try {
    let { id } = request.params;
    console.log(id);
    let category = await Category.findById(id);
    console.log(category);
    if (!category) {
      return response
        .status(400)
        .json({ message: "Category does'nt exist...." });
    }
    console.log(category);
    let cat = await Category.deleteOne({ _id: id });
    console.log(cat);
    return response.status(201).json({ message: "Deleted Successfully...." });
  } catch (err) {
    return response.status(500).json({ message: "Internal Server Error...." });
  }
};
