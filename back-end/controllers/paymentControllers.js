import asyncHandler from "express-async-handler";

import Stripe from 'stripe';

export const stripeCheckout = asyncHandler(async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd",
        description: "test"
    }
    const charge = await stripe.charges.create(body, (err, success) => {
        if (err) {
            res.status(500).json({err: "error"})
        } else {
            res.status(200).json({success: "success"})
        }
    });

})
