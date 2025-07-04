
import { Link } from "react-router-dom";

const AllTrips = () => {
  const featuredTrips = [
    {
      id: 1,
      title: "Kerala Backwaters",
      description: "Cruise through serene backwaters and lush green landscapes",
      duration: "4 Days",
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Rajasthan Royal Tour",
      description: "Explore magnificent palaces and rich cultural heritage",
      duration: "8 Days",
      price: "₹35,000",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Ladakh Adventure",
      description: "High altitude desert with stunning monasteries and landscapes",
      duration: "10 Days",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const addToCart = (trip: any) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const isAlreadyInCart = existingCart.find((item: any) => item.id === trip.id);
    
    if (!isAlreadyInCart) {
      const updatedCart = [...existingCart, { ...trip, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      
      // Update cart count in header
      window.dispatchEvent(new Event('cartUpdated'));
      
      alert(`${trip.title} added to cart!`);
    } else {
      alert(`${trip.title} is already in your cart!`);
    }
  };

  return (
    <section id="packages" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Trip Packages
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our handpicked selection of amazing travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTrips.map((trip) => (
            <div key={trip.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="h-48 overflow-hidden">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{trip.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{trip.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {trip.duration}
                  </span>
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{trip.price}</span>
                </div>
                
                <button 
                  onClick={() => addToCart(trip)}
                  className="w-full bg-gradient-to-r from-purple-600 to-lavender-600 hover:from-purple-700 hover:to-lavender-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/packages">
            <button className="bg-gradient-to-r from-purple-600 to-lavender-600 hover:from-purple-700 hover:to-lavender-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
              Explore More Amazing Trip Plans
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllTrips;
