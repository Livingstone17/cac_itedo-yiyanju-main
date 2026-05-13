import Hero from "@/components/Hero";
// import LiveStream from "@/components/LiveStream";
// import Sermons from "@/components/Sermons";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import UpcomingEvents from "@/components/UpcomingEvents";
import WelcomeSection from "@/components/Welcome";
import ProgramsSection from "@/components/Programs";
import Gallery from "@/components/Gallery";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import MinistryDirectory from "@/components/MinistryDirectory";
import HomeContentPrefetch from "@/components/HomeContentPrefetch";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HomeContentPrefetch />
      {/* <AnnouncementBanner /> */}
      <div className="pt-16">
        <Hero />
        <WelcomeSection />
        <ProgramsSection />
        {/* <UpcomingEvents /> */}
        {/* <LiveStream /> */}
        {/* <Sermons /> */}
        <About />
        <Gallery />
        <MinistryDirectory />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
