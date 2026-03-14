import { useState } from "react";
import type { Product } from "@/data/products";
import VariantSelector from "@/components/product/VariantSelector";
import QuantitySelector from "@/components/cart/QuantitySelector";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {

    const [quantity, setQuantity] = useState(1);

    const [added, setAdded] = useState(false);

    const { addToCart } = useCart();
    
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});


    const allSelected = !product.options || product.options.length === 0 ? true : product.options.every(option => selectedOptions[option.name]);
    
    

    const handleAddToCart  = (product, quantity, selectedOptions) => {
        if (!allSelected) return;

        const cartItemId = Object.values(selectedOptions || {}).length === 0 ? product.id : product.id + "-" + Object.values(selectedOptions || {}).join("-");
        
        addToCart({
            cartItemId: cartItemId,
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            min: (product.min) ? product.min : 1,
            max: (product.max) ? product.max : 99,
            quantity: quantity || 1,
            options: selectedOptions
        });

        console.log("Add to cart:", product, quantity, selectedOptions);

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        }, 1500);
    };

    return (
        <div className="group h-full
            flex flex-col
            bg-white
            rounded-xl
            overflow-hidden
            shadow-sm
            hover:scale-105
            transition-all duration-300
            rounded-2xl
            shadow-lg hover:shadow-2xl
        ">
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="relative p-4 flex flex-col h-full">

            {/* Content that can grow */}
            <div className="flex-1">

                <h3 className="font-semibold text-gray-800">
                {product.title}
                </h3>

                <p className="text-indigo-600 font-bold mt-2">
                £{(product.price).toFixed(2)}
                </p>
                
                {/* Options */}
                <VariantSelector
                options={product.options}
                selected={selectedOptions}
                onChange={setSelectedOptions}
                />

                {/*<div className="mt-3">}
                {product.options?.map(option => (
                    <div key={option.name} className="mt-3">
                    <label className="block text-sm font-medium text-gray-700">
                        {option.name}
                    </label>


                    <div className="flex gap-2 mt-1 flex-wrap">
                        {option.values.map(value => (
                        <button
                            key={value}
                            type="button"
                            className={`px-3 py-1 border rounded-md text-sm transition
                            ${
                            selectedOptions[option.name] === value
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-100 text-gray-700"
                            }`}
                            onClick={() =>
                            handleOptionChange(option.name, value)
                            }
                        >
                            {value}
                        </button>
                        ))}
                    </div>
                    </div>
                ))}
                </div>*/}

            </div>

            {/* Quantity */}
            <QuantitySelector
            value={quantity} min={(product.min ?? 1)} max={(product.max ?? 99)}
            onChange={setQuantity}
            />

            {/* Button always bottom */}
            <button  onClick={function(){handleAddToCart(product, quantity, selectedOptions); } } className={`
                mt-4 w-full
                bg-gray-900 text-white
                py-2 rounded-lg
                hover:bg-indigo-600
                transition
                cursor-pointer
                ${!allSelected
                    ? "disabled bg-gray-300 text-gray-500 cursor-not-allowed"
                    : added
                    ? "bg-green-600 text-white scale-105"
                    : "bg-gray-900 text-white hover:bg-indigo-600 hover:scale-105"
                }
                `}
            >
                {added ? "Added ✓" : "Add to Cart"}
            </button>

            </div>
        </div>
    )
}