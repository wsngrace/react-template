export default function Returns() {

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-6">
        Returns & Refund Policy
      </h1>

      <p className="text-gray-600 mb-8">
        We want you to be completely satisfied with your purchase.
        If you are not happy with your order, you may return the item
        according to the policy below.
      </p>

      <div className="space-y-8 text-gray-700">

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Return Period
          </h2>
          <p>
            Items can be returned within <strong>30 days</strong> of the
            delivery date. After this period we unfortunately cannot
            offer a refund or exchange.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Return Conditions
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Item must be unused and in original condition</li>
            <li>Original packaging must be included</li>
            <li>Proof of purchase or order number is required</li>
            <li>Items damaged by misuse cannot be refunded</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Refunds
          </h2>
          <p>
            Once we receive and inspect your return, we will notify you
            of the approval or rejection of your refund. If approved,
            your refund will be processed to your original payment
            method within <strong>5–10 business days</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Exchanges
          </h2>
          <p>
            We only replace items if they are defective or damaged.
            If you need to exchange an item for the same product,
            please contact our support team.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Return Shipping
          </h2>
          <p>
            Customers are responsible for return shipping costs unless
            the item is defective or we made an error with the order.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions about returns, please contact us:
          </p>

          <p className="mt-2 font-medium">
            Email: support@yourstore.com
          </p>

        </section>

      </div>

    </div>
  );
}