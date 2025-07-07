
import { useState } from "react";
import { MapPin, Star, Calendar, Users, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const destinations = [
    {
      id: 1,
      name: "Goa",
      category: "beach",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
      description: "Golden beaches, vibrant nightlife, and Portuguese heritage",
      visitedSince: "2018",
      totalTrips: 45,
      rating: 4.8,
      reviews: [
        {
          customer: "Priya Sharma",
          rating: 5,
          comment: "Amazing beaches and perfect weather. The sunset cruise was unforgettable!"
        },
        {
          customer: "Rajesh Kumar",
          rating: 5,
          comment: "Great hospitality and well-organized itinerary. Loved the water sports!"
        }
      ]
    },
    {
      id: 2,
      name: "Manali",
      category: "mountain",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      description: "Snow-capped mountains, adventure sports, and serene valleys",
      visitedSince: "2017",
      totalTrips: 38,
      rating: 4.9,
      reviews: [
        {
          customer: "Amit Singh",
          rating: 5,
          comment: "The mountain views were breathtaking. Perfect for adventure lovers!"
        },
        {
          customer: "Sneha Patel",
          rating: 4,
          comment: "Great trekking experience and cozy accommodations in the hills."
        }
      ]
    },
    {
      id: 3,
      name: "Kerala Backwaters",
      category: "nature",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800",
      description: "Tranquil backwaters, houseboats, and lush greenery",
      visitedSince: "2019",
      totalTrips: 32,
      rating: 4.7,
      reviews: [
        {
          customer: "Kavita Reddy",
          rating: 5,
          comment: "The houseboat experience was magical. Peaceful and rejuvenating!"
        },
        {
          customer: "Arjun Nair",
          rating: 5,
          comment: "Beautiful scenery and delicious local cuisine. Highly recommended!"
        }
      ]
    },
    {
      id: 4,
      name: "Rajasthan",
      category: "heritage",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
      description: "Royal palaces, desert safaris, and rich cultural heritage",
      visitedSince: "2016",
      totalTrips: 52,
      rating: 4.8,
      reviews: [
        {
          customer: "Vikram Malhotra",
          rating: 5,
          comment: "The palace hotels were incredible. Felt like royalty throughout the trip!"
        },
        {
          customer: "Meera Joshi",
          rating: 4,
          comment: "Rich culture and history. The camel safari was an amazing experience."
        }
      ]
    },
    {
      id: 5,
      name: "Himachal Pradesh",
      category: "mountain",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800",
      description: "Pine forests, hill stations, and adventure activities",
      visitedSince: "2017",
      totalTrips: 41,
      rating: 4.6,
      reviews: [
        {
          customer: "Rohit Sharma",
          rating: 5,
          comment: "Perfect mountain getaway with excellent weather and activities."
        },
        {
          customer: "Anita Gupta",
          rating: 4,
          comment: "Beautiful landscapes and well-maintained resorts. Great for families."
        }
      ]
    },
    {
      id: 6,
      name: "Andaman Islands",
      category: "beach",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
      description: "Crystal clear waters, pristine beaches, and marine life",
      visitedSince: "2020",
      totalTrips: 18,
      rating: 4.9,
      reviews: [
        {
          customer: "Deepak Rao",
          rating: 5,
          comment: "Paradise on earth! The underwater coral reefs were spectacular."
        },
        {
          customer: "Sonia Kapoor",
          rating: 5,
          comment: "Crystal clear waters and amazing seafood. A tropical paradise!"
        }
      ]
    }
  ];

  const categories = [
    { id: "all", name: "All Destinations", icon: MapPin },
    { id: "beach", name: "Beaches", icon: Camera },
    { id: "mountain", name: "Mountains", icon: MapPin },
    { id: "nature", name: "Nature", icon: Users },
    { id: "heritage", name: "Heritage", icon: Calendar }
  ];

  const filteredDestinations = selectedCategory === "all" 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-lavender-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Destinations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the amazing places we've been exploring since Happy Holidays began. 
            Each destination tells a story of adventure, culture, and unforgettable memories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">6+</div>
              <div className="text-lg">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">226+</div>
              <div className="text-lg">Total Trips</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.8</div>
              <div className="text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-lavender-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{destination.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    {destination.name}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    {destination.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Since {destination.visitedSince}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{destination.totalTrips} trips</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Customer Reviews:</h4>
                    {destination.reviews.map((review, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            {review.customer}
                          </span>
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                          "{review.comment}"
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link to="/packages">
                      <button className="w-full bg-gradient-to-r from-purple-600 to-lavender-600 hover:from-purple-700 hover:to-lavender-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                        View Packages
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Our Journey So Far
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">2016</div>
              <div className="text-gray-600 dark:text-gray-400">Year Started</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-400">States Covered</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">226+</div>
              <div className="text-gray-600 dark:text-gray-400">Successful Trips</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
