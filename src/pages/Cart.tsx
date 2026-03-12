import { useCart } from "@/context/CartContext";

export default function Cart() {

  /* for clear LocalStorage 
  localStorage.removeItem("cart")
  */
 
   
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-8">

      {/* Items */}
      <div className="lg:col-span-2 space-y-4">
        {cart.map(item => (
          <div
            key={item.cartItemId}
            className="flex justify-between items-start border-b pb-3 rounded-xl shadow"
          >
            <div className="flex gap-3">

                <img
                src={item.image}
                className="w-14 h-14 rounded object-cover"
                />

                <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                </p>
                </div>

            </div>
            <div className="text-left"><img src={item.image} className="w-14 h-14 rounded object-cover" /></div>
            <div className="width-100">              
              <h3 className="font-semibold">{item.title}</h3>
              {item.options && Object.entries(item.options).map(([name, value]) => (
                <div key={name}>
                  <span className="text-sm text-gray-600">
                    {name}: {value}
                  </span>
                </div>
              ))}
              
              {/* Quantity selector */}
              <div className="flex items-center gap-2 mt-2">

                <button
                  onClick={() => {
                    if (item.cartItemId && item.quantity === item.min) return;
                    updateQuantity(item.cartItemId, Number(item.quantity) - 1)
                  }}
                  className={`px-2 py-1 bg-gray-200 rounded hover:bg-gray-200 transition
                    ${item.quantity === item.min
                      ? "cursor-not-allowed text-gray-400"
                      : ""}
                  `}
                >
                  −
                </button>

                <span className="px-2">{Number(item.quantity)}</span>

                <button
                  onClick={() => {
                    if (item.cartItemId && item.quantity === item.max) return;
                    updateQuantity(item.cartItemId, Number(item.quantity) + 1);
                  }}
                  className={`px-2 py-1 bg-gray-200 rounded hover:bg-gray-200 transition
                    ${item.quantity === item.max
                      ? "cursor-not-allowed text-gray-400"
                      : ""}
                  `}
                >
                  +
                </button>

              </div>
            </div>

            <div className="text-right">
              <p className="font-bold">£{Number(item.price) * Number(item.quantity || 1)}</p>

              <button
                onClick={() => removeFromCart(item.cartItemId)}
                className="text-red-500 text-sm"
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

        <a
          href="/checkout"
          className="block text-center bg-gray-900 text-white py-3 rounded-lg hover:bg-indigo-600"
        >
          Checkout
        </a>
      </div>
    </div>
  );
}