
const Statistics = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Satisfied Travelers",
      icon: "😊",
    },
    {
      number: "15+",
      label: "Years of Adventure",
      icon: "🏆",
    },
    {
      number: "4.8/5",
      label: "Explorer Rating",
      icon: "⭐",
    },
    {
      number: "98%",
      label: "Memorable Journeys",
      icon: "❤️",
    },
  ];

  return (
    <section className="py-20 bg-gradient-ocean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-yellow-300 mb-2 block">
            Our Journey So Far
          </span>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-white mb-6">
            Adventure Milestones
          </h2>
          <p className="font-body text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Numbers that tell the story of our dedication to creating extraordinary travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="card-organic bg-white/10 backdrop-blur-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="text-5xl mb-6 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  {stat.icon}
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-3 text-shadow-soft">
                  {stat.number}
                </div>
                <div className="font-body text-blue-100 font-medium text-lg">
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
