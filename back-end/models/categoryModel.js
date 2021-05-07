import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String
        }
    }
)

const Category = mongoose.model("Category", categorySchema)

export default Category