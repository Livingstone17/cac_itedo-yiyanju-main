import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const usePageAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // SECTION REVEAL (applies everywhere)
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });

      // STAGGER CHILDREN
      gsap.utils.toArray<HTMLElement>(".stagger").forEach((container) => {
        const items = container.querySelectorAll(".stagger-item");

        gsap.from(items, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
          },
        });
      });

      // PARALLAX IMAGE
      gsap.utils.toArray<HTMLElement>(".parallax").forEach((el) => {
        gsap.to(el, {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // FADE IN TEXT
      gsap.utils.toArray<HTMLElement>(".fade-in").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
};