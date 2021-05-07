import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        fullText: {
            type: String,
            required: true
        },
        excerpt: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin"
        },
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model("Post", postSchema)

export default Post