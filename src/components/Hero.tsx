import {useEffect, useRef, useState} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ArrowUpRight, MapPin, CalendarDays, Clock} from "lucide-react"
import {useLiveStatus} from "@/contexts/LiveStatusContext"

import heroImage from "@/assets/church1.jpg"
import heroImage2 from "@/assets/church.png"
import heroImage3 from "@/assets/church3.jpg"
import heroImage4 from "@/assets/church4.jpg"
import heroImage5 from "@/assets/church7.jpg"

const churchImages = [heroImage, heroImage2, heroImage3, heroImage4, heroImage5]

gsap.registerPlugin(ScrollTrigger)

const openMaps = () => {
  const lat = 6.671838
  const lng = 3.251764
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const isAndroid = /Android/.test(navigator.userAgent)
  if (isIOS) window.open(`http://maps.apple.com/?daddr=${lat},${lng}`, "_blank")
  else if (isAndroid) window.open(`geo:${lat},${lng}?q=${lat},${lng}(CAC Itedo Yiyanju)`, "_blank")
  else window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank")
}

const goToLivestream = () => {
  window.location.href = "/listen/video"
}

// ── Typewriter Hook ────────────────────────────────────────────────

const heroPhrases = [
  "Welcome to Itedo Yiyanju — a sanctuary of worship, love and revelatory teaching in the heart of Lagos.",
  "A place of Worship, Love, Revelatory Teachings and Prayers.",
  "Join us as we learn Christ, experience transformation and manifest the GOD Life here on earth.",
]

const useTypewriter = (texts: string[], typingSpeed = 42, deletingSpeed = 18, pauseTime = 2400) => {
  const [displayedText, setDisplayedText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (texts.length === 0) return
    const currentText = texts[textIndex]

    // Full phrase typed — pause, then start deleting
    if (!isDeleting && charIndex === currentText.length) {
      const t = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(t)
    }

    // Fully deleted — advance to the next phrase
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const t = setTimeout(
      () => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
        setDisplayedText(currentText.substring(0, charIndex + (isDeleting ? -1 : 1)))
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )
    return () => clearTimeout(t)
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return displayedText
}

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const {isLive} = useLiveStatus()
  const [active, setActive] = useState(0)
  const displayedSubline = useTypewriter(heroPhrases)

  // Gentle looping crossfade between church photos
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % churchImages.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({defaults: {ease: "power4.out"}})

      tl.from(".hero-overline", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        delay: 0.15,
      })
        .from(".hero-line", {yPercent: 115, duration: 1.1, stagger: 0.14, ease: "power4.out"}, "-=0.3")
        .from(".hero-sub", {opacity: 0, y: 22, duration: 0.8}, "-=0.55")
        .from(".hero-cta", {opacity: 0, y: 22, duration: 0.7, stagger: 0.09}, "-=0.5")
        .from(".hero-meta", {opacity: 0, y: 16, duration: 0.7}, "-=0.4")
        .from(
          ".hero-media",
          {
            clipPath: "inset(10% 14% 10% 14%)",
            scale: 1.06,
            duration: 1.3,
            ease: "power3.out",
          },
          0.3,
        )
        .from(".hero-chip", {opacity: 0, y: 20, scale: 0.96, duration: 0.7, ease: "power3.out"}, "-=0.6")
        .from(".hero-scroll", {opacity: 0, duration: 0.8}, "-=0.3")

      // Gentle parallax on the image
      gsap.to(".hero-img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      })

      // Content drifts up slightly as you scroll away
      gsap.to(".hero-content", {
        yPercent: -6,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="home" className="bg-background relative overflow-hidden">
      {/* ── Atmosphere: soft light + hairline grid ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-50 dark:opacity-25"
          style={{
            backgroundImage: "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(217,119,6,0.06), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 90%, rgba(120,113,108,0.05), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-35 dark:opacity-12"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(168,162,158,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,162,158,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto flex min-h-[max(600px,30vh)] flex-col justify-center px-6 pt-28 pb-16 sm:px-8 lg:px-12 lg:pt-32 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ── Left: Typography ── */}
          <div className="hero-content lg:col-span-7 xl:col-span-6">
            {/* Overline */}
            <div className="hero-overline mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#a16207]/40 dark:bg-[#d4a843]/40" />
              <span className="text-[11px] font-semibold tracking-[0.28em] text-[#a16207] uppercase dark:text-[#d4a843]">Itedo Yiyanju</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(3rem,7.5vw,5.75rem)] leading-[1.04] font-medium tracking-[-0.02em] text-[#17181c] dark:text-white">
              <span className="block overflow-hidden pb-1">
                <span className="hero-line block">A place where</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-line block">
                  <span className="text-[#a16207] italic dark:text-[#d4a843]">heaven</span> meets
                </span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="hero-line block">earth.</span>
              </span>
            </h1>

            {/* Subline — typewriter effect */}
            <p className="hero-sub mt-7 min-h-22 max-w-md text-lg leading-relaxed text-[#55565c] dark:text-stone-400">
              <span>
                {displayedSubline}
                <span className="ml-0.5 inline-block h-[1.15em] w-0.5 translate-y-[0.18em] bg-[#a16207] dark:bg-[#d4a843]" style={{animation: "cursor-blink 1s step-end infinite"}} />
              </span>
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button onClick={goToLivestream} className="hero-cta group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#17181c] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2b2d33] hover:shadow-[0_16px_40px_-12px_rgba(23,24,28,0.45)] dark:bg-white dark:text-[#17181c] dark:hover:bg-stone-200 dark:hover:shadow-[0_16px_40px_-12px_rgba(255,255,255,0.25)]">
                <span className="relative flex h-2 w-2">
                  {isLive && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />}
                  <span className={`relative inline-flex h-2 w-2 rounded-full ${isLive ? "bg-[#e5484d]" : "bg-current"}`} />
                </span>
                {isLive ? "Watch Live Now" : "Watch Live"}
              </button>

              <button onClick={openMaps} className="hero-cta group inline-flex items-center justify-center gap-2 rounded-full border border-[#17181c]/15 px-7 py-4 text-sm font-semibold text-[#17181c] transition-all duration-300 hover:border-[#17181c]/35 hover:bg-[#17181c]/3 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5">
                Plan Your Visit
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Meta hairline row */}
            <div className="hero-meta mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#17181c]/10 pt-6 dark:border-white/10">
              <span className="flex items-center gap-2 text-sm text-[#6f7076] dark:text-stone-400">
                <Clock className="h-4 w-4 text-[#a16207]/70 dark:text-[#d4a843]/70" />
                Sundays · 8:00 AM
              </span>
              <span className="flex items-center gap-2 text-sm text-[#6f7076] dark:text-stone-400">
                <MapPin className="h-4 w-4 text-[#a16207]/70 dark:text-[#d4a843]/70" />
                Alagbado, Lagos State
              </span>
            </div>
          </div>

          {/* ── Right: Borderless image — corners blend into the hero ── */}
          <div className="relative lg:col-span-5 xl:col-span-6">
            <div className="relative mx-auto max-w-xl lg:ml-auto lg:max-w-none">
              {/* Image — no frame, no rounded shape, edges melt into the hero */}
              <div className="hero-media relative overflow-hidden">
                <div
                  className="relative aspect-4/3 w-full overflow-hidden lg:aspect-4/5"
                  style={{
                    maskImage: "linear-gradient(to bottom, transparent, black 3.5%, black 96.5%, transparent), linear-gradient(to right, transparent, black 3.5%, black 96.5%, transparent)",
                    maskComposite: "intersect",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black 3.5%, black 96.5%, transparent), linear-gradient(to right, transparent, black 3.5%, black 96.5%, transparent)",
                    WebkitMaskComposite: "source-in",
                  }}
                >
                  {churchImages.map((img, i) => (
                    <img key={img} src={img} alt={`CAC Itedo Yiyanju church ${i + 1}`} className={`hero-img absolute inset-0 h-full w-full scale-112 object-cover transition-opacity duration-2200 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`} />
                  ))}
                  <div className="absolute inset-0 bg-linear-to-t from-[#17181c]/30 via-transparent to-transparent dark:from-black/50" />
                </div>

                {/* Glass chip */}
                <div className="hero-chip absolute right-5 bottom-5 left-5 flex items-center justify-between rounded-2xl border border-white/25 bg-white/75 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#17181c]/60">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17181c] dark:bg-white/10">
                      <CalendarDays className="h-4.5 w-4.5 text-white dark:text-[#d4a843]" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] text-[#a16207] uppercase dark:text-[#d4a843]">Next Service</p>
                      <p className="text-sm font-semibold text-[#17181c] dark:text-white">Sunday, 8:00 AM</p>
                    </div>
                  </div>
                  <span className="hidden rounded-full border border-[#17181c]/10 px-3 py-1 text-[11px] font-medium text-[#55565c] sm:block dark:border-white/15 dark:text-stone-300">Alagbado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-7 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-medium tracking-[0.32em] text-[#8a8b90] uppercase dark:text-stone-500">Scroll</span>
          <span className="relative h-10 w-px overflow-hidden bg-[#17181c]/10 dark:bg-white/10">
            <span className="absolute inset-x-0 top-0 h-3 animate-[scroll-dot_2s_ease-in-out_infinite] bg-[#a16207] dark:bg-[#d4a843]" />
          </span>
        </div>
      </div>

      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes scroll-dot {
          0% { transform: translateY(-100%); }
          60%, 100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  )
}

export default Hero;



