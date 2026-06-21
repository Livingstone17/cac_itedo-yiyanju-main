
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import pastorImg from "@/assets/daddy.png";
import pastorImg2 from "@/assets/dadi.png";

// gsap.registerPlugin(ScrollTrigger);

const WelcomeSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);



  return (
    <section className="reveal bg-black text-white py-16 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center stagger">

        <div className="w-full stagger-item">
          <img
            src={pastorImg}
            className="rounded-lg shadow-lg w-full md:h-[480px] max-[500px]:h-[220px] object-cover object-top parallax"
            style={noirStyle}
          />
        </div>
        {/* <div className="w-full stagger-item h-[280px] md:h-[450px] overflow-hidden rounded-lg shadow-lg">
          <img
            src={pastorImg}
            className="w-full h-full object-cover object-top parallax"
            style={noirStyle}
          />
        </div> */}

        <div className="space-y-6 stagger-item">
          <h2 className="text-3xl md:text-4xl font-bold">
            Welcome to the Itedo Yiyanju Family!
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            You’re in the right place to grow in faith, experience God’s love,
            and walk closer with Him. We believe the Lord has amazing plans for
            you, and we’re excited to be part of your journey. You are loved,
            valued, and celebrated. Welcome to the family of Love and Growth!
          </p>


          <div>
            <p className="italic text-gray-300">With an unquenchable love,</p>
            <p className="font-semibold text-xl">
              Pst. Samson Akin-Olugbade (JP)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

const noirStyle = {
  filter: 'grayscale(100%) contrast(140%) brightness(65%)',
  transition: 'filter 0.4s ease', // Smoothly transitions the effect
  maxWidth: '100%',
  // height: '570px'
};

export default WelcomeSection;
