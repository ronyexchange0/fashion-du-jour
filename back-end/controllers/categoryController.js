import Category from "../models/categoryModel.js";
import asyncHandler from "express-async-handler";

export const getCats = asyncHandler(async (req, res) => {
    const cats = await Category.find()
    res.json(cats)
})
