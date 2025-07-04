
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedTrips = () => {
  const [currentTripIndex, setCurrentTripIndex] = useState(0);

  const featuredTrips = [
    {
      id: 1,
      title: "Manali Adventure",
      description: "Experience the beauty of snow-capped mountains and adventure sports in the heart of Himachal Pradesh",
      duration: "7 Days",
      price: "₹25,000",
      gradient: "from-blue-400 to-purple-500",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Goa Beach Paradise",
      description: "Relax on pristine beaches with vibrant nightlife and rich Portuguese culture",
      duration: "5 Days",
      price: "₹18,000",
      gradient: "from-orange-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Himachal Hill Station",
      description: "Discover serene hill stations with breathtaking valley views and peaceful mountain air",
      duration: "6 Days",
      price: "₹22,000",
      gradient: "from-green-400 to-blue-500",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Kerala Backwaters",
      description: "Cruise through peaceful backwaters and experience God's own country",
      duration: "8 Days",
      price: "₹28,000",
      gradient: "from-teal-400 to-green-500",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Rajasthan Royal Tour",
      description: "Explore majestic palaces and desert landscapes in the land of kings",
      duration: "10 Days",
      price: "₹35,000",
      gradient: "from-yellow-400 to-red-500",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const nextTrip = () => {
    setCurrentTripIndex((prev) => (prev + 1) % featuredTrips.length);
  };

  const prevTrip = () => {
    setCurrentTripIndex((prev) => (prev - 1 + featuredTrips.length) % featuredTrips.length);
  };

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

  const currentTrip = featuredTrips[currentTripIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-lavender-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Trip Plans
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Handpicked destinations that offer the perfect blend of adventure, relaxation, and cultural experiences.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            onClick={prevTrip}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 border-purple-200 dark:border-gray-600"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextTrip}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 border-purple-200 dark:border-gray-600"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Trip Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-purple-100 dark:border-gray-700 transition-all duration-500">
            {/* Featured Image */}
            <div className="h-80 overflow-hidden relative">
              <img 
                src={currentTrip.image}
                alt={currentTrip.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{currentTrip.duration}</span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{currentTrip.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">{currentTrip.description}</p>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-lavender-600 bg-clip-text text-transparent">{currentTrip.price}</span>
              </div>
              
              <Button 
                onClick={() => addToCart(currentTrip)}
                className="w-full bg-gradient-to-r from-purple-600 to-lavender-600 hover:from-purple-700 hover:to-lavender-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredTrips.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTripIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTripIndex
                    ? "bg-gradient-to-r from-purple-600 to-lavender-600 w-8"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
