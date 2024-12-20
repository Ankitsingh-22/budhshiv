export default function Checkout() {
  return (
    <main className=" bg-slate-100  py-16 text-gray-800">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Checkout</h1>
        <div className="max-w-3xl mx-auto bg-slate-300 shadow-xl rounded-lg p-10">
          <form>
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Billing Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block text-gray-600 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 font-medium mb-2">Address</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block text-gray-600 font-medium mb-2">City</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4"
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">Postal Code</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4"
                  placeholder="Enter your postal code"
                  required
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Payment Information</h2>
            <div className="mb-6">
              <label className="block text-gray-600 font-medium mb-2">Card Number</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-6">
              <div>
                <label className="block text-gray-600 font-medium mb-2">Expiration Date</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">CVV</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4"
                  placeholder="123"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-500 transition"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
