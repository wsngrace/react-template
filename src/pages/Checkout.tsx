import { useState } from "react";
import toast from "react-hot-toast";
import OrderSummary from "@/components/checkout/OrderSummary";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import { useNavigate } from "react-router-dom";




export default function Checkout() {

    const navigate = useNavigate();

    /*const [popup, setPopup] = useState({
        show: false,
        message: "",
        type: "error"
    });*/
    
    const [form, setForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        county: "",
        postcode: "",
        phone: ""
    });

    const ukPostcodeRegex = /^([A-Z]{1,2}[0-9][0-9A-Z]?)\s?[0-9][A-Z]{2}$/i;
    
    const [errors, setErrors] = useState<any>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function validate() {

        const newErrors: any = {};

        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!form.firstName) {
            newErrors.firstName = "First name is required";
        }

        if (!form.lastName) {
            newErrors.lastName = "Last name is required";
        }

        if (!form.address1) {
            newErrors.address1 = "Address is required";
        }

        if (!form.city) {
            newErrors.city = "City is required";
        }

        if (!form.postcode) {
            newErrors.postcode = "Postcode is required";
        } else if (!ukPostcodeRegex.test(form.postcode)) {
            newErrors.postcode = "Invalid postcode format";
        }

        if (!form.phone) {
            newErrors.phone = "Phone number is required";
        }

        setErrors(newErrors);

        return newErrors;
        }

    function handleSubmit(e: React.FormEvent) {

        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {

            const firstError = Object.values(validationErrors)[0];

            toast.error(firstError as string);

            return;
        }

        // Save checkout data
        localStorage.setItem("checkout", JSON.stringify(form));

        toast.success("Checkout successful");

        navigate("/payment");
    }

    return (
        <Elements stripe={stripePromise}>
            
            <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-10">
                
                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Contact */}
                        <section className="bg-white p-6 rounded-xl shadow">
                            <div className="border-b-4 border-indigo-500 text-lg text-center font-semibold mb-4"><h1>Guest Checkout</h1></div>
                            <h2 className="text-lg font-semibold mb-4">Guest Email</h2>

                            <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" className={`w-full border rounded-lg p-3 ${errors.email ? "border-red-500" :"" }`} />

                        </section>

                        {/* Shipping Address */}
                        <section className="bg-white p-6 rounded-xl shadow">
                            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>

                            <div className="grid grid-cols-2 gap-4">

                                <input name="firstName" placeholder="First Name" onChange={handleChange} className={`border rounded-lg p-3 w-full ${errors.firstName ? "border-red-500" :"" }`} />
                                
                                <input name="lastName" placeholder="Last Name" onChange={handleChange} className={`border rounded-lg p-3 w-full ${errors.lastName ? "border-red-500" :"" }`} />

                                <input name="address1" placeholder="Address Line 1" onChange={handleChange} className={`border rounded-lg p-3 col-span-2 w-full ${errors.address1 ? "border-red-500" :"" }`}/>

                                <input name="address2" placeholder="Address Line 2 (Optional)" className="border rounded-lg p-3 col-span-2 w-full" />
                                
                                <input name="city" placeholder="Town / City" onChange={handleChange} className={`border rounded-lg p-3 w-full ${errors.city ? "border-red-500" :"" }`} />

                                <input name="country" placeholder="Country (Optional)" className="border rounded-lg p-3 w-full" />

                                <input name="postcode" placeholder="Postcode (e.g. SW1A 1AA)" onChange={handleChange} className={`border rounded-lg p-3 w-full ${errors.postcode ? "border-red-500" :"" }`} />

                                <select className="border rounded-lg p-3 w-full">
                                    <option>United Kingdom</option>
                                </select>

                                <input name="phone" placeholder="Phone (+44)" onChange={handleChange} className={`border rounded-lg p-3 col-span-2 w-full ${errors.phone ? "border-red-500" :"" }`}/>

                                <button type="submit" className="bg-black text-white p-3 w-full rounded" >
                                    Place Order
                                </button>

                            </div>
                        </section>
                    </form>
                    
                </div>

                {/* RIGHT SIDE - ORDER SUMMARY */}
                <div className="bg-white p-6 rounded-xl shadow h-fit">

                    <OrderSummary />

                </div>

            </div>
        </Elements>
        
    );
        
}