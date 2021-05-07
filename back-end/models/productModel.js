import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const productSchema = mongoose.Schema(
    {
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Admin"
        },
        name: {
            type: String,
            required: true
        },
        thumb: {
            type: String,
            required: true,
        },
        images: [{
            type: String
        }],
        category: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Category"
        },
        description: {
            type: String,
            required: true
        },
        reviews: [reviewsSchema],
        rating: {
            type: Number,
            required: true,
            default: 0
        },
        NumReviews: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        discount: {
            type: Number,
            default: 0
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0
        },
        colors: [
            {
                type: String
            }
        ],
        sizes: [
            {
                type: String,
            }
        ],
        addedToWishlist: {
            type: Boolean, 
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)

export default Product