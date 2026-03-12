type Props = {
  setCategory: (category: string | null) => void;
};

export default function ShopFilter({ setCategory }: Props) {

  return (
    <div className="space-y-4">

      <h3 className="font-semibold">Category</h3>

      <button
        onClick={() => setCategory(null)}
        className="block text-left hover:text-indigo-600"
      >
        All
      </button>

      <button
        onClick={() => setCategory("bags")}
        className="block text-left hover:text-indigo-600"
      >
        Bags
      </button>

      <button
        onClick={() => setCategory("shoes")}
        className="block text-left hover:text-indigo-600"
      >
        Shoes
      </button>

      <button
        onClick={() => setCategory("clothing")}
        className="block text-left hover:text-indigo-600"
      >
        Clothing
      </button>

      <button
        onClick={() => setCategory("accessories")}
        className="block text-left hover:text-indigo-600"
      >
        Accessories
      </button>

    </div>
  );
}