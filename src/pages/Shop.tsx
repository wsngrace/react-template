import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import ShopFilter from "@/components/layout/ShopFilter";
import { products } from "@/data/products";

export default function Shop() {

  const [category, setCategory] = useState<string | null>(null);

  const filteredProducts = products.filter(product => {
    if (!category) return true;
    return product.category === category;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-10">
        Shop Collection
      </h1>

      <div className="grid lg:grid-cols-4 gap-10">

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <ShopFilter setCategory={setCategory} />
        </div>

        {/* Products */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>
    </div>
  );
}