import { useCart } from "@/context/CartContext";

export default function OrderSummary() {

    const { cart } = useCart();
    
    const subtotal = cart.reduce( (sum, item) => sum + Number(item.price) * Number(item.quantity),0 );

    const booleanVAT = true; 
    const shipping = subtotal > 50 ? 0 : 4.99;
    const total = subtotal + shipping;
    const vat = (total) * 0.2;

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="space-y-4">

            {cart.map(item => (
                <div key={item.cartItemId} className="flex justify-between">

                <div className="flex gap-3">

                    <img
                    src={item.image}
                    className="w-14 h-14 rounded object-cover"
                    />

                    <div>

                    <p className="font-medium">{item.title}</p>

                    {item.options && Object.entries(item.options).map(([name, value]) => (
                        <p
                        key={`${item.cartItemId}-${name}`}
                        className="text-xs text-gray-500"
                        >
                        {name}: {value}
                        </p>
                    ))}

                    <p className="text-xs text-gray-500">
                        Qty {item.quantity}
                    </p>

                    </div>

                </div>

                <p className="font-medium">
                    £{(item.price * item.quantity).toFixed(2)}
                </p>

                </div>
            ))}

            </div>

            <div className="border-t mt-6 pt-4 space-y-2">

            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
            </div>

            {booleanVAT && (
            <div className="flex justify-between">
                <span>VAT (included)</span>
                <span>£{vat.toFixed(2)}</span>
            </div>
            )}
            </div>
        </div>
    );
}