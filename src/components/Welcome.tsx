// import React, { useState } from "react";
// import pastorImg from "@/assets/preach2.jpeg"; // replace with your actual image path

// const WelcomeSection = () => {
//   return (
//     <section className="bg-black text-white py-16">
//       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//         {/* Left Image */}
//         <div className="w-full">
//           <img
//             src={pastorImg}
//             alt="Pastor preaching"
//             className="rounded-lg shadow-lg w-full object-cover"
//             style={{ height: '350px' }}
//           />
//         </div>

//         {/* Right Text */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold leading-tight">
//             Welcome to the Itedo Yiyanju Family!
//           </h2>
//           <p className="text-lg text-gray-200 leading-relaxed">
//             You’re in the right place to grow in faith, experience God’s love, 
//             and walk closer with Him. We believe the Lord has amazing plans for you, 
//             and we’re excited to be part of your journey. You are loved, valued, and 
//             celebrated. Welcome to the family of Love and Growth!
//           </p>

//           <div className="mt-6">
//             <p className="italic text-gray-300">
//               With an unquenchable love,
//             </p>
//             <p className="font-semibold text-xl">
//               Pst. Samson Akin-Olugbade (JP)
//             </p>
//             <p className="text-gray-400">Presiding Pastor,  CAC, Itedo Yiyanju</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeSection;
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pastorImg from "@/assets/daddy.jpg";

gsap.registerPlugin(ScrollTrigger);

const WelcomeSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const imgEl = imgRef.current;
    const textEl = textRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: "top 80%", // starts when section is near viewport
        toggleActions: "play none none reverse", // replay when re-entered
      },
    });

    tl.from(imgEl, {
      opacity: 0,
      y: 80,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
    }).from(
      textEl,
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6" // overlap with previous animation
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full" ref={imgRef}>
          <img
            src={pastorImg}
            alt="Pastor preaching"
            className="rounded-lg shadow-lg w-full object-cover object-top"
            style={{ height: "470px" }}
          />
        </div>

        {/* Right Text */}
        <div ref={textRef} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Welcome to the Itedo Yiyanju Family!
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            You’re in the right place to grow in faith, experience God’s love,
            and walk closer with Him. We believe the Lord has amazing plans for
            you, and we’re excited to be part of your journey. You are loved,
            valued, and celebrated. Welcome to the family of Love and Growth!
          </p>

          <div className="mt-6">
            <p className="italic text-gray-300">With an unquenchable love,</p>
            <p className="font-semibold text-xl">
              Pst. Samson Akin-Olugbade (JP)
            </p>
            <p className="text-gray-400">
              Presiding Pastor, CAC, Itedo Yiyanju
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
