
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai", 
      text: "Amazing experience with Happy Holidays! The Goa trip was perfectly planned and executed. Highly recommended!",
      rating: 5,
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "The Manali adventure package exceeded our expectations. Great service and unforgettable memories!",
      rating: 5,
      avatar: "RK"
    },
    {
      id: 3,
      name: "Sneha Patel",
      location: "Ahmedabad",
      text: "Professional service, reasonable prices, and fantastic destinations. Will definitely book again!",
      rating: 4,
      avatar: "SP"
    },
    {
      id: 4,
      name: "Amit Singh",
      location: "Bangalore",
      text: "The Kerala backwaters trip was magical. Thank you Happy Holidays for such a wonderful experience!",
      rating: 5,
      avatar: "AS"
    },
    {
      id: 5,
      name: "Kavita Reddy",
      location: "Hyderabad",
      text: "Excellent customer service and well-organized itinerary. The Rajasthan tour was absolutely spectacular!",
      rating: 5,
      avatar: "KR"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}>
        ★
      </span>
    ));
  };

  const getCurrentTestimonials = () => {
    const current = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      current.push(testimonials[index]);
    }
    return current;
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real experiences from real travelers who trusted us with their dream vacations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {getCurrentTestimonials().map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 transform animate-fade-in border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-lavender-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-body font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="font-body text-gray-600 dark:text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="font-body text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 2) === index
                  ? 'bg-purple-600 dark:bg-purple-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
