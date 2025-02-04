import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSucces, setMessageSucces] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSucces(true);
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }

    } else {
      console.log(error.message);
    }
  };

return (
    <div>
    {!messageSucces ? 
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
    
      <div className="cardInfo">
        <p className="span-toy" >Оплата картой</p>
    <CardElement />
      </div>
      
      <button className='btnSend'>Оплатить</button>
    </form>
    :
<div>
  <p className="headCart marginZero">Оплата принята</p>
  <p className="headCart marginZero">Спасибо за Ваш заказ!</p>
</div>
}
    </div>
    );
};