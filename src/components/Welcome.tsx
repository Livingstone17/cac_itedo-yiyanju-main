import {useEffect, useRef, useState} from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {Quote, ArrowRight} from "lucide-react"
import pastorImg from "@/assets/daddy.png"

gsap.registerPlugin(ScrollTrigger)

const WelcomeSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [imageHovered, setImageHovered] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

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
      })

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
      })

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
      })

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
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0a0d14] py-24 md:py-32">
      {/* Background subtle elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-2"
          style={{
            backgroundImage: "linear-gradient(rgba(212,168,67,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 -left-32 h-125 w-125 -translate-y-1/2 rounded-full bg-[#d4a843]/5 blur-[150px]" />
        <div className="absolute -right-32 bottom-0 h-100 w-100 rounded-full bg-[#1a2f5a]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="welcome-content-item mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4a843]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#d4a843] uppercase">A Word from the Pastor</span>
          </div>
        </div>

        {/* Main two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left: Image ── */}
          <div ref={imageContainerRef} className="welcome-image-wrapper relative" onMouseEnter={() => setImageHovered(true)} onMouseLeave={() => setImageHovered(false)}>
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-2xl border border-[#d4a843]/10" />
            <div className="absolute -inset-6 rounded-3xl border border-white/3" />

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 h-6 w-6 rounded-tl-lg border-t-2 border-l-2 border-[#d4a843]/40" />
            <div className="absolute -top-3 -right-3 h-6 w-6 rounded-tr-lg border-t-2 border-r-2 border-[#d4a843]/40" />
            <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-[#d4a843]/40" />
            <div className="absolute -right-3 -bottom-3 h-6 w-6 rounded-br-lg border-r-2 border-b-2 border-[#d4a843]/40" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-xl">
              {/* <div className="aspect-[3/4] w-full overflow-hidden md:aspect-[3/4]"> */}
              <div className="aspect-4/3 w-full overflow-hidden md:aspect-5/4">
                <img
                  src={pastorImg}
                  alt="Pastor Samson Akin-Olugbade"
                  className={
                    // "welcome-parallax-img h-full w-full object-cover object-top transition-all duration-700 " +
                    "welcome-parallax-img h-full w-full object-cover object-[center_0%] transition-all duration-700 " + (imageHovered ? "scale-105 grayscale-0" : "scale-100 grayscale")
                  }
                  style={{
                    filter: imageHovered ? "grayscale(0%) contrast(110%) brightness(90%)" : "grayscale(100%) contrast(130%) brightness(70%)",
                  }}
                />
              </div>

              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#050a18] via-[#050a18]/20 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-[#050a18]/30 to-transparent" />

              {/* Name overlay at bottom of image */}
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-linear-to-r from-[#d4a843]/60 to-transparent" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#d4a843] uppercase">Senior Pastor</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                  Pst. Samson Akin-Olugbade <span className="text-sm font-normal text-white/50">(JP)</span>
                </h3>
              </div>

              {/* Gold shimmer line at top */}
              <div
                className="absolute top-0 right-0 left-0 h-0.5"
                style={{
                  background: "linear-gradient(90deg, transparent, #d4a843, transparent)",
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
            <h2 className="welcome-content-item mb-6 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Welcome to the <span className="bg-linear-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">Itedo Yiyanju</span> Family!
            </h2>

            {/* Accent line */}
            <div className="welcome-accent-line mb-8 h-0.5 w-20 bg-linear-to-r from-[#d4a843] to-transparent" />

            {/* Message paragraphs */}
            <p className="welcome-content-item mb-6 text-lg leading-relaxed text-white/60">You're in the right place to grow in faith, experience God's love, and walk closer with Him. We believe the Lord has amazing plans for you, and we're excited to be part of your journey.</p>

            <p className="welcome-content-item mb-8 text-lg leading-relaxed text-white/60">You are loved, valued, and celebrated. Welcome to the family of Love and Growth! This is Bethel, the House of Bread.</p>

            {/* Signature */}
            <div className="welcome-content-item mb-10 rounded-xl border border-white/5 bg-white/2 p-5">
              <p className="mb-1 text-sm text-white/40 italic">With an unquenchable love,</p>
              <div className="flex items-center justify-between">
                <p className="bg-linear-to-r from-[#d4a843] to-[#f0d78c] bg-clip-text text-lg font-semibold text-transparent">Pst. Samson Akin-Olugbade (JP)</p>
                {/* Decorative signature line */}
                <div className="hidden h-px w-16 bg-linear-to-r from-[#d4a843]/40 to-transparent sm:block" />
              </div>
            </div>

            {/* CTA link */}
            <a href="/about-itedo/#pastorate" className="welcome-content-item group inline-flex w-fit items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-6 py-3 text-sm font-semibold text-[#d4a843] transition-all duration-500 hover:border-[#d4a843]/40 hover:bg-[#d4a843]/10 hover:shadow-[0_0_20px_rgba(212,168,67,0.1)]">
              Learn more about our Pastor
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent via-[#d4a843]/20 to-transparent" />
    </section>
  )
}

export default WelcomeSection
