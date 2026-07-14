import { Button } from "@/components/ui/button";
import communityImage from "@/assets/prayer.jpg";
import ValuesSection from "./Values";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const openMaps = () => {
    const lat = 6.671838;
    const lng = 3.251764;
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

  const stats = [
    { value: 20, suffix: "+", label: "Years of Ministry" },
    { value: 1000, suffix: "+", label: "Active Members" },
    { value: 50, suffix: "+", label: "Weekly Programs" },
    { value: 100, suffix: "+", label: "Volunteers" },
  ];

  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const numbers = gsap.utils.toArray<HTMLElement>(".stat-number");

      numbers.forEach((el) => {
        const endValue = parseInt(el.dataset.value || "0", 10);
        const suffix = el.dataset.suffix || "";
        const obj = { val: 0 };

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
            el.textContent = Math.floor(obj.val).toLocaleString() + suffix;
          },
        });
      });

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
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="reveal bg-light-200 dark:bg-dark-300 pt-8">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-text dark:text-light mb-6 text-3xl font-bold md:text-4xl">
            About <span className="text-church-gold-400">CAC Itedo Yiyanju</span>
          </h2>

          <p className="text-text-300 dark:text-text-400 mx-auto max-w-2xl text-base">We are a vibrant community of believers committed to loving God, loving people, and making a difference in our world.</p>
        </div>

        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="stagger">
            <h3 className="stagger-item text-text dark:text-light mb-6 text-3xl font-bold">Our Story</h3>

            <div className="text-text-300 dark:text-text-400 space-y-4">
              <p className="stagger-item">Founded in 2002, CAC Itedo Yiyanju began as a small group of families with a big vision: to create a place where everyone could experience God's love, be liberated from the hold of darkness, and find their purpose in God. What started in a living room has grown into a thriving community of over 1000 members.</p>

              <p className="stagger-item">We believe that church should be a place of healing, hope, light, communion and transformation. Through authentic worship, practical teaching, word-based prayers and genuine community, we've seen countless lives changed by the power of God's love.</p>

              <p className="stagger-item">Today, we're not just a church, we're a family committed to making a lasting impact in our city and beyond. Join us as we continue this incredible journey together.</p>
            </div>

            <div className="stagger-item mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" onClick={openMaps} className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300 hover:shadow-glow">
                Visit Us This Sunday
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="shadow-large relative overflow-hidden rounded-2xl">
              <img src={communityImage} alt="CAC Itedo Yiyanju Community" className="parallax h-96 w-full object-cover" />
              <div className="from-church-blue-900/40 absolute inset-0 bg-linear-to-t to-transparent" />
            </div>

            <div ref={statsRef} className="shadow-large border-light-400 bg-light dark:border-dark-500 dark:bg-dark-400 absolute -right-6 -bottom-6 rounded-xl border p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index}>
                    <div className="stat-number text-church-gold-400 text-2xl font-bold" data-value={stat.value} data-suffix={stat.suffix}>
                      0
                    </div>
                    <div className="text-text-300 dark:text-text-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ValuesSection />
      </div>
    </section>
  );
};

export default About;
