import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import PaymentForm from "@/components/checkout/PaymentForm";
import { useNavigate } from "react-router-dom";

export default function Payment() {

    const navigate = useNavigate();

    const checkoutData = JSON.parse(localStorage.getItem("checkout") || "{}");

    console.log(checkoutData);

    if (!checkoutData.email) {
        navigate("/checkout");
    }

    return (
        <Elements stripe={stripePromise}>
        <div className="max-w-4xl mx-auto p-6">

            <h1 className="text-2xl font-semibold mb-6">Payment</h1>

            <PaymentForm />

        </div>
        </Elements>
    );
}