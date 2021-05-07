import express from "express";
import {getPosts, getPostById} from "../controllers/postContoller.js";

const router = express.Router();

router.route("/:id").get(getPostById)
router.route("/").get(getPosts)

export default router