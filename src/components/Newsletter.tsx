
const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with Our Latest Offers
        </h2>
        <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about exclusive deals, new destinations, and travel tips.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
