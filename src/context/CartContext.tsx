import { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
  cartItemId: string
  id: string;
  title: string;
  price: number;
  image: string;
  min: number;
  max: number;
  quantity: number;
  options ? : { [name: string]: string};
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  
  const [cart, setCart] = useState<CartItem[]>([]);

  /* Load cart from localStorage */
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      
      const normalized = parsed.map((item: any) => ({
        cartItemId: Object.values(item.options || {}).length === 0 ? item.id : item.id + "-" + Object.values(item.options || {}).join("-"),
        id: item.id,
        title: item.title,
        price: Number(item.price) || 0,
        image: item.image || "",
        min: Number(item.min) || 1,
        max: Number(item.max) || 99,
        quantity: Number(item.quantity) || 1,
        options: item.options || {}
      }));
      
      setCart(normalized);
    }
  }, []);

  /* Save cart to localStorage */
  useEffect(() => { 
    localStorage.setItem("cart", JSON.stringify(cart)); 
  }, [cart]);

  /* Add to cart */
  const addToCart = (item: CartItem) => {

    setCart(prev => {

      const existing = prev.find(p => p.cartItemId === item.cartItemId);

      if (existing) {
        return prev.map(p =>
          p.cartItemId === item.cartItemId
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }

      return [...prev, item];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    const safeQty = Number(quantity);

    if (isNaN(safeQty)) return;

    setCart(prev =>
      prev.map(item => {

        if (item.cartItemId !== cartItemId) return item;

        const newQty = Math.max(
          Number(item.min),
          Math.min(Number(item.max), safeQty)
        );

        return {
          ...item,
          quantity: newQty
        };

      })
    );

};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};