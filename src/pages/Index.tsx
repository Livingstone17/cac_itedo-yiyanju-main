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
import { usePageAnimations } from "@/hooks/usePageAnimations";

const Index = () => {
  usePageAnimations();
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

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Hero from "@/components/Hero";
// import WelcomeSection from "@/components/Welcome";
// import ProgramsSection from "@/components/Programs";
// import About from "@/components/About";
// import ValuesSection from "@/components/Values";
// import Contact from "@/components/Contact";

// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//   const containerRef = useRef(null);

//   const heroRef = useRef(null);
//   const welcomeRef = useRef(null);
//   const programsRef = useRef(null);
//   const aboutRef = useRef(null);
//   const valuesRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=7000",
//           scrub: 1.2, // smoother inertia feel
//           pin: true,
//         },
//       });

//       // 🎬 HERO (ZOOM OUT + FADE DEPTH)
//       tl.to(heroRef.current, {
//         scale: 1.05,
//         y: -60,
//         filter: "blur(0px)",
//         ease: "none",
//       });

//       tl.to(heroRef.current, {
//         opacity: 0,
//         scale: 0.98,
//         y: -120,
//         ease: "none",
//       });

//       // 🌅 WELCOME (RISE IN + DEPTH)
//       tl.fromTo(
//         welcomeRef.current,
//         {
//           opacity: 0,
//           y: 120,
//           scale: 0.98,
//           filter: "blur(10px)",
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           filter: "blur(0px)",
//           ease: "none",
//         }
//       );

//       tl.to(welcomeRef.current, {
//         opacity: 0,
//         y: -100,
//         scale: 1.02,
//         filter: "blur(4px)",
//         ease: "none",
//       });

//       // 📖 PROGRAMS (SLIDE DEPTH + CLEAN REVEAL)
//       tl.fromTo(
//         programsRef.current,
//         {
//           opacity: 0,
//           y: 140,
//           scale: 0.97,
//           filter: "blur(12px)",
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           filter: "blur(0px)",
//           ease: "none",
//         }
//       );

//       tl.to(programsRef.current, {
//         opacity: 0,
//         y: -120,
//         scale: 1.02,
//         filter: "blur(6px)",
//         ease: "none",
//       });

//       // ⛪ ABOUT (SMOOTH STABILITY SECTION)
//       tl.fromTo(
//         aboutRef.current,
//         {
//           opacity: 0,
//           y: 160,
//           scale: 0.96,
//           filter: "blur(14px)",
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           filter: "blur(0px)",
//           ease: "none",
//         }
//       );

//       tl.to(aboutRef.current, {
//         opacity: 0,
//         y: -100,
//         scale: 1.01,
//         filter: "blur(5px)",
//         ease: "none",
//       });

//       // ✨ VALUES (FINAL HERO MOMENT)
//       tl.fromTo(
//         valuesRef.current,
//         {
//           opacity: 0,
//           y: 180,
//           scale: 0.95,
//           filter: "blur(16px)",
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           filter: "blur(0px)",
//           ease: "none",
//         }
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="relative overflow-hidden">

//       <section ref={heroRef}>
//         <Hero />
//       </section>

//       <section ref={welcomeRef}>
//         <WelcomeSection />
//       </section>

//       <section ref={programsRef}>
//         <ProgramsSection />
//       </section>

//       <section ref={aboutRef}>
//         <About />
//       </section>

//       <section ref={valuesRef}>
//         <ValuesSection />
//       </section>

//     </div>
//   );
// };

// export default LandingPage;
