import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js"
import admins from "./data/admins.js"
import products from "./data/products.js";
import categories from "./data/categories.js";
import posts from "./data/posts.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import Admin from "./models/adminModel.js";
import Post from "./models/postModel.js";
import connectDB from "./config/db.js";
import Category from "./models/categoryModel.js";

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Admin.deleteMany()
        await Post.deleteMany()
        await Category.deleteMany()

        const adminsList = await Admin.insertMany(admins)
        const adminUser = adminsList[0]._id

        const categoriesList = await Category.insertMany(categories)
        const categoryId = categoriesList[0]._id

        console.log("categoriesList", categoriesList)
        const sampleProducts = products.map((product) => {
            return {category: categoryId, admin: adminUser,...product}
        })
        const postsList = posts.map(post => {
            return { author: adminUser, ...post}
        })
        
        await User.insertMany(users)
        await Product.insertMany(sampleProducts)
        await Post.insertMany(postsList)

        console.log("data was imported")
    } catch(error) {
        console.log("data was not imported")
        console.error(error)
        process.exit(1)
    }
} 

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Admin.deleteMany()
        await Post.deleteMany()
        await Category.deleteMany()

        console.log("data destroyed")
    } catch(error) {
        console.log("data was not destroyed")
        console.erroe(error)
        process.exit(1)
    }
} 

if (process.argv[2] === "-d") {
    destroyData()
} else {
    importData()
}