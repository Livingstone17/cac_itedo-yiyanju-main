import Hero from "@/components/Hero";
import LiveStream from "@/components/LiveStream";
import Sermons from "@/components/Sermons";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import UpcomingEvents from "@/components/UpcomingEvents";
import WelcomeSection from "@/components/Welcome";
import ProgramsSection from "@/components/Programs";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <WelcomeSection />
      <ProgramsSection />
      {/* <UpcomingEvents /> */}
      {/* <LiveStream /> */}
      {/* <Sermons /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
