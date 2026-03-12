export type ProductOption = {
  name: string;       // e.g. "Size" or "Color"
  values: string[];   // e.g. ["S", "M", "L"] or ["Red", "Blue"]
}

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  options?: ProductOption[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Minimal Sneakers",
    price: 79,
    image: "https://picsum.photos/400/400?1",
    category: "shoes",
    options: [
      {
        name: "Size",
        values: ["7","7.5", "8", "9", "9.5", "10"]
      },
      {
        name: "Color",
        values: ["Gray", "White"]
      }
    ]
  },
  {
    id: 2,
    title: "Classic Jacket",
    price: 120,
    category: "clothing",
    image: "https://picsum.photos/400/400?2",
    options: [
      { name: "Size", values: ["S", "M", "L", "XL"] }
    ]
  },
  {
    id: 3,
    title: "Long Jacket",
    price: 120,
    category: "shclothingirt",
    image: "https://picsum.photos/400/400?3",
    options: [
      { name: "Size", values: ["S", "M", "L", "XL"] }
    ]
  },
  {
    id: 4,
    title: "Urban Backpack",
    price: 59,
    category: "bags",
    image: "https://picsum.photos/400/400?4",
    options: [
      { name: "Size", values: ["15L", "20L", "25L", "30L"] }
    ]
  },
  {
    id: 5,
    title: "Modern T-shirt",
    price: 199,
    category: "clothing",
    image: "https://picsum.photos/400/400?5",
  },
  {
    id: 6,
    title: "Classic Sneakers",
    price: 79,
    image: "https://picsum.photos/400/400?6",
    category: "shoes",
    options: [
      {
        name: "Size",
        values: ["6", "7", "8", "9", "10","11","11.5","12"]
      },
      {
        name: "Color",
        values: ["Black", "Gray", "White"]
      }
    ]
  },
  {
    id: 7,
    title: "Smart Watch",
    price: 299,
    image: "https://picsum.photos/400/400?7",
    category: "accessories",
  },
]