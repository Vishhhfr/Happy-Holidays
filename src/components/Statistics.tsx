
const Statistics = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Satisfied Customers",
      icon: "😊",
    },
    {
      number: "15+",
      label: "Years of Experience",
      icon: "🏆",
    },
    {
      number: "4.8/5",
      label: "Customer Rating",
      icon: "⭐",
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      icon: "❤️",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
