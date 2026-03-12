import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {

    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        if (!stripe || !elements) return;

        setLoading(true);
        setError("");

        const card = elements.getElement(CardElement);

        if (!card) {
            setError("Card element not found");
            setLoading(false);
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: card
        });

        if (error) {
            console.log(error);
            if(error.type == "invalid_request_error") {
                const cart = JSON.parse(localStorage.getItem("cart") || "[]");
                const checkout = JSON.parse(localStorage.getItem("checkout") || "{}");

                const order = {
                customer: checkout,
                products: cart,
                createdAt: new Date().toISOString()
                };

                localStorage.setItem("orderSuccess", JSON.stringify(order));
                localStorage.removeItem("cart");
                localStorage.removeItem("checkout");
                toast.success("This is just a test payment! Payment Successful!" as string);
                navigate("/OrderSuccess");
                return
            }else{            
                setError(error.message || "Payment failed");
                setLoading(false);
                return;
            }
        }

        console.log("Payment Method:", paymentMethod);

        // send paymentMethod.id to backend API

        setLoading(false);
    }

    return (
        <section className="bg-white rounded-xl shadow p-6 ">

            <h2 className="text-lg font-semibold mb-4">
            Payment Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

            {/* Cardholder Name */}
            <input
                type="text"
                placeholder="Cardholder name"
                required
                className="w-full border rounded-lg p-3"
            />

            {/* Stripe Card Element */}
            <div className="border rounded-lg p-3">
                <CardElement
                    options={{
                        style: {
                        base: {
                            fontSize: "16px",
                            color: "#32325d",
                        }
                        }
                    }}
                />
            </div>

            {/* Error message */}
            {error && (
                <p className="text-red-500 text-sm">
                {error}
                </p>
            )}

            {/* Pay Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
                {loading ? "Processing..." : "Pay Now"}
            </button>

            </form>

        </section>
    );
}