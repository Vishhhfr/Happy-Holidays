import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Utensils, MapPin, Calendar } from "lucide-react";
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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foodIncluded: true,
      guideAvailable: true,
      groupSize: "8-12 people",
      accommodation: "3-star hotels",
      transportation: "AC Bus",
      activities: ["Paragliding", "River Rafting", "Trekking"]
    },
    {
      id: 2,
      title: "Goa Beach Paradise",
      description: "Relax on pristine beaches with vibrant nightlife and rich Portuguese culture",
      duration: "5 Days", 
      price: "₹18,000",
      gradient: "from-orange-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foodIncluded: true,
      guideAvailable: false,
      groupSize: "6-10 people",
      accommodation: "Beach resort",
      transportation: "Flight + Taxi",
      activities: ["Beach Sports", "Water Scooter", "Dolphin Watching"]
    },
    {
      id: 3,
      title: "Himachal Hill Station",
      description: "Discover serene hill stations with breathtaking valley views and peaceful mountain air",
      duration: "6 Days",
      price: "₹22,000",
      gradient: "from-green-400 to-blue-500",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foodIncluded: true,
      guideAvailable: true,
      groupSize: "10-15 people",
      accommodation: "Hill station hotels",
      transportation: "Volvo Bus",
      activities: ["Nature Walks", "Photography", "Local Sightseeing"]
    },
    {
      id: 4,
      title: "Kerala Backwaters",
      description: "Cruise through peaceful backwaters and experience God's own country",
      duration: "8 Days",
      price: "₹28,000",
      gradient: "from-teal-400 to-green-500",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foodIncluded: true,
      guideAvailable: true,
      groupSize: "4-8 people",
      accommodation: "Houseboat + Resort",
      transportation: "Train + Bus",
      activities: ["Houseboat Cruise", "Spice Garden Visit", "Cultural Shows"]
    },
    {
      id: 5,
      title: "Rajasthan Royal Tour",
      description: "Explore majestic palaces and desert landscapes in the land of kings",
      duration: "10 Days",
      price: "₹35,000",
      gradient: "from-yellow-400 to-red-500",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foodIncluded: true,
      guideAvailable: true,
      groupSize: "12-20 people",
      accommodation: "Heritage hotels",
      transportation: "AC Coach",
      activities: ["Palace Tours", "Camel Safari", "Folk Dance Shows"]
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
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-lavender-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-purple-600 dark:text-purple-400 mb-2 block">
            Handpicked for You
          </span>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-gray-900 dark:text-white mb-6">
            Featured Destinations
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover extraordinary places that offer the perfect blend of adventure, relaxation, and cultural immersion.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Better positioning */}
          <Button
            onClick={prevTrip}
            variant="outline"
            size="icon"
            className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 border-purple-200 dark:border-gray-600 card-shadow hover:card-shadow-hover transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextTrip}
            variant="outline"
            size="icon"
            className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 border-purple-200 dark:border-gray-600 card-shadow hover:card-shadow-hover transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Trip Card - Improved spacing */}
          <div className="card-organic bg-white dark:bg-gray-800 card-shadow hover:card-shadow-hover border border-purple-100 dark:border-gray-700 transition-all duration-500 mx-16 md:mx-20 overflow-hidden">
            {/* Featured Image */}
            <div className="h-80 overflow-hidden relative">
              <img 
                src={currentTrip.image}
                alt={currentTrip.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="font-body text-sm font-semibold text-gray-800 dark:text-gray-200">{currentTrip.duration}</span>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">{currentTrip.title}</h3>
              <p className="font-body text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">{currentTrip.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Utensils className="h-5 w-5 text-purple-600" />
                  <span className="font-body text-sm text-gray-600 dark:text-gray-300">
                    {currentTrip.foodIncluded ? "Food Included" : "Food Not Included"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span className="font-body text-sm text-gray-600 dark:text-gray-300">
                    {currentTrip.guideAvailable ? "Guide Available" : "Self Guided"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="font-body text-sm text-gray-600 dark:text-gray-300">
                    {currentTrip.groupSize}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <span className="font-body text-sm text-gray-600 dark:text-gray-300">
                    {currentTrip.accommodation}
                  </span>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <p className="font-body text-sm text-gray-600 dark:text-gray-300">
                  <strong className="font-semibold">Transportation:</strong> {currentTrip.transportation}
                </p>
                <p className="font-body text-sm text-gray-600 dark:text-gray-300">
                  <strong className="font-semibold">Activities:</strong> {currentTrip.activities.join(", ")}
                </p>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <span className="font-display text-4xl font-bold gradient-text">{currentTrip.price}</span>
              </div>
              
              <Button 
                onClick={() => addToCart(currentTrip)}
                className="btn-organic w-full bg-gradient-ocean hover:opacity-90 text-white font-body font-semibold py-4 px-6 text-lg transition-all duration-300 transform hover:scale-105 card-shadow"
              >
                Add to Adventure Cart
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {featuredTrips.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTripIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTripIndex
                    ? "bg-gradient-ocean w-10"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
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
