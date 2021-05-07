import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import {generateToken} from "../utils/utils.js"

export const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(401)
        throw new Error("not correct")
    }
})

export const getUserProfile = asyncHandler( async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401)
        throw new Error("user not found")
    }
})

export const registerUser = asyncHandler( async (req, res) => {
    const {name, email, password} = req.body

    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error("User Already Exists")
    }

    const user = await User.create({
        name,
        email,
        password,
    })

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid data")
    }
})

export const updateUserProfile = asyncHandler( async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            token: generateToken(updatedUser.id)
        })

    } else {
        res.status(400)
        throw new Error("User not found")
    }

    
})