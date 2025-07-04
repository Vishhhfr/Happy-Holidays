
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
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from real travelers who trusted us with their dream vacations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
