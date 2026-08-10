// import Prayer from "@/assets/program.jpg";
// import { FaChalkboardUser, FaUsers, FaBookBible, FaHandsPraying } from "react-icons/fa6";

// const ProgramsSection = () => {
//   const weeklyMeetings = [
//     {
//       title: "Sunday School",
//       time: "7:00 AM",
//       day: "Sunday",
//       icon: FaChalkboardUser,
//     },
//     {
//       title: "Sunday Service",
//       time: "8:00 AM",
//       day: "Sunday",
//       icon: FaUsers,
//     },
//     {
//       title: "Bible Study",
//       time: "5:00 PM",
//       day: "Tuesday",
//       icon: FaBookBible,
//     },
//     {
//       title: "Prayer Meeting",
//       time: "8:00 AM",
//       day: "Thursday",
//       icon: FaHandsPraying,
//     },
//   ];

//   return (
//     <section className="reveal border-light-400/60 bg-light dark:border-dark-500/60 dark:bg-dark-300 border-y py-16">
//       <div className="container mx-auto px-6">
//         <div className="fade-in mb-16 text-center">
//           <h2 className="text-text dark:text-light mb-6 text-3xl font-bold md:text-4xl">
//             Our <span className="text-church-gold-400">Weekly Meetings</span>
//           </h2>
//         </div>

//         <div className="stagger grid grid-cols-1 gap-8 lg:grid-cols-5">
//           <div />

//           <div className="lg:col-span-3">
//             <div className="grid items-start gap-8 lg:grid-cols-2">
//               <div className="stagger-item">
//                 <img src={Prayer} alt="Weekly programs" className="parallax shadow-large w-full rounded-lg object-cover" />
//               </div>

//               <div>
//                 {weeklyMeetings.map((meeting, index) => {
//                   const IconComponent = meeting.icon;

//                   return (
//                     <div key={index} className="stagger-item">
//                       <div className="flex gap-4 py-4">
//                         <div className="bg-church-gold-400/15 flex h-12 w-12 items-center justify-center rounded-lg">
//                           <IconComponent className="text-church-gold-400 h-6 w-6" />
//                         </div>

//                         <div>
//                           <h3 className="text-text dark:text-light text-lg font-semibold">{meeting.title}</h3>

//                           <div className="flex gap-4">
//                             <span className="text-text-300 dark:text-text-400">{meeting.day}</span>
//                             <span className="text-church-gold-400 font-medium">{meeting.time}</span>
//                           </div>
//                         </div>
//                       </div>

//                       {index < weeklyMeetings.length - 1 && <div className="border-light-400 dark:border-dark-500 border-b" />}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           <div />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramsSection;

import { useState, useEffect, useRef } from "react";
import { FaChalkboardUser, FaUsers, FaBookBible, FaHandsPraying } from "react-icons/fa6";
import { Clock, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Prayer from "@/assets/program.jpg";
import churchImg1 from "@/assets/church1.jpg";
import churchImg3 from "@/assets/church3.jpg";
import churchImg4 from "@/assets/church4.jpg";

gsap.registerPlugin(ScrollTrigger);

const weeklyMeetings = [
  {
    title: "Sunday School",
    time: "7:00 AM",
    day: "Every Sunday",
    description: "Deep dive into the Word with interactive teaching sessions.",
    icon: FaChalkboardUser,
    image: Prayer,
    accent: "#d4a843",
  },
  {
    title: "Sunday Service",
    time: "8:00 AM",
    day: "Every Sunday",
    description: "Our main worship gathering — come experience God's presence.",
    icon: FaUsers,
    image: churchImg1,
    accent: "#3b82f6",
  },
  {
    title: "Bible Study",
    time: "5:00 PM",
    day: "Every Tuesday",
    description: "Exploring scripture together to strengthen your faith walk.",
    icon: FaBookBible,
    image: churchImg3,
    accent: "#10b981",
  },
  {
    title: "Prayer Meeting",
    time: "8:00 AM",
    day: "Every Thursday",
    description: "Corporate prayer that moves mountains and transforms lives.",
    icon: FaHandsPraying,
    image: churchImg4,
    accent: "#8b5cf6",
  },
];

const ProgramsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageStackRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Animate image transition
  useEffect(() => {
    if (!imageStackRef.current) return;
    const cards = imageStackRef.current.querySelectorAll(".stack-card");

    cards.forEach((card, i) => {
      const offset = i - activeIndex;
      const isActive = i === activeIndex;
      const isBehind = offset > 0;
      const isGone = offset < 0;

      gsap.to(card, {
        y: isBehind ? offset * 18 : isGone ? -20 : 0,
        scale: isBehind ? 1 - offset * 0.04 : isGone ? 0.95 : 1,
        opacity: isGone ? 0 : isBehind ? Math.max(1 - offset * 0.25, 0.2) : 1,
        zIndex: cards.length - Math.abs(offset),
        rotateX: isBehind ? -2 * offset : 0,
        duration: 0.6,
        ease: "power3.out",
      });
    });
  }, [activeIndex]);

  // Scroll animations
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".programs-badge", {
        scrollTrigger: { trigger: ".programs-badge", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: -20, duration: 0.6, ease: "power3.out",
      });
      gsap.from(".programs-heading", {
        scrollTrigger: { trigger: ".programs-heading", start: "top 90%", toggleActions: "play none none reverse" },
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".programs-desc", {
        scrollTrigger: { trigger: ".programs-desc", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: 20, duration: 0.7, ease: "power3.out",
      });
      gsap.from(".programs-stack", {
        scrollTrigger: { trigger: ".programs-stack", start: "top 88%", toggleActions: "play none none reverse" },
        opacity: 0, x: -60, duration: 1, ease: "power3.out",
      });
      gsap.from(".programs-widget", {
        scrollTrigger: { trigger: ".programs-widget", start: "top 88%", toggleActions: "play none none reverse" },
        opacity: 0, x: 60, duration: 1, ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Auto-rotate
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % weeklyMeetings.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  // Auto-rotate (pauses when hovering widget)
  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      if (!isHoveringRef.current) {
        setActiveIndex((prev) => (prev + 1) % weeklyMeetings.length);
      }
    }, 5000);

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, []);

  // Animate image transition
  useEffect(() => {
    if (!imageStackRef.current) return;
    const cards = imageStackRef.current.querySelectorAll(".stack-card");
    const total = weeklyMeetings.length;

    cards.forEach((card, i) => {
      let offset = i - activeIndex;

      // Wrap around for circular positioning
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const isActive = offset === 0;
      const absOffset = Math.abs(offset);

      gsap.to(card, {
        x: offset * 55,
        y: absOffset * 8,
        scale: isActive ? 1 : Math.max(1 - absOffset * 0.08, 0.75),
        opacity: absOffset > 2 ? 0 : isActive ? 1 : Math.max(1 - absOffset * 0.3, 0.15),
        zIndex: total - absOffset,
        rotateY: offset * -5,
        duration: 0.6,
        ease: "power3.out",
      });
    });
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50 py-14 dark:bg-[#050a18] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]" style={{
          backgroundImage: "linear-gradient(rgba(212,168,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#d4a843]/[0.04] blur-[140px] dark:bg-[#d4a843]/[0.03]" />
        <div className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px] dark:bg-[#1a2f5a]/10" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="programs-badge mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
            <Clock className="h-3.5 w-3.5 text-[#d4a843]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a843]">
              Weekly Schedule
            </span>
          </div>
          <h2 className="programs-heading mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Our Weekly{" "}
            <span className="bg-gradient-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
              Meetings
            </span>
          </h2>
          <p className="programs-desc mx-auto max-w-2xl text-base text-gray-500 dark:text-white/40 md:text-lg">
            Join us throughout the week for worship, study, and prayer.
          </p>
        </div>

        {/* Two-Column: Stacked Images + Widget */}
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: Stacked Image Carousel */}
          <div className="programs-stack relative flex items-center justify-center">
            <div
              ref={imageStackRef}
              className="relative h-[340px] w-full max-w-[420px] sm:h-[400px]"
              style={{ perspective: "1200px", perspectiveOrigin: "center center" }}
            >
              {weeklyMeetings.map((meeting, i) => (
                <div
                  key={i}
                  className="stack-card absolute inset-x-8 inset-y-0 cursor-pointer overflow-hidden rounded-2xl"
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => setActiveIndex(i)}
                >
                  {/* Image */}
                  <img
                    src={meeting.image}
                    alt={meeting.title}
                    className="h-full w-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top accent */}
                  <div
                    className="absolute left-0 right-0 top-0 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${meeting.accent}, transparent)`,
                    }}
                  />

                  {/* Card border */}
                  <div
                    className="absolute inset-0 rounded-2xl border-2 transition-colors duration-500"
                    style={{
                      borderColor:
                        i === activeIndex
                          ? `${meeting.accent}60`
                          : "rgba(255,255,255,0.08)",
                    }}
                  />

                  {/* Bottom info — only visible on active */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                      transform: i === activeIndex ? "translateY(0)" : "translateY(10px)",
                    }}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
                        style={{ backgroundColor: `${meeting.accent}40` }}
                      >
                        {meeting.day}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">{meeting.title}</h4>
                    <p className="mt-1 text-sm text-white/60">{meeting.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress dots */}
            <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
              {weeklyMeetings.map((meeting, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? "24px" : "6px",
                    backgroundColor: i === activeIndex ? meeting.accent : "rgba(156,163,175,0.3)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Interactive Widget */}
          {/* <div className="programs-widget">
            <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-2 backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.02]"> */}
          <div
            className="programs-widget"
            onMouseEnter={() => { isHoveringRef.current = true; }}
            onMouseLeave={() => { isHoveringRef.current = false; }}
          >
            <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-2 backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.02]">
              {weeklyMeetings.map((meeting, i) => {
                const IconComponent = meeting.icon;
                const isActive = i === activeIndex;

                return (
                  <button
                    key={i}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    className={
                      "group relative flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition-all duration-500 " +
                      (isActive
                        ? "bg-gray-100/80 dark:bg-white/[0.05]"
                        : "hover:bg-gray-50 dark:hover:bg-white/[0.02]")
                    }
                  >
                    {/* Active indicator line */}
                    <div
                      className="absolute bottom-2 left-0 top-2 w-[3px] rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: isActive ? meeting.accent : "transparent",
                        opacity: isActive ? 1 : 0,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500"
                      style={{
                        backgroundColor: isActive ? `${meeting.accent}20` : "rgba(212,168,67,0.08)",
                        transform: isActive ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      <IconComponent
                        className="h-5 w-5 transition-colors duration-500"
                        style={{ color: isActive ? meeting.accent : "#d4a843" }}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4
                          className="text-base font-bold transition-colors duration-300"
                          style={{ color: isActive ? (meeting.accent) : undefined }}
                        >
                          <span className={isActive ? "" : "text-gray-900 dark:text-white"}>
                            {meeting.title}
                          </span>
                        </h4>
                        <ArrowRight
                          className="h-4 w-4 transition-all duration-500"
                          style={{
                            color: meeting.accent,
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? "translateX(0)" : "translateX(-8px)",
                          }}
                        />
                      </div>

                      <div className="mt-0.5 flex items-center gap-3">
                        <span className="text-sm text-gray-500 dark:text-white/40">
                          {meeting.day}
                        </span>
                        <span
                          className="rounded-full px-2 py-0.5 text-[11px] font-bold"
                          style={{
                            backgroundColor: isActive ? `${meeting.accent}15` : "rgba(212,168,67,0.08)",
                            color: isActive ? meeting.accent : "#d4a843",
                          }}
                        >
                          {meeting.time}
                        </span>
                      </div>

                      {/* Expandable description */}
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{
                          maxHeight: isActive ? "60px" : "0px",
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? "6px" : "0px",
                        }}
                      >
                        <p className="text-sm leading-relaxed text-gray-400 dark:text-white/30">
                          {meeting.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 flex items-center justify-center gap-3 md:mt-20">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4a843]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#d4a843]/30" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4a843]/30" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/15 to-transparent" />
    </section>
  );
};

export default ProgramsSection;