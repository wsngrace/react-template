export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">

      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            YourStore
          </h2>

          <p className="text-gray-600 text-sm">
            Your trusted online store for quality products and
            reliable service.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/Shop" className="hover:text-black">
                All Products
              </a>
            </li>

            <li>
              <a href="/Cart" className="hover:text-black">
                Cart
              </a>
            </li>

            <li>
              <a href="/Checkout" className="hover:text-black">
                Checkout
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold mb-4">Policies</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/ShippingPolicy" className="hover:text-black">
                Shipping Policy
              </a>
            </li>

            <li>
              <a href="/Return" className="hover:text-black">
                Returns & Refunds
              </a>
            </li>

            <li>
              <a href="/Private" className="hover:text-black">
                Private & Confidential
              </a>
            </li>

            <li>
              <a href="/Contact" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>Email: support@yourstore.com</li>
            <li>Phone: +44 1234 567890</li>
            <li>United Kingdom</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} YourStore. All rights reserved.
      </div>

    </footer>
  );
}