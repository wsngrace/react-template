import { useCart } from "@/context/CartContext";

export default function Cart() {

  /* for clear LocalStorage 
  localStorage.removeItem("cart")
  */
 
   
  const { cart, removeFromCart } = useCart();

  const isCartEmpty = cart.length === 0;

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-8">

      {/* Items */}
      <div className="lg:col-span-2 space-y-4">
        {isCartEmpty && (
          <h3 className="font-semibold text-sm text-red-500 mt-2">
            Your cart is empty
          </h3>
        )}
        {!isCartEmpty && cart.map((item) => (
          <div
            key={item.cartItemId}
            className="flex items-center justify-between border rounded-lg p-4 shadow-md hover:shadow-md transition"
          >
            
            {/* Left side */}
            <div className="flex items-center gap-4 ">
              
              {!isCartEmpty && (
                <><img
                src={item.image}
                className="w-16 h-16 rounded object-cover"
              />

              <div>
                <h3 className="font-semibold">{item.title}</h3>

                {item.options &&
                  Object.entries(item.options).map(([name, value]) => (
                    <p key={name} className="text-sm text-gray-500">
                      {name}: {value}
                    </p>
                  ))}

                <p className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div></>
              
            )}
            </div>

            {/* Right side */}
            <div className="text-right">
              <p className="font-bold">
                £{(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => removeFromCart(item.cartItemId)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white p-6 rounded-xl shadow h-fit">
        <h2 className="font-bold text-lg mb-4">Order Summary</h2>

        <div className="flex justify-between mb-3">
          <span>Total</span>
          <span className="font-bold">£{total}</span>
        </div>

        <a href={!isCartEmpty ? "/Checkout" : "#"} className={`block text-center py-3 rounded-lg ${ isCartEmpty ? "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none" : "bg-gray-900 text-white hover:bg-indigo-600" }`} >
          Checkout
        </a>
      </div>
    </div>
  );
}