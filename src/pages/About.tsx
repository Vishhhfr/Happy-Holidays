
import { ArrowLeft, MapPin, Users, Award, Globe, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Travelers", value: "50,000+" },
    { icon: MapPin, label: "Destinations", value: "200+" },
    { icon: Award, label: "Years of Excellence", value: "15+" },
    { icon: Star, label: "Customer Rating", value: "4.9/5" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passionate Service",
      description: "We're driven by our love for travel and commitment to creating unforgettable experiences for every client."
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "With extensive knowledge of destinations worldwide, we craft journeys that reveal the true essence of each place."
    },
    {
      icon: Award,
      title: "Trusted Excellence",
      description: "Our track record of satisfied customers and industry recognition speaks to our commitment to quality."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        {/* Back Button */}
        <Link to="/settings" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Settings
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-lavender-600 bg-clip-text text-transparent mb-6">
            About Happy Holidays
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in creating extraordinary travel experiences. For over a decade, we've been turning wanderlust into wonderful memories.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-purple-100 dark:border-gray-700">
              <stat.icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 mb-16 border border-purple-100 dark:border-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Story</h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Founded in 2010, Happy Holidays began as a small dream shared by passionate travelers who believed that everyone deserves to experience the world's wonders. What started as a boutique travel consultancy has grown into one of the most trusted travel agencies, serving thousands of adventurers, families, and business travelers.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our journey began with a simple philosophy: travel should be transformative, accessible, and worry-free. We understood that planning the perfect trip could be overwhelming, so we dedicated ourselves to becoming the bridge between our clients' dreams and their destinations.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, Happy Holidays stands as a testament to the power of personalized service and genuine care. We've curated relationships with premium hotels, experienced local guides, and reliable transport partners across the globe. Every recommendation we make is based on firsthand experience and thorough vetting.
              </p>
              
              <p className="text-lg leading-relaxed">
                What sets us apart is our commitment to understanding each traveler's unique story. Whether you're seeking a romantic getaway, a family adventure, a spiritual journey, or a corporate retreat, we craft experiences that resonate with your personal travel style and aspirations.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-purple-100 dark:border-gray-700 text-center">
                <div className="bg-gradient-to-r from-purple-600 to-lavender-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-purple-600 to-lavender-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To inspire and enable meaningful travel experiences that enrich lives, foster cultural understanding, and create lasting memories. We believe that travel has the power to transform perspectives, build connections, and make the world a more compassionate place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
