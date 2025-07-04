
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedTrips from "@/components/FeaturedTrips";
import AllTrips from "@/components/AllTrips";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedTrips />
      <AllTrips />
      <Statistics />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
