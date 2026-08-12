// import { Button } from "@/components/ui/button";
// import communityImage from "@/assets/prayer.jpg";
// import ValuesSection from "./Values";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const openMaps = () => {
//     const lat = 6.671838;
//     const lng = 3.251764;
//     const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
//     const isAndroid = /Android/.test(navigator.userAgent);

//     if (isIOS) {
//       window.open(`http://maps.apple.com/?daddr=${lat},${lng}`, "_blank");
//     } else if (isAndroid) {
//       window.open(`geo:${lat},${lng}?q=${lat},${lng}(CAC Itedo Yiyanju)`, "_blank");
//     } else {
//       window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
//     }
//   };

//   const stats = [
//     { value: 20, suffix: "+", label: "Years of Ministry" },
//     { value: 1000, suffix: "+", label: "Active Members" },
//     { value: 50, suffix: "+", label: "Weekly Programs" },
//     { value: 100, suffix: "+", label: "Volunteers" },
//   ];

//   const statsRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const numbers = gsap.utils.toArray<HTMLElement>(".stat-number");

//       numbers.forEach((el) => {
//         const endValue = parseInt(el.dataset.value || "0", 10);
//         const suffix = el.dataset.suffix || "";
//         const obj = { val: 0 };

//         gsap.to(obj, {
//           val: endValue,
//           duration: 2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: statsRef.current,
//             start: "top 80%",
//             once: true,
//           },
//           onUpdate: () => {
//             el.textContent = Math.floor(obj.val).toLocaleString();
//           },
//           onComplete: () => {
//             el.textContent = Math.floor(obj.val).toLocaleString() + suffix;
//           },
//         });
//       });

//       gsap.from(".stat-number", {
//         opacity: 0,
//         y: 20,
//         duration: 0.6,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: statsRef.current,
//           start: "top 85%",
//         },
//       });
//     }, statsRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="about" className="reveal bg-light-200 dark:bg-dark-300 pt-8">
//       <div className="container mx-auto px-4">
//         <div className="mb-16 text-center">
//           <h2 className="text-text dark:text-light mb-6 text-3xl font-bold md:text-4xl">
//             About <span className="text-church-gold-400">CAC Itedo Yiyanju</span>
//           </h2>

//           <p className="text-text-300 dark:text-text-400 mx-auto max-w-2xl text-base">We are a vibrant community of believers committed to loving God, loving people, and making a difference in our world.</p>
//         </div>

//         <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
//           <div className="stagger">
//             <h3 className="stagger-item text-text dark:text-light mb-6 text-3xl font-bold">Our Story</h3>

//             <div className="text-text-300 dark:text-text-400 space-y-4">
//               <p className="stagger-item">Founded in 2002, CAC Itedo Yiyanju began as a small group of families with a big vision: to create a place where everyone could experience God's love, be liberated from the hold of darkness, and find their purpose in God. What started in a living room has grown into a thriving community of over 1000 members.</p>

//               <p className="stagger-item">We believe that church should be a place of healing, hope, light, communion and transformation. Through authentic worship, practical teaching, word-based prayers and genuine community, we've seen countless lives changed by the power of God's love.</p>

//               <p className="stagger-item">Today, we're not just a church, we're a family committed to making a lasting impact in our city and beyond. Join us as we continue this incredible journey together.</p>
//             </div>

//             <div className="stagger-item mt-8 flex flex-col gap-4 sm:flex-row">
//               <Button size="lg" onClick={openMaps} className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300 hover:shadow-glow">
//                 Visit Us This Sunday
//               </Button>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="shadow-large relative overflow-hidden rounded-2xl">
//               <img src={communityImage} alt="CAC Itedo Yiyanju Community" className="parallax h-96 w-full object-cover" />
//               <div className="from-church-blue-900/40 absolute inset-0 bg-linear-to-t to-transparent" />
//             </div>

//             <div ref={statsRef} className="shadow-large border-light-400 bg-light dark:border-dark-500 dark:bg-dark-400 absolute -right-6 -bottom-6 rounded-xl border p-6">
//               <div className="grid grid-cols-2 gap-4 text-center">
//                 {stats.slice(0, 2).map((stat, index) => (
//                   <div key={index}>
//                     <div className="stat-number text-church-gold-400 text-2xl font-bold" data-value={stat.value} data-suffix={stat.suffix}>
//                       0
//                     </div>
//                     <div className="text-text-300 dark:text-text-400 text-xs">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <ValuesSection />
//       </div>
//     </section>
//   );
// };

// export default About;


import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, BookOpen, Users, Calendar, Heart } from "lucide-react";
import communityImage from "@/assets/prayer.jpg";
import ValuesSection from "./Values";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const openMaps = () => {
  const lat = 6.671838;
  const lng = 3.251764;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  if (isIOS) window.open(`http://maps.apple.com/?daddr=${lat},${lng}`, "_blank");
  else if (isAndroid) window.open(`geo:${lat},${lng}?q=${lat},${lng}(CAC Itedo Yiyanju)`, "_blank");
  else window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
};

const stats = [
  { value: 20, suffix: "+", label: "Years of Ministry", icon: Calendar },
  { value: 1000, suffix: "+", label: "Active Members", icon: Users },
  { value: 50, suffix: "+", label: "Weekly Programs", icon: BookOpen },
  { value: 100, suffix: "+", label: "Volunteers", icon: Heart },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-badge", {
        scrollTrigger: { trigger: ".about-badge", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: -20, duration: 0.6, ease: "power3.out",
      });
      gsap.from(".about-heading", {
        scrollTrigger: { trigger: ".about-heading", start: "top 90%", toggleActions: "play none none reverse" },
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".about-desc", {
        scrollTrigger: { trigger: ".about-desc", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: 20, duration: 0.7, ease: "power3.out",
      });
      gsap.from(".about-story-item", {
        scrollTrigger: { trigger: ".about-story-content", start: "top 88%", toggleActions: "play none none reverse" },
        opacity: 0, y: 40, duration: 0.8, stagger: 0.12, ease: "power3.out",
      });
      gsap.from(".about-image-wrapper", {
        scrollTrigger: { trigger: ".about-image-wrapper", start: "top 85%", toggleActions: "play none none reverse" },
        opacity: 0, x: 60, duration: 1, ease: "power3.out",
      });
      gsap.to(".about-parallax-img", {
        scrollTrigger: { trigger: ".about-image-wrapper", start: "top bottom", end: "bottom top", scrub: 1 },
        y: -30, ease: "none",
      });

      // Stats counter
      if (statsRef.current) {
        const numbers = gsap.utils.toArray<HTMLElement>(".about-stat-number");
        numbers.forEach((el) => {
          const endValue = parseInt(el.dataset.value || "0", 10);
          const suffix = el.dataset.suffix || "";
          const obj = { val: 0 };
          gsap.to(obj, {
            val: endValue, duration: 2, ease: "power2.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 90%", once: true },
            onUpdate: () => { el.textContent = Math.floor(obj.val).toLocaleString(); },
            onComplete: () => { el.textContent = Math.floor(obj.val).toLocaleString() + suffix; },
          });
        });
        gsap.from(".about-stat-card", {
          scrollTrigger: { trigger: statsRef.current, start: "top 90%", toggleActions: "play none none reverse" },
          opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: "power3.out",
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-white dark:bg-[#050a18]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]" style={{
          backgroundImage: "linear-gradient(rgba(212,168,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#d4a843]/[0.04] blur-[140px] dark:bg-[#d4a843]/[0.03]" />
        <div className="absolute -left-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px] dark:bg-[#1a2f5a]/10" />
      </div>

      {/* About Content */}
      <div className="relative z-10 py-14 md:py-28">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <div className="about-badge mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4a843]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a843]">Who We Are</span>
            </div>
            <h2 className="about-heading mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
                CAC Itedo Yiyanju
              </span>
            </h2>
            <p className="about-desc mx-auto max-w-2xl text-base text-gray-500 dark:text-white/40 md:text-lg">
              A vibrant community of believers committed to loving God, loving people, and making a difference in our world.
            </p>
          </div>

          {/* Two-Column: Story + Image */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: Story */}
            <div className="about-story-content">
              <div className="about-story-item mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4a843] to-[#b8922e] shadow-md">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Our Story</h3>
              </div>

              <div className="space-y-4">
                <p className="about-story-item text-base leading-relaxed text-gray-500 dark:text-white/50">
                  Founded in 2002, CAC Itedo Yiyanju began as a small group of families with a big vision: to create
                  a place where everyone could experience God's love, be liberated from the hold of darkness, and find
                  their purpose in God. What started in a living room has grown into a thriving community of over 1,000 members.
                </p>
                <p className="about-story-item text-base leading-relaxed text-gray-500 dark:text-white/50">
                  We believe that church should be a place of healing, hope, light, communion and transformation. Through
                  authentic worship, practical teaching, word-based prayers and genuine community, we've seen countless
                  lives changed by the power of God's love.
                </p>
                <p className="about-story-item text-base leading-relaxed text-gray-500 dark:text-white/50">
                  Today, we're not just a church — we're a family committed to making a lasting impact in our city and
                  beyond. Join us as we continue this incredible journey together.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="about-story-item mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  onClick={openMaps}
                  className="group relative overflow-hidden rounded-xl border-0 bg-gradient-to-r from-[#d4a843] to-[#b8922e] px-8 py-6 text-base font-semibold text-[#0a1628] shadow-[0_0_25px_rgba(212,168,67,0.2)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,168,67,0.35)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f0d78c] to-[#d4a843] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Visit Us This Sunday
                  </span>
                </Button>
                <a
                  href="/about-itedo"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-700 backdrop-blur-sm transition-all duration-500 hover:border-[#d4a843]/40 hover:text-[#d4a843] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-[#d4a843]/30 dark:hover:text-[#d4a843]"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right: Image + Stats Overlay */}
            <div className="about-image-wrapper relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#d4a843]/10" />
              <div className="absolute -left-3 -top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-[#d4a843]/40" />
              <div className="absolute -right-3 -top-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-[#d4a843]/40" />
              <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-[#d4a843]/40" />
              <div className="absolute -bottom-3 -right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-[#d4a843]/40" />

              <div className="relative overflow-hidden rounded-xl">
                {/* <div className="aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]"> */}
                <div className="aspect-[3/2] w-full overflow-hidden md:aspect-[4/3]">
                  <img
                    src={communityImage}
                    alt="CAC Itedo Yiyanju Community"
                    className="about-parallax-img h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-[#050a18] dark:via-[#050a18]/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent dark:from-[#050a18]/20" />

                {/* Gold top shimmer */}
                <div className="absolute left-0 right-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />

                {/* "Since 2002" badge on image */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                    Since 2002
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div ref={statsRef} className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-20 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="about-stat-card group relative">
                  <div className="absolute -inset-px rounded-2xl bg-[#d4a843]/10 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="relative flex flex-col items-center rounded-2xl border border-gray-200/80 bg-white/80 p-5 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#d4a843]/30 hover:shadow-lg dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#d4a843]/20 dark:hover:shadow-none md:p-6">
                    <div className="absolute left-5 right-5 top-0 h-[2px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:left-6 md:right-6" style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4a843]/10 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-[#d4a843]" />
                    </div>
                    <div
                      className="about-stat-number mb-1 bg-gradient-to-r from-[#d4a843] to-[#f0d78c] bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
                      data-value={stat.value}
                      data-suffix={stat.suffix}
                    >
                      0
                    </div>
                    <div className="text-xs tracking-wider text-gray-400 dark:text-white/40 sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <ValuesSection />

      {/* Bottom separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/15 to-transparent" />
    </section>
  );
};

export default About;