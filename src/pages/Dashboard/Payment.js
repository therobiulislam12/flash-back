import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:5000/orders/${id}`).then((order) =>
      setPaymentDetails(order.data)
    );
  }, [id]);

  return (
    <section className="py-4">
      <h2 className="text-2xl font-bold">
        Please Before payment check your details
      </h2>
      <div className="border w-1/2  my-4 p-4 rounded bg-blue-200">
        {paymentDetails && (
          <>
            <p className="text-lg ">
              Product Name:{" "}
              <span className="font-bold">{paymentDetails?.productName}</span>
            </p>
            <p className="text-lg ">
              Product Price:{" "}
              <span className="font-bold">
                $ {paymentDetails?.productPrice}
              </span>
            </p>
            <p className="text-lg ">
              Seller Name:{" "}
              <span className="font-bold">{paymentDetails?.sellerName}</span>
            </p>
            <p className="text-lg ">
              Seller Email:{" "}
              <span className="font-bold">{paymentDetails?.sellerEmail}</span>
            </p>
          </>
        )}
      </div>
      <div className="w-1/2 bg-gray-100 p-4 rounded">
        <Elements stripe={stripePromise}>
          <CheckoutForm paymentDetails={paymentDetails}/>
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
