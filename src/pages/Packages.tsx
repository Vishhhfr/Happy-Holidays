import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Utensils, MapPin, Calendar, Car, Star } from "lucide-react";

const Packages = () => {
  const allTrips = [
    {
      id: 1,
      title: "Kerala Backwaters",
      description: "Cruise through serene backwaters and lush green landscapes with traditional houseboats",
      duration: "4 Days",
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foodIncluded: true,
      guideAvailable: true,
      groupSize: "4-8 people",
      accommodation: "Houseboat + Resort",
      transportation: "Train + Bus",
      activities: ["Houseboat Cruise", "Spice Garden Visit", "Cultural Shows"],
      rating: 4.8
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
    },
    {
      id: 4,
      title: "Manali Adventure",
      description: "Experience the beauty of snow-capped mountains and adventure sports",
      duration: "7 Days",
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Goa Beach Paradise",
      description: "Relax on pristine beaches with vibrant nightlife and rich Portuguese culture",
      duration: "5 Days",
      price: "₹18,000",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Himachal Hill Station",
      description: "Discover serene hill stations with breathtaking valley views",
      duration: "6 Days",
      price: "₹22,000",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Kashmir Paradise",
      description: "Heaven on earth with beautiful gardens, lakes, and houseboats",
      duration: "9 Days",
      price: "₹32,000",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Andaman Island Getaway",
      description: "Crystal clear waters, white sandy beaches, and coral reefs",
      duration: "6 Days",
      price: "₹28,000",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Uttarakhand Spiritual Journey",
      description: "Visit sacred temples and experience spiritual tranquility",
      duration: "8 Days",
      price: "₹24,000",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      title: "Tamil Nadu Temple Tour",
      description: "Explore ancient temples and rich cultural heritage",
      duration: "7 Days",
      price: "₹21,000",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      title: "Northeast Explorer",
      description: "Discover the unexplored beauty of Seven Sister States",
      duration: "12 Days",
      price: "₹38,000",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      title: "Western Ghats Wildlife Safari",
      description: "Encounter diverse wildlife in lush green forests",
      duration: "5 Days",
      price: "₹19,000",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              All Trip Packages
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our complete collection of amazing travel experiences and find your perfect adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTrips.map((trip) => (
              <div key={trip.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{trip.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{trip.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{trip.description}</p>
                  
                  {/* Trip Details Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <Utensils className="h-3 w-3 text-purple-600" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {trip.foodIncluded ? "Food Included" : "Food Extra"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3 text-purple-600" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {trip.guideAvailable ? "Guide Available" : "Self Guided"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3 text-purple-600" />
                      <span className="text-gray-600 dark:text-gray-300">{trip.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-purple-600" />
                      <span className="text-gray-600 dark:text-gray-300">{trip.accommodation}</span>
                    </div>
                  </div>

                  <div className="mb-4 text-xs">
                    <div className="flex items-center space-x-1 mb-1">
                      <Car className="h-3 w-3 text-purple-600" />
                      <span className="text-gray-600 dark:text-gray-300">{trip.transportation}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Activities:</strong> {trip.activities.join(", ")}
                    </p>
                  </div>
                  
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Packages;
