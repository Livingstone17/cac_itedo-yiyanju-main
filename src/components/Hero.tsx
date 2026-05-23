// import { Button } from "@/components/ui/button";
// import { Play, Calendar, Users } from "lucide-react";
// import heroImage from "@/assets/church-hero.jpg";

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={heroImage}
//           alt="Grace Church Interior"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-church-blue/80 via-church-blue/60 to-transparent"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//             Welcome to{" "}
//             <span className="bg-gradient-accent bg-clip-text text-transparent">
//               Itedo Yiyanju
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
//             Join our community of faith, hope, and love. Experience God's presence through worship, fellowship, and service.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Button variant="hero" size="lg" className="w-full sm:w-auto min-w-48">
//               <Play className="w-5 h-5 mr-2" />
//               Watch Live
//             </Button>
//             <Button variant="church-secondary" size="lg" className="w-full sm:w-auto min-w-48">
//               <Calendar className="w-5 h-5 mr-2" />
//               Visit Us
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-church-gold mb-2">500+</div>
//               <div className="text-white/80">Members</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-church-gold mb-2">25+</div>
//               <div className="text-white/80">Years Serving</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-church-gold mb-2">100+</div>
//               <div className="text-white/80">Ministries</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImage1 from "@/assets/church.png";
import heroImage2 from "@/assets/church1.jpg";
import heroImage4 from "@/assets/church3.jpg";
import heroImage5 from "@/assets/church4.jpg";
import heroImage6 from "@/assets/church7.jpg";
import heroImage7 from "@/assets/church6.jpg";
import heroImage8 from "@/assets/church8.jpg";

gsap.registerPlugin(ScrollTrigger);

const openMaps = () => {
  const lat = 6.5244;
  const lng = 3.3792;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  if (isIOS) {
    window.open(`http://maps.apple.com/?daddr=${lat},${lng}`, "_blank");
  } else if (isAndroid) {
    window.open(`geo:${lat},${lng}?q=${lat},${lng}(CAC Itedo Yiyanju)`, "_blank");
  } else {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
  }
};

const Hero = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(".hero-title", { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.2 }).fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "-=0.6").fromTo(".hero-buttons", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.4").fromTo(".hero-stats div", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation]}
        direction="horizontal"
        slidesPerView={1}
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="absolute inset-0 h-full w-full"
        // style={{
        //   "--swiper-pagination-bottom": "30px",
        //   "--swiper-pagination-bullet-size": "12px",
        //   "--swiper-pagination-bullet-inactive-opacity": "0.5"
        // } as React.CSSProperties}
      >
        {[heroImage1, heroImage2, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8].map((image, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img src={image} alt={`Hero Slide ${idx + 1}`} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-church-blue/80 via-church-blue/60 to-transparent"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="hero-title mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Welcome to <span className="bg-gradient-accent bg-clip-text text-transparent">Itedo Yiyanju</span>
          </h1>
          <p className="hero-subtitle mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-white/90 md:text-2xl">Welcome to Bethel, the House of Bread, where heaven meets earth. Come feast on God's Word and be empowered for a life of purpose, impact, and eternal significance.</p>

          {/* Action Buttons */}
          <div className="hero-buttons mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/listen/video">
              <Button variant="hero" size="lg" className="w-full min-w-48 sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Live
              </Button>
            </a>
            <Button variant="church-secondary" size="lg" className="w-full min-w-48 sm:w-auto" onClick={openMaps}>
              <Calendar className="mr-2 h-5 w-5" />
              Visit Us
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-stats mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-church-gold">1000+</div>
              <div className="text-white/80">Members</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-church-gold">20+</div>
              <div className="text-white/80">Years Serving</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-church-gold">3+</div>
              <div className="text-white/80">Branches</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
