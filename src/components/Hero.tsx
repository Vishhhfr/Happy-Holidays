
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="font-script text-4xl md:text-6xl text-yellow-300 animate-float block mb-2">
            Welcome to
          </span>
          <h1 className="font-display text-display-md md:text-display-lg font-bold text-shadow-strong animate-fade-in">
            Happy Holidays
          </h1>
          <div className="font-script text-2xl md:text-4xl text-orange-300 mt-2">
            Explorer
          </div>
        </div>
        
        <p className="font-body text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed text-shadow-soft">
          Embark on extraordinary journeys to breathtaking destinations. From majestic mountain peaks to serene ocean shores, 
          we craft personalized adventures that create memories to last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-organic bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-body font-semibold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Discover Destinations
          </button>
          <button className="btn-organic bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-body font-semibold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            View Our Packages
          </button>
        </div>
      </div>

      {/* Floating elements for organic feel */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-300/30 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange-300/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-300/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;
