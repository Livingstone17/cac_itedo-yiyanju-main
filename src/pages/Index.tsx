import Hero from "@/components/Hero";
import LiveStream from "@/components/LiveStream";
import Sermons from "@/components/Sermons";
import Give from "@/components/Give";
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
      <Give />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
// 

//git remote set-url origin https://github.com/Livingstone17/cac_itedo-yiyanju
