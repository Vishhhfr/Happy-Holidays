
const FeaturedTrips = () => {
  const featuredTrips = [
    {
      id: 1,
      title: "Manali Adventure",
      description: "Experience the beauty of snow-capped mountains and adventure sports",
      duration: "7 Days",
      price: "₹25,000",
    },
    {
      id: 2,
      title: "Goa Beach Paradise",
      description: "Relax on pristine beaches with vibrant nightlife and culture",
      duration: "5 Days",
      price: "₹18,000",
    },
    {
      id: 3,
      title: "Himachal Hill Station",
      description: "Discover serene hill stations with breathtaking valley views",
      duration: "6 Days",
      price: "₹22,000",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Trip Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations that offer the perfect blend of adventure, relaxation, and cultural experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTrips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Placeholder for poster image */}
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏔️</div>
                  <p className="text-lg font-semibold">Poster Space</p>
                  <p className="text-sm opacity-80">Image will be added here</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.title}</h3>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Duration: {trip.duration}</span>
                  <span className="text-2xl font-bold text-blue-600">{trip.price}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
