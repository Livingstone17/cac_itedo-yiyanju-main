import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Compass, BookOpen } from "lucide-react";
import communityImage from "@/assets/prayer.jpg";
import { motion } from "framer-motion";
import ValuesSection from "./Values";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { usePageAnimations } from "@/hooks/usePageAnimations";


gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const openMaps = () => {
    const lat = 6.5244; // Replace with your church latitude
    const lng = 3.3792; // Replace with your church longitude
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      // Open in Apple Maps
      window.open(`http://maps.apple.com/?daddr=${lat},${lng}`, "_blank");
    } else if (isAndroid) {
      // Open in Google Maps App (if installed)
      window.open(`geo:${lat},${lng}?q=${lat},${lng}(CAC Itedo Yiyanju)`, "_blank");
    } else {
      // Default: open Google Maps in browser
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
    }
  };


  const stats = [
    { value: 20, suffix: "+", label: "Years of Ministry" },
    { value: 1000, suffix: "+", label: "Active Members" },
    { value: 50, suffix: "+", label: "Weekly Programs" },
    { value: 100, suffix: "+", label: "Volunteers" },
  ];


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  // Stats Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const numbers = gsap.utils.toArray(".stat-number");

      numbers.forEach((el: any) => {
        const endValue = parseInt(el.dataset.value);

        let obj = { val: 0 };

        gsap.to(obj, {
          val: endValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toLocaleString();
          },
          onComplete: () => {
            const suffix = el.dataset.suffix || "";
            el.textContent =
              Math.floor(obj.val).toLocaleString() + suffix;
          },
        });
      });
    }, statsRef);

    gsap.from(".stat-number", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 85%",
      },
    });
    return () => ctx.revert();
  }, []);

  // usePageAnimations();


  return (
    <section id="about" className="reveal py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-6">
            About <span className="text-church-gold">CAC Itedo Yiyanju</span>
          </h2>
          <p className="text-base text-church-text-light max-w-2xl mx-auto">
            We are a vibrant community of believers committed to loving God, loving people, and making a difference in our world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story */}
          <div className="stagger">
            <h3 className="stagger-item text-3xl font-bold text-church-text mb-6">Our Story</h3>
            <div className="space-y-4 text-church-text-light">
              <p className="stagger-item">
                Founded in 2002, CAC Itedo Yiyanju began as a small group of families with a big vision:
                to create a place where everyone could experience God's love, be liberated from the hold of darkness, and find their purpose in God.
                What started in a living room has grown into a thriving community of over 1000 members.
              </p>
              <p className="stagger-item">
                We believe that church should be a place of healing, hope, light, communion and transformation.
                Through authentic worship, practical teaching, word-based prayers and genuine community, we've seen
                countless lives changed by the power of God's love.
              </p>
              <p className="stagger-item">
                Today, we're not just a church, we're a family committed to making a lasting
                impact in our city and beyond. Join us as we continue this incredible journey together.
              </p>
            </div>
            <div className="stagger-item flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="church-primary" size="lg" onClick={openMaps}>
                Visit Us This Sunday
              </Button>
              {/* <Button variant="outline" size="lg">
                Learn More
              </Button> */}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={communityImage}
                alt="Grace Church Community"
                className="w-full h-96 object-cover parallax"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-church-blue/30 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div
              ref={statsRef}
              className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-large p-6 border border-border"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index}>
                    <div
                      className="text-2xl font-bold text-church-gold stat-number"
                      data-value={stat.value}
                      data-suffix={stat.suffix}
                    >
                      0
                    </div>
                    <div className="text-xs text-church-text-light">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ValuesSection />
        {/* Full Stats */}
        {/* <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-8">Grace Church by the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-church-gold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
