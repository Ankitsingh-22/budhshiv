import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Budhshiv | Home</title>
        <meta name="description" content="Discover unique handcrafted brass products and artifacts." />
      </Head>
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="/" className="text-3xl font-bold tracking-wide">
            Budhshiv
          </a>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#about" className="hover:text-blue-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-blue-500 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://budhshiv.com/cdn/shop/files/IMG-0018-15_d51b73be-a2af-41b4-bc2a-90f14a46a8c1.jpg?v=1729309683&width=1800')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Handcrafted Brass Artifacts
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Experience the finest craftsmanship with our exclusive range of brass statues, lamps, and decor pieces.
          </p>
          <a
            href="/products"
            className="inline-block px-3 py-3 text-lg  font-bold bg-transparent hover:bg-blue-500 rounded-3xl border-[2px] border-white shadow-lg transition"
          >
            Explore Our Collection
          </a>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">About Budhshiv</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            At Budhshiv, we celebrate the timeless beauty of Indian art through our exquisite range of handcrafted brass
            products. Each piece is a tribute to the rich heritage of traditional craftsmanship, designed to elevate your
            spaces.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Budhshiv. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
