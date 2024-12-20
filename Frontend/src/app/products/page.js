import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Brass Large Deep Lakshmi Pavaai Vilakku Statue",
    price: "₹292,500.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-3381_1260x.jpg?v=1733400091",
    imageAlt: "Brass Large Deep Lakshmi Pavaai Vilakku Statue",
  },
  {
    id: 2,
    name: "Brass Fine Quality Krishna Statue",
    price: "₹14,850.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-2841.jpg?v=1731504872",
    imageAlt: "Brass Fine Quality Krishna Statue",
  },
  {
    id: 3,
    name: "Brass Nataraja Dancing Shiva Statue",
    price: "₹98,500.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-2851.jpg?v=1733500091",
    imageAlt: "Brass Nataraja Dancing Shiva Statue",
  },
  {
    id: 4,
    name: "Antique Brass Buddha Statue",
    price: "₹78,000.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-3221.jpg?v=1736500091",
    imageAlt: "Antique Brass Buddha Statue",
  },
  {
    id: 5,
    name: "Traditional Brass Oil Lamp",
    price: "₹22,500.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-2901.jpg?v=1738500091",
    imageAlt: "Traditional Brass Oil Lamp",
  },
  {
    id: 6,
    name: "Handcrafted Brass Ganesha Statue",
    price: "₹32,000.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-3011.jpg?v=1739500091",
    imageAlt: "Handcrafted Brass Ganesha Statue",
  },
  {
    id: 7,
    name: "Brass Saraswati Idol with Veena",
    price: "₹64,500.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-3411.jpg?v=1742500091",
    imageAlt: "Brass Saraswati Idol with Veena",
  },
  {
    id: 8,
    name: "Elegant Brass Hanuman Statue",
    price: "₹85,000.00",
    imageSrc: "https://budhshiv.com/cdn/shop/files/IMG-3511.jpg?v=1743500091",
    imageAlt: "Elegant Brass Hanuman Statue",
  },
];

export default function Products() {
  return (
    <main className="bg-gray-50 py-10 text-black">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Explore Our Premium Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
