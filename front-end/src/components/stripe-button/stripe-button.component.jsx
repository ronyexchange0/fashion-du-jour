import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

import fashioDuJour from "../../assets/fashioDuJour.svg"
import "./stripe-button.style.scss";

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51I72OjKG0ifR7nrtAI3jTkUtJ0x2KcmAXpK7Imx1FwjmSerMwLLAvfPwFWYpBCsQsXMS0k4DtzGOa8RTRIn2byLI00GrIJmOsA";
    
    const onToken = async (token) => {
        
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const data = await axios.post("http://localhost:5000/api/payment/", 
            {
                token,
                amount: priceForStripe
            },
            config)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <StripeCheckout
        label="Checkout"
        name="Fashion Du Jour" 
        description={`Your total is ${price}`}
        image={fashioDuJour}
        ComponentClass="div"
        panelLabel="Pay Mow"
        amount={priceForStripe}
        shippingAddress
        billingAddress
        token={onToken}
        stripeKey={publishableKey} 
        />
        
    )
}

export default StripeButton
