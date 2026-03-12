import { Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function Home() {

  const featured = products.slice(0, 6);

  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Discover Your <span className="text-indigo-600">New Style</span>
            </h1>

            <p className="text-gray-600 mb-8">
              Shop the latest fashion and accessories. Premium quality,
              modern design, and fast UK delivery.
            </p>

            <div className="flex gap-4">
              <Link
                to="/shop"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/shop"
                className="border px-6 py-3 rounded-lg hover:bg-gray-200 transition"
              >
                View Collection
              </Link>
            </div>
          </div>

          <img
            src="/images/hero.jpg"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>


      {/* CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <h2 className="text-2xl font-bold mb-8 text-center">
          Shop By Category
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { name: "Bags", image: "/images/cat-bag.jpg" },
            { name: "Shoes", image: "/images/cat-shoes.jpg" },
            { name: "Shirt", image: "/images/cat-accessories.jpg" },
            { name: "Clothing", image: "/images/cat-clothing.jpg" }
          ].map(cat => (

            <Link
              key={cat.name}
              to="/shop"
              className="group relative rounded-xl overflow-hidden"
            >

              <img
                src={cat.image}
                className="w-full h-60 object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">

                <h3 className="text-white text-lg font-semibold">
                  {cat.name}
                </h3>

              </div>

            </Link>

          ))}

        </div>
      </section>


      {/* FEATURED PRODUCTS */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex justify-between items-center mb-10">

            <h2 className="text-2xl font-bold">
              Featured Products
            </h2>

            <Link
              to="/shop"
              className="text-indigo-600 hover:underline"
            >
              View All
            </Link>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}

          </div>

        </div>

      </section>


      {/* PROMO BANNER */}
      <section className="bg-black text-white">

        <div className="max-w-7xl mx-auto px-4 py-16 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Summer Sale
          </h2>

          <p className="text-gray-300 mb-6">
            Up to 40% off selected products.
          </p>

          <Link
            to="/shop"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition"
          >
            Shop Deals
          </Link>

        </div>

      </section>


      {/* NEWSLETTER */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">

        <h2 className="text-2xl font-bold mb-4">
          Join Our Newsletter
        </h2>

        <p className="text-gray-600 mb-6">
          Get exclusive offers and product updates.
        </p>

        <div className="flex gap-3 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-lg px-4 py-3 w-72"
          />

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition">
            Subscribe
          </button>

        </div>

      </section>

    </div>
  );
}