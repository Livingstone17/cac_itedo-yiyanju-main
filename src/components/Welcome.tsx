
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// import pastorImg from "@/assets/daddy.png";
// import pastorImg2 from "@/assets/dadi.png";

// // gsap.registerPlugin(ScrollTrigger);

// const WelcomeSection = () => {
//   const sectionRef = useRef(null);
//   const imgRef = useRef(null);
//   const textRef = useRef(null);



//   return (
//     <section className="reveal bg-black text-white py-16 overflow-hidden">
//       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center stagger">

//         <div className="w-full stagger-item">
//           <img
//             src={pastorImg}
//             className="rounded-lg shadow-lg w-full md:h-[480px] max-[500px]:h-[220px] object-cover object-top parallax"
//             style={noirStyle}
//           />
//         </div>
//         {/* <div className="w-full stagger-item h-[280px] md:h-[450px] overflow-hidden rounded-lg shadow-lg">
//           <img
//             src={pastorImg}
//             className="w-full h-full object-cover object-top parallax"
//             style={noirStyle}
//           />
//         </div> */}

//         <div className="space-y-6 stagger-item">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Welcome to the Itedo Yiyanju Family!
//           </h2>

//           <p className="text-lg text-gray-200 leading-relaxed">
//             You’re in the right place to grow in faith, experience God’s love,
//             and walk closer with Him. We believe the Lord has amazing plans for
//             you, and we’re excited to be part of your journey. You are loved,
//             valued, and celebrated. Welcome to the family of Love and Growth!
//           </p>


//           <div>
//             <p className="italic text-gray-300">With an unquenchable love,</p>
//             <p className="font-semibold text-xl">
//               Pst. Samson Akin-Olugbade (JP)
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// const noirStyle = {
//   filter: 'grayscale(100%) contrast(140%) brightness(65%)',
//   transition: 'filter 0.4s ease', // Smoothly transitions the effect
//   maxWidth: '100%',
//   // height: '570px'
// };

// export default WelcomeSection;


import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, ArrowRight } from "lucide-react";
import pastorImg from "@/assets/daddy.png";

gsap.registerPlugin(ScrollTrigger);

const WelcomeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [imageHovered, setImageHovered] = useState(false);

  // useEffect(() => {
  //   if (!sectionRef.current) return;

  //   const ctx = gsap.context(() => {
  //     // Image reveal
  //     gsap.from(".welcome-image-wrapper", {
  //       scrollTrigger: {
  //         trigger: ".welcome-image-wrapper",
  //         start: "top 80%",
  //         end: "top 30%",
  //         toggleActions: "play none none reverse",
  //       },
  //       x: -80,
  //       opacity: 0,
  //       duration: 1.2,
  //       ease: "power3.out",
  //     });

  //     // Image overlay wipe
  //     gsap.from(".welcome-image-overlay", {
  //       scrollTrigger: {
  //         trigger: ".welcome-image-wrapper",
  //         start: "top 75%",
  //         toggleActions: "play none none reverse",
  //       },
  //       scaleX: 1,
  //       transformOrigin: "left center",
  //       duration: 1,
  //       ease: "power3.inOut",
  //     });

  //     // Content stagger
  //     gsap.from(".welcome-content-item", {
  //       scrollTrigger: {
  //         trigger: contentRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.15,
  //       ease: "power3.out",
  //     });

  //     // Decorative line grow
  //     gsap.from(".welcome-accent-line", {
  //       scrollTrigger: {
  //         trigger: ".welcome-accent-line",
  //         start: "top 85%",
  //         toggleActions: "play none none reverse",
  //       },
  //       scaleX: 0,
  //       transformOrigin: "left center",
  //       duration: 1,
  //       ease: "power3.out",
  //     });

  //     // Stats counter animation
  //     gsap.from(".welcome-stat", {
  //       scrollTrigger: {
  //         trigger: ".welcome-stats",
  //         start: "top 85%",
  //         toggleActions: "play none none reverse",
  //       },
  //       y: 30,
  //       opacity: 0,
  //       duration: 0.6,
  //       stagger: 0.1,
  //       ease: "power3.out",
  //     });

  //     // Parallax on the image
  //     gsap.to(".welcome-parallax-img", {
  //       scrollTrigger: {
  //         trigger: ".welcome-image-wrapper",
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: 1,
  //       },
  //       y: -40,
  //       ease: "none",
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image reveal
      gsap.from(".welcome-image-wrapper", {
        scrollTrigger: {
          trigger: ".welcome-image-wrapper",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Content stagger
      gsap.from(".welcome-content-item", {
        scrollTrigger: {
          trigger: ".welcome-content-item",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Accent line grow
      gsap.from(".welcome-accent-line", {
        scrollTrigger: {
          trigger: ".welcome-accent-line",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power3.out",
      });

      // Parallax on the image
      gsap.to(".welcome-parallax-img", {
        scrollTrigger: {
          trigger: ".welcome-image-wrapper",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -40,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050a18] py-24 md:py-32"
    >
      {/* Background subtle elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#d4a843]/5 blur-[150px]" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#1a2f5a]/20 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="welcome-content-item mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4a843]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a843]">
              A Word from the Pastor
            </span>
          </div>
        </div>

        {/* Main two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left: Image ── */}
          <div
            ref={imageContainerRef}
            className="welcome-image-wrapper relative"
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-2xl border border-[#d4a843]/10" />
            <div className="absolute -inset-6 rounded-3xl border border-white/[0.03]" />

            {/* Corner accents */}
            <div className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-[#d4a843]/40 rounded-tl-lg" />
            <div className="absolute -right-3 -top-3 h-6 w-6 border-r-2 border-t-2 border-[#d4a843]/40 rounded-tr-lg" />
            <div className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-[#d4a843]/40 rounded-bl-lg" />
            <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-[#d4a843]/40 rounded-br-lg" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-xl">
              <div className="aspect-[3/4] w-full overflow-hidden md:aspect-[4/5]">
                <img
                  src={pastorImg}
                  alt="Pastor Samson Akin-Olugbade"
                  className={
                    "welcome-parallax-img h-full w-full object-cover object-top transition-all duration-700 " +
                    (imageHovered
                      ? "scale-105 grayscale-0"
                      : "scale-100 grayscale")
                  }
                  style={{
                    filter: imageHovered
                      ? "grayscale(0%) contrast(110%) brightness(90%)"
                      : "grayscale(100%) contrast(130%) brightness(70%)",
                  }}
                />
              </div>

              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] via-[#050a18]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050a18]/30 to-transparent" />

              {/* Name overlay at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#d4a843]/60 to-transparent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#d4a843]">
                    Senior Pastor
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                  Pst. Samson Akin-Olugbade{" "}
                  <span className="text-sm font-normal text-white/50">(JP)</span>
                </h3>
              </div>

              {/* Gold shimmer line at top */}
              <div
                className="absolute left-0 right-0 top-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #d4a843, transparent)",
                }}
              />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div ref={contentRef} className="flex flex-col justify-center">
            {/* Quote icon */}
            <div className="welcome-content-item mb-6">
              <Quote className="h-10 w-10 text-[#d4a843]/30" />
            </div>

            {/* Title */}
            <h2 className="welcome-content-item mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Welcome to the{" "}
              <span className="bg-gradient-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
                Itedo Yiyanju
              </span>{" "}
              Family!
            </h2>

            {/* Accent line */}
            <div className="welcome-accent-line mb-8 h-[2px] w-20 bg-gradient-to-r from-[#d4a843] to-transparent" />

            {/* Message paragraphs */}
            <p className="welcome-content-item mb-6 text-lg leading-relaxed text-white/60">
              You're in the right place to grow in faith, experience God's love,
              and walk closer with Him. We believe the Lord has amazing plans for
              you, and we're excited to be part of your journey.
            </p>

            <p className="welcome-content-item mb-8 text-lg leading-relaxed text-white/60">
              You are loved, valued, and celebrated. Welcome to the family of
              Love and Growth! This is Bethel, the House of Bread.
            </p>

            {/* Signature */}
            <div className="welcome-content-item mb-10 rounded-xl border border-white/5 bg-white/[0.02] p-5">
              <p className="mb-1 text-sm italic text-white/40">
                With an unquenchable love,
              </p>
              <div className="flex items-center justify-between">
                <p className="bg-gradient-to-r from-[#d4a843] to-[#f0d78c] bg-clip-text text-lg font-semibold text-transparent">
                  Pst. Samson Akin-Olugbade (JP)
                </p>
                {/* Decorative signature line */}
                <div className="hidden h-px w-16 bg-gradient-to-r from-[#d4a843]/40 to-transparent sm:block" />
              </div>
            </div>

            {/* CTA link */}
            <a
              href="/about-itedo/#pastorate"
              className="welcome-content-item group inline-flex w-fit items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-6 py-3 text-sm font-semibold text-[#d4a843] transition-all duration-500 hover:border-[#d4a843]/40 hover:bg-[#d4a843]/10 hover:shadow-[0_0_20px_rgba(212,168,67,0.1)]"
            >
              Learn more about our Pastor
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/20 to-transparent" />
    </section>
  );
};

export default WelcomeSection;