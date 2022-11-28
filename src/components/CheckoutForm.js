import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ paymentDetails }) => {
  const [cardError, setCardError] = useState("");
  //   stripe state
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { productPrice, buyerName, buyerEmail } = paymentDetails;

  //   stripe api call
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "content-type": "application/json"},
      body: JSON.stringify({ productPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setClientSecret(data.clientSecret)
      });
  }, [productPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // block user before load data
    if (!stripe || !elements) {
      return;
    }
    // Create a card element
    const card = elements.getElement(CardElement);

    // if has no card, check here
    if (card == null) {
      return;
    }

    // has no error, go to payment
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    

    const {paymentIntent, confirmEror} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail
          },
        },
      },
    );

    if(confirmEror){
      setCardError(confirmEror.message);
      return
    }

    console.log(paymentIntent)


  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe}
          className="btn btn-primary btn-sm mt-4 "
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-lg font-semibold text-red-500">{cardError}</p>
      )}
    </div>
  );
};

export default CheckoutForm;
