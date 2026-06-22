

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
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
  const lat = 6.671838;
  const lng = 3.251764;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  if (isIOS) {
    window.open(`http://maps.apple.com/?daddr=${lat},${lng}`, "_blank");
  } else if (isAndroid) {
    window.open(`geo:${lat},${lng}?q=${lat},${lng}(Church)`, "_blank");
  } else {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
  }
};

const goToLivestream = () => {
  window.location.href = '/listen/video';
}
const phrases = [
  "Welcome to Bethel, the House of Bread, where heaven meets earth.",
  "A place of Worship, Love, Revelatory Teachings and Prayers.",
  "Join us as we learn Christ, experience transformation and manifest the GOD Life here on earth."
];
const useTypewriter = (texts, typingSpeed = 75, deletingSpeed = 30, pauseTime = 2000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayedText;
};

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const displayedText = useTypewriter(phrases);

  useEffect(() => {
    gsap.from(".hero-title", {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.2,
    });

    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.4,
    });

    gsap.from(".hero-buttons", {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      delay: 0.6,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <div ref={imageRef} className="absolute inset-0 scale-110">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          className="h-full w-full"
        >
          {[heroImage1, heroImage2, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8].map(
            (image, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={image}
                  className="h-full w-full object-cover"
                />
                {/* bg-church-blue/70 */}
                <div className="absolute inset-0 bg-black/70" />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title mb-6 text-5xl font-bold text-white md:text-7xl">
            Welcome to <span className="text-church-gold">CAC, Itedo Yiyanju</span>
          </h1>

          {/* <p className="hero-subtitle mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Welcome to Bethel, the House of Bread, where heaven meets earth.
          </p> */}
          <p className="hero-subtitle mx-auto mb-8 max-w-2xl text-xl text-white/90 min-h-[2rem] flex items-center justify-center">
            <span>{displayedText}</span>
            <span
              className="ml-1 inline-block w-[2px] h-[1.2em] bg-white/90 align-middle"
              style={{ animation: 'blink 1s step-end infinite' }}
            ></span>
          </p>

          <div className="hero-buttons mb-10 flex justify-center gap-4">
            <Button variant="hero" size="lg" onClick={goToLivestream}>
              <Play className="mr-2 h-5 w-5" />
              Watch Live
            </Button>

            <Button variant="church-secondary" size="lg" onClick={openMaps}>
              <Calendar className="mr-2 h-5 w-5" />
              Visit Us
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-stats mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3 text-white">
            <div>
              <div className="text-3xl font-bold text-church-gold">1000+</div>
              <div>Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-church-gold">20+</div>
              <div>Years Serving</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-church-gold">3+</div>
              <div>Branches</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
