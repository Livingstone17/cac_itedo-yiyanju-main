// import { useEffect, useRef } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Heart, Users, Compass, BookOpen } from "lucide-react";
// import gsap from "gsap";

// const values = [
//   {
//     title: "LOVE",
//     description: "Our love isn't fleeting, it's fierce, faithful, and fixed on Jesus. We live with undying commitment to God and His eternal purposes, loving Him above all and extending His grace to a hurting world.",
//     icon: Heart,
//     color: "bg-red-500",
//   },
//   {
//     title: "INTIMACY",
//     description: "We pursue more than religion, we seek relationship. In the presence of the Holy Spirit, we cultivate daily intimacy with God through prayer, worship, and surrendered living, allowing Him to lead, heal, and speak clearly in our lives.",
//     icon: Users,
//     color: "bg-church-blue-700",
//   },
//   {
//     title: "TRANSFORMATION",
//     description: "When heaven touches earth, everything changes. Through biblical teaching, authentic discipleship, and the power of the cross, we witness radical transformation in individuals, families, and entire communities fulfilling God's purpose for every believer.",
//     icon: Compass,
//     color: "bg-church-gold-400",
//   },
//   {
//     title: "KINGDOM INFLUENCE",
//     description: "We're raising world-changers who don't just adapt to culture—they transform it. Empowered by the Holy Spirit and grounded in kingdom principles, our Christian community advances society through justice, innovation, and Christ-centered leadership.",
//     icon: BookOpen,
//     color: "bg-green-500",
//   },
// ];

// export default function ValuesSection() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".value-icon", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//         scale: 0,
//         duration: 0.6,
//         ease: "back.out(1.7)",
//         stagger: 0.2,
//         delay: 0.2,
//       });

//       gsap.from(".values-title", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//         },
//         opacity: 0,
//         y: 30,
//         duration: 0.7,
//         ease: "power2.out",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="reveal border-light-400/60 dark:border-dark-500/60 mb-2 border-y py-20"
//       style={{
//         marginLeft: "calc(-50vw + 50%)",
//         marginRight: "calc(-50vw + 50%)",
//         paddingLeft: "calc(50vw - 50%)",
//         paddingRight: "calc(50vw - 50%)",
//       }}
//     >
//       <h3 className="values-title text-text dark:text-light mb-12 text-center text-3xl font-bold">Our Core Values</h3>

//       <div className="stagger grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
//         {values.map((value, index) => {
//           const IconComponent = value.icon;

//           return (
//             <div key={index} className="value-card stagger-item group h-full transition-transform duration-300 hover:-translate-y-2">
//               <Card className="border-light-400 bg-light shadow-soft hover:shadow-medium dark:border-dark-500 dark:bg-dark-400 flex h-full flex-col border text-center transition-all duration-300">
//                 <CardContent className="flex grow flex-col p-6">
//                   <div className={`value-icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${value.color}`}>
//                     <IconComponent className="h-8 w-8 text-white" />
//                   </div>

//                   <h4 className="text-text dark:text-light mb-3 text-xl font-bold">{value.title}</h4>

//                   <p className="text-text-300 dark:text-text-400 grow text-sm">{value.description}</p>
//                 </CardContent>
//               </Card>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import { Heart, Users, Compass, BookOpen } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "LOVE",
    description:
      "Our love isn't fleeting — it's fierce, faithful, and fixed on Jesus. We live with undying commitment to God and His eternal purposes, loving Him above all and extending His grace to a hurting world.",
    icon: Heart,
    gradient: "from-red-500 to-rose-600",
    glow: "rgba(239,68,68,0.15)",
    accent: "#ef4444",
  },
  {
    title: "INTIMACY",
    description:
      "We pursue more than religion — we seek relationship. In the presence of the Holy Spirit, we cultivate daily intimacy with God through prayer, worship, and surrendered living.",
    icon: Users,
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.15)",
    accent: "#3b82f6",
  },
  {
    title: "TRANSFORMATION",
    description:
      "When heaven touches earth, everything changes. Through biblical teaching, authentic discipleship, and the power of the cross, we witness radical transformation in individuals and families.",
    icon: Compass,
    gradient: "from-[#d4a843] to-[#b8922e]",
    glow: "rgba(212,168,67,0.15)",
    accent: "#d4a843",
  },
  {
    title: "KINGDOM INFLUENCE",
    description:
      "We're raising world-changers who don't just adapt to culture — they transform it. Empowered by the Holy Spirit, our community advances society through Christ-centered leadership.",
    icon: BookOpen,
    gradient: "from-emerald-500 to-green-600",
    glow: "rgba(16,185,129,0.15)",
    accent: "#10b981",
  },
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".values-badge", {
        scrollTrigger: {
          trigger: ".values-badge",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".values-title", {
        scrollTrigger: {
          trigger: ".values-title",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".values-subtitle", {
        scrollTrigger: {
          trigger: ".values-subtitle",
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".value-icon-ring", {
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.15,
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50  dark:bg-[#050a18] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4a843]/[0.04] blur-[120px] dark:bg-[#d4a843]/[0.03]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/4 translate-y-1/4 rounded-full bg-blue-500/[0.03] blur-[100px] dark:bg-[#1a2f5a]/10" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="values-badge mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4a843]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a843]">
              What We Stand For
            </span>
          </div>

          <h2 className="values-title mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Our Core{" "}
            <span className="bg-gradient-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
              Values
            </span>
          </h2>

          <p className="values-subtitle mx-auto max-w-2xl text-base text-gray-500 dark:text-white/40 md:text-lg">
            These are the pillars that guide everything we do — shaping our worship,
            our community, and our mission to the world.
          </p>
        </div>

        {/* Cards */}
        <div className="values-grid grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="value-card group relative">
                {/* Hover glow */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{ backgroundColor: value.glow }}
                />

                {/* Card body */}
                <div className="relative flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-gray-300 hover:bg-white hover:shadow-lg dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.04] dark:hover:shadow-none md:p-8">
                  {/* Top accent line */}
                  <div
                    className="absolute left-6 right-6 top-0 h-[2px] rounded-full opacity-30 transition-opacity duration-500 group-hover:opacity-100 md:left-8 md:right-8"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${value.accent}, transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="relative inline-flex">
                      <div
                        className="value-icon-ring absolute -inset-2 rounded-2xl opacity-20 blur-md transition-opacity duration-500 group-hover:opacity-40"
                        style={{ backgroundColor: value.accent }}
                      />
                      <div
                        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Number */}
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="text-xs font-bold tracking-wider opacity-40"
                      style={{ color: value.accent }}
                    >
                      0{index + 1}
                    </span>
                    <div
                      className="h-px flex-1 opacity-20"
                      style={{
                        background: `linear-gradient(90deg, ${value.accent}, transparent)`,
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold tracking-wide text-gray-900 dark:text-white">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:text-white/40 dark:group-hover:text-white/60">
                    {value.description}
                  </p>

                  {/* Bottom dots */}
                  <div className="mt-6 flex items-center gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 rounded-full transition-all duration-500"
                        style={{
                          width: i === index ? "20px" : "4px",
                          backgroundColor:
                            i === index
                              ? value.accent
                              : "rgba(156,163,175,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-12 flex items-center justify-center gap-3 md:mt-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4a843]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#d4a843]/30" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4a843]/30" />
        </div>
      </div>

      {/* Bottom separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/15 to-transparent" />
    </section>
  );
}