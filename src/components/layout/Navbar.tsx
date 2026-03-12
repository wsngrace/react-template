import { useState } from "react";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  const cart = [];

  return (
    <>
      <nav className="flex justify-between p-4 border-b">
        <h1 className="font-bold text-xl">Shop</h1>

        <button
          onClick={() => setCartOpen(true)}
          className="relative"
        >
          🛒
        </button>
      </nav>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
      />
    </>
  );
}