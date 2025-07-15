
const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-sunset">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-2xl md:text-3xl text-white/90 mb-2 block">
          Stay Connected
        </span>
        <h2 className="text-display-sm md:text-display-md font-bold text-white mb-6">
          Join Our Explorer Community
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Be the first to discover exclusive destinations, insider travel tips, and special offers crafted just for adventurous souls like you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email for adventure updates"
            className="flex-1 px-6 py-4 rounded-organic text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 card-shadow"
          />
          <button className="btn-organic bg-white text-gray-900 font-semibold px-8 py-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 card-shadow">
            Join the Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
