import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51QlvMiBB1TOOIniEnJqLMcttcTcehmzrt5joRx3vpp8ossDIu2xqpZ6lZBboTELZXNSdLuUQ0O3OuisNznVpM4h800YzGEyYqc";


const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;