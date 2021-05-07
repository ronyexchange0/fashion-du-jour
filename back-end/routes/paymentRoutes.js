import express from "express";
import { stripeCheckout } from "../controllers/paymentControllers.js";

const router = express.Router();


router.route("/").post(stripeCheckout)

export default router