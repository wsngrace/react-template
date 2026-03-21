import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import PaymentForm from "@/components/checkout/PaymentForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Payment() {

  const navigate = useNavigate();

  const checkoutData = JSON.parse(localStorage.getItem("checkout") || "{}");

  useEffect(() => {
    if (!checkoutData.email) {
      navigate("/Checkout");
    }
  }, [checkoutData, navigate]);

  if (!checkoutData.email) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center">

        <h3 className="font-semibold text-sm text-red-500 mb-6">
          Checkout information missing
        </h3>

        <a
          href="/Checkout"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition group"
        >
          ← Back to Checkout
        </a>

      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-4xl mx-auto p-6">

        <h1 className="text-2xl font-semibold mb-6">
          Payment
        </h1>

        <PaymentForm />

      </div>
    </Elements>
  );
}