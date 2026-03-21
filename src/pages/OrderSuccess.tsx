import { useEffect, useState } from "react";

export default function OrderSuccess() {

  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("orderSuccess");
    localStorage.removeItem("orderSuccess");
    localStorage.removeItem("cart");
    localStorage.removeItem("checkout");

    if (data) setOrder(JSON.parse(data));
  }, []);

  if (!order) return (
    <div className="relative text-center">
      <p className="p-6 text-center">No order found</p>
      <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition group" >
          <i className="fi fi-br-arrow-left transition-transform duration-200 group-hover:-translate-x-1"></i>
          <span className="border-b border-transparent group-hover:border-indigo-600">
              Back to homepage
          </span>
      </a>
    </div>
  )
  

  const { customer, products } = order;

  const subtotal = products.reduce((sum: number, p: any) => sum + Number(p.price) * Number(p.quantity), 0);

  const booleanVAT = true; 
  const shipping = subtotal > 50 ? 0 : 4.99;
  const total = subtotal + shipping;
  const vat = (total) * 0.2;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">

      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Order Successful 🎉
        </h1>
        <p className="text-gray-500 mt-2">
          Thank you for your purchase
        </p>
      </div>

      {/* Customer Info */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <p><b>Email:</b> {customer.email}</p>
          <p><b>Name:</b> {customer.firstName} {customer.lastName}</p>
          <p><b>Phone:</b> {customer.phone}</p>
          <p><b>City:</b> {customer.city}</p>
          <p><b>Postcode:</b> {customer.postcode}</p>
          <p className="col-span-2">
            <b>Address:</b> {customer.address1} {customer.address2}
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Products</h2>

        <div className="relative w-full space-y-4">

          {products.map((item: any) => (
            <div
              key={item.cartItemId}
              className="flex justify-between items-start pb-3 rounded-xl"
            >

              <div className="flex gap-3">
                <img
                  src={item.image}
                  className="w-14 h-14 rounded object-cover"
                />

                <div>
                  <p className="font-medium">{item.title}</p>

                  <div className="text-sm text-gray-500">
                    {item.options &&
                      Object.entries(item.options).map(([name, value]) => (
                        <div key={name}>
                          {name}: {String(value)}
                        </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

              </div>

              <p className="font-medium">
                £{(item.price * item.quantity).toFixed(2)}
              </p>

            </div>
          ))}

        </div>
        <div className="border-t w-full mt-6 pt-4 space-y-2">
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
      <div className="text-center">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition group" >
          <i className="fi fi-br-arrow-left transition-transform duration-200 group-hover:-translate-x-1"></i>
          <span className="border-b border-transparent group-hover:border-indigo-600">
            Back to homepage
          </span>
        </a>
      </div>
    </div>
  );
}