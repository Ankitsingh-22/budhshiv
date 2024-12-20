import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Brass Large Deep Lakshmi Pavaai Vilakku Statue",
    price: "₹292,500.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-3381_1260x.jpg?v=1733400091",
    imageAlt: "Brass Large Deep Lakshmi Pavaai Vilakku Statue",
    description: "A stunning handcrafted brass Lakshmi Pavaai Vilakku statue for home décor and religious rituals.",
  },
  {
    id: 2,
    name: "Brass Fine Quality Krishna Statue",
    price: "₹14,850.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-2841.jpg?v=1731504872",
    imageAlt: "Brass Fine Quality Krishna Statue",
    description: "Elegant brass Krishna statue with intricate details, perfect for pooja rooms and gifting.",
  },
  // Add other products here...
];

export default function ProductDetail({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-gray-50 py-10 text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-blue-600 mb-4">{product.price}</p>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-400 transition">
                Add to Cart
              </button>
              <a
                href="/checkout"
                className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-400 transition"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
