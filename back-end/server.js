import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"
import {notFound, errorHandler} from "./middlewares/errorMiddleware.js"
import * as path from 'path';
dotenv.config()


connectDB()

const app =  express()

app.use(cors())
app.use(express.json())



app.use("/api/products", productRoutes)

app.use("/api/users", userRoutes)

app.use("/api/posts", postRoutes)

app.use("/api/categories", categoryRoutes)

app.use("/api/payment", paymentRoutes)

const __dirname = path.resolve()
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/front-end/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send("api just started")
    })
}

app.use(notFound)

app.use(errorHandler)




const PORT = process.env.PORT 

app.listen(PORT, console.log(`server started on port ${PORT}`))