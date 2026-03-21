export default function ShippingPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-6">
        Shipping Policy
      </h1>

      <p className="text-gray-600 mb-8">
        Thank you for shopping with us. This page explains our shipping
        process, delivery times, and important information about orders.
      </p>

      <div className="space-y-8 text-gray-700">

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Processing Time
          </h2>
          <p>
            All orders are processed within <strong>1–2 business days</strong>.
            Orders are not shipped or delivered on weekends or holidays.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Shipping Time
          </h2>
          <p>
            Estimated delivery times depend on your location:
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>United Kingdom: 2–4 business days</li>
            <li>Europe: 5–7 business days</li>
            <li>International: 7–14 business days</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Shipping Costs
          </h2>
          <p>
            Shipping costs are calculated at checkout based on the
            delivery location and selected shipping method.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Order Tracking
          </h2>
          <p>
            Once your order has shipped, you will receive a confirmation
            email with a tracking number so you can monitor your delivery.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Delays
          </h2>
          <p>
            Occasionally delivery delays may occur due to weather,
            customs processing, or courier issues beyond our control.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions about shipping, please contact us:
          </p>

          <p className="mt-2 font-medium">
            Email: support@yourstore.com
          </p>

        </section>

      </div>

    </div>
  );
}