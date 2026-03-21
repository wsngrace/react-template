import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

function Header() {

  const { cart } = useCart();

  const [animateCart, setAnimateCart] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setAnimateCart(true);

      const timer = setTimeout(() => {
        setAnimateCart(false);
      }, 2000); // animation duration

      return () => clearTimeout(timer);
    }
  }, [cart]);

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Store Template</div>

      <nav className="flex items-center gap-4 h-16">
        <Link to="/" className="flex items-center h-full px-2 py-1 text-white hover:bg-indigo-600 rounded">
          Home
        </Link>

        <Link to="/About" className="flex items-center h-full px-3 py-1 text-white hover:bg-indigo-600 rounded">
          About
        </Link>

        <Link to="/Shop" className="flex items-center h-full px-3 py-1 text-white hover:bg-indigo-600 rounded">
          Shop
        </Link>
        <Link to="/Cart" className="p-1 text-white transition">
          <button
          
          className={`cursor-pointer relative text-2xl transition ${animateCart ? "cart-bounce text-indigo-600" : "text-white"} `}
        ><i className="fi fi-rr-shopping-cart align-middle text-lg leading-none"></i>
        <p>
          {cart.length > 0 && (
            <span
              className="
              absolute -top-2 -right-2
              bg-red-500 text-white
              text-xs font-bold
              w-5 h-5
              flex items-center justify-center
              rounded-full
              "
            >
              {cart.length}
            </span>
          )}
        </p>
        </button>
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#1e293b",
    color: "white",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#1e293b",
    color: "white",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
};

export default Header;
