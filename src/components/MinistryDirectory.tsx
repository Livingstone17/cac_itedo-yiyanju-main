// import { Card, CardContent } from "@/components/ui/card";
// import choir from "../assets/choir.jpg";
// import youth from "../assets/program.jpg";

// const MinistryDirectory = () => {
//   const featuredMinistries = [
//     {
//       id: 1,
//       name: "Youth & Young Adults",
//       subtitle: "BETHEL COVENANT YOUTH",
//       image: youth,
//     },
//     {
//       id: 2,
//       name: "Worship & Music",
//       subtitle: "BETHEL COVENANT CHOIR",
//       image: choir,
//     },
//   ];

//   return (
//     <section
//       id="ministries"
//       className="reveal border-light-400/60 bg-light-100 dark:border-dark-500/60 dark:bg-dark-200 border-y py-20"
//       style={{
//         marginLeft: "calc(-50vw + 50%)",
//         marginRight: "calc(-50vw + 50%)",
//         paddingLeft: "calc(50vw - 50%)",
//         paddingRight: "calc(50vw - 50%)",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="stagger mb-16 text-center">
//           <h2 className="stagger-item text-text dark:text-light mb-6 text-3xl font-bold md:text-4xl">
//             Our <span className="text-church-gold-400">Ministries</span>
//           </h2>

//           <p className="stagger-item text-text-300 dark:text-text-400 mx-auto max-w-2xl text-base">Be a functional part of our church family. Explore the various ministries where you can serve, grow, and make a difference.</p>
//         </div>

//         <div className="grid items-start gap-12 lg:grid-cols-2">
//           <div className="stagger flex flex-col justify-center">
//             <h2 className="stagger-item text-text dark:text-light mb-8 text-5xl leading-tight font-black md:text-6xl">
//               There's a Place for <span className="text-church-gold-400">Everyone</span>
//             </h2>

//             <p className="stagger-item text-text-300 dark:text-text-400 mb-8 max-w-md text-lg leading-relaxed">Discover the various ways you can serve, grow, and make a difference in our church family.</p>

//             <div className="stagger-item">
//               <a href="/ministries" className="border-church-blue-700 text-church-blue-700 hover:bg-church-blue-700 hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark-300 inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-3 font-semibold transition-colors duration-300">
//                 See All Ministries
//               </a>
//             </div>
//           </div>

//           <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2">
//             {featuredMinistries.map((ministry) => (
//               <div key={ministry.id} className="stagger-item">
//                 <Card className="group border-light-400 bg-light dark:border-dark-500 dark:bg-dark-400 overflow-hidden border shadow-lg transition-all duration-500 hover:shadow-2xl">
//                   <div className="relative h-64 overflow-hidden">
//                     <img src={ministry.image} alt={ministry.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                     <div className="bg-church-blue-900/20 group-hover:bg-church-blue-900/40 absolute inset-0 transition-colors duration-300" />
//                   </div>

//                   <CardContent className="p-6">
//                     <h3 className="text-text dark:text-light mb-2 text-xl font-bold">{ministry.name}</h3>
//                     <p className="text-text-300 dark:text-text-400 text-sm">{ministry.subtitle}</p>
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MinistryDirectory;


import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import choir from "../assets/choir.jpg";
import youth from "../assets/program.jpg";

gsap.registerPlugin(ScrollTrigger);

const featuredMinistries = [
  {
    id: 1,
    name: "Youth & Young Adults",
    subtitle: "BETHEL COVENANT YOUTH",
    description: "Building the next generation of faith-filled leaders through fellowship and discipleship.",
    image: youth,
    tag: "Community",
  },
  {
    id: 2,
    name: "Worship & Music",
    subtitle: "BETHEL COVENANT CHOIR",
    description: "Leading the congregation into God's presence through anointed praise and worship.",
    image: choir,
    tag: "Worship",
  },
];

const MinistryDirectory = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".ministry-badge", {
        scrollTrigger: { trigger: ".ministry-badge", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: -20, duration: 0.6, ease: "power3.out",
      });

      gsap.from(".ministry-heading", {
        scrollTrigger: { trigger: ".ministry-heading", start: "top 90%", toggleActions: "play none none reverse" },
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
      });

      gsap.from(".ministry-desc", {
        scrollTrigger: { trigger: ".ministry-desc", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: 20, duration: 0.7, ease: "power3.out",
      });

      gsap.from(".ministry-cta", {
        scrollTrigger: { trigger: ".ministry-cta", start: "top 95%", toggleActions: "play none none reverse" },
        opacity: 0, y: 20, duration: 0.6, ease: "power3.out",
      });

      gsap.from(".ministry-card", {
        scrollTrigger: { trigger: ".ministry-grid", start: "top 88%", toggleActions: "play none none reverse" },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ministries"
      className="relative overflow-hidden bg-white py-14 dark:bg-[#050a18] md:py-28"
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
        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#d4a843]/[0.04] blur-[140px] dark:bg-[#d4a843]/[0.03]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px] dark:bg-[#1a2f5a]/10" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="ministry-badge mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4a843]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a843]">
              Get Involved
            </span>
          </div>

          <h2 className="ministry-heading mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            There's a Place for{" "}
            <span className="bg-gradient-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>

          <p className="ministry-desc mx-auto max-w-2xl text-base text-gray-500 dark:text-white/40 md:text-lg">
            Discover the various ways you can serve, grow, and make a difference
            in our church family. Every gift matters here.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="ministry-grid mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {featuredMinistries.map((ministry) => (
            <div key={ministry.id} className="ministry-card group relative">
              {/* Hover glow */}
              <div className="absolute -inset-px rounded-2xl bg-[#d4a843]/10 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:border-[#d4a843]/30 hover:shadow-xl dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#d4a843]/20 dark:hover:shadow-none">
                {/* Image */}
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={ministry.image}
                    alt={ministry.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                      {ministry.tag}
                    </span>
                  </div>

                  {/* Subtitle overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4a843]">
                      {ministry.subtitle}
                    </span>
                  </div>

                  {/* Top accent line */}
                  <div
                    className="absolute left-0 right-0 top-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#d4a843] dark:text-white">
                    {ministry.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 dark:text-white/40">
                    {ministry.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#d4a843] opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span>Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="ministry-cta mt-12 text-center md:mt-16">
          <a
            href="/ministries"
            className="group inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-8 py-3.5 text-sm font-semibold text-[#d4a843] transition-all duration-500 hover:border-[#d4a843]/40 hover:bg-[#d4a843]/10 hover:shadow-[0_0_25px_rgba(212,168,67,0.1)]"
          >
            See All Ministries
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
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
};

export default MinistryDirectory;