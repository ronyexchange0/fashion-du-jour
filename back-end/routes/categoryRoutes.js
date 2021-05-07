import express from "express";
import { getCats } from "../controllers/categoryController.js";

const router = express.Router();


router.route("/").get(getCats)

export default router