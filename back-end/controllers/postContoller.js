import asyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

export const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
})

export const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (post) {
        res.json(post)
    } else {
        res.status(404)
        throw new Error("post not found")
    }
})