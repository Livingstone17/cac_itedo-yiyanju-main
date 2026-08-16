import {useEffect, useRef, useState} from "react"
import {Calendar, ArrowRight, Users, Mail} from "lucide-react"
import Footer from "@/components/Footer"
import {addSchemaToHead} from "@/lib/schema"
import {HashLink} from "react-router-hash-link"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import choir from "../assets/choir.jpg"
import youth from "../assets/program.jpg"
import prayer from "../assets/prayer.jpg"
import ss from "../assets/sunday_school.jpg"
import media from "../assets/front_shirt.png"
import usher from "../assets/usher.jpg"

gsap.registerPlugin(ScrollTrigger)

const allMinistries = [
  {
    id: 1,
    name: "Worship & Music",
    tag: "Worship",
    shortDescription: "Leading hearts into God's presence through spirit-filled praise and worship",
    fullDescription: "The Worship & Music ministry is dedicated to creating an atmosphere where hearts are lifted and lives are transformed in God's presence. Through spirit-led praise, worship, and musical excellence, we help draw people closer to Christ.",
    schedule: "Thursdays & Saturdays, 5:00 PM",
    image: choir,
    accent: "#d4a843",
  },
  {
    id: 2,
    name: "Prayer & Intercession",
    tag: "Prayer",
    shortDescription: "Standing in the gap through fervent and effectual prayer",
    fullDescription: "The Prayer & Intercession ministry is committed to seeking the face of God on behalf of the church, families, and nations. Through consistent and heartfelt prayer, we birth God's will on earth and invite divine intervention.",
    schedule: "Daily & Special Prayer Sessions",
    image: prayer,
    accent: "#8b5cf6",
  },
  {
    id: 3,
    name: "Youth & Young Adults",
    tag: "Community",
    shortDescription: "Raising a generation rooted in Christ and purpose",
    fullDescription: "The Youth & Young Adults ministry is focused on discipling and empowering young believers to discover their identity and purpose in Christ. Through mentorship, teaching, and engaging programs, we equip them to live boldly.",
    schedule: "2nd Fridays, 11:00 PM",
    image: youth,
    accent: "#3b82f6",
  },
  {
    id: 4,
    name: "Teens Growth",
    tag: "Discipleship",
    shortDescription: "Nurturing teens into grounded and Spirit-led believers",
    fullDescription: "The Teens Growth ministry is devoted to nurturing teenagers in their walk with God, helping them build a strong spiritual foundation early in life through discipleship, fellowship, and mentorship.",
    schedule: "To be announced",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    accent: "#10b981",
  },
  {
    id: 5,
    name: "Sunday School & Teaching",
    tag: "Teaching",
    shortDescription: "Deepening faith through sound biblical teaching",
    fullDescription: "The Sunday School & Teaching ministry is dedicated to grounding believers in the Word of God. Through structured teaching, Bible study, and discipleship classes, we help members grow in spiritual understanding.",
    schedule: "Saturdays 4:00 PM - 6:00 PM",
    image: ss,
    accent: "#f59e0b",
  },
  {
    id: 6,
    name: "Pastoral Care",
    tag: "Care",
    shortDescription: "Walking with believers through every season of life",
    fullDescription: "The Pastoral Care ministry provides spiritual support, counseling, and encouragement to members. With compassion and wisdom, we stand with individuals and families in times of need, offering prayer and biblical counsel.",
    schedule: "By Appointment",
    contact: "+2348033072838",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    accent: "#ef4444",
  },
  {
    id: 7,
    name: "Media & Technical",
    tag: "Media",
    shortDescription: "Amplifying the message of Christ through media and technology",
    fullDescription: "The Media & Technical team serves as a vital channel for spreading the gospel beyond the walls of the church. Through excellence in audio-visual production and live streaming, they ensure every message is clearly seen and heard.",
    schedule: "By Appointment",
    contact: "+234 816 422 4586",
    image: media,
    accent: "#0ea5e9",
  },
  {
    id: 8,
    name: "Ushering & Protocol",
    tag: "Service",
    shortDescription: "Ensuring order, warmth, and excellence in every worship experience",
    fullDescription: "The Ushering and Protocol team serves as the church's first point of contact, creating a welcoming and orderly atmosphere. They guide seating, coordinate movement during services, and uphold reverence in God's house.",
    schedule: "By Appointment",
    contact: "+234 816 422 4586",
    image: usher,
    accent: "#d4a843",
  },
]

function MinistryCard({ministry, index, isAlternate}: {ministry: (typeof allMinistries)[0]; index: number; isAlternate: boolean}) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        x: isAlternate ? 40 : -40,
        duration: 0.9,
        ease: "power3.out",
      })
    }, cardRef)
    return () => ctx.revert()
  }, [isAlternate])

  return (
    <div ref={cardRef} className={`group grid items-center gap-6 md:gap-10 lg:gap-14 ${isAlternate ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {/* Image */}
      <div className={`relative ${isAlternate ? "lg:order-2" : ""}`}>
        {/* Frame */}
        <div className="absolute -inset-2 rounded-2xl border border-[#d4a843]/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <div className="absolute -top-2 -left-2 h-5 w-5 rounded-tl-lg border-t-2 border-l-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{borderColor: `${ministry.accent}60`}} />
        <div className="absolute -right-2 -bottom-2 h-5 w-5 rounded-br-lg border-r-2 border-b-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{borderColor: `${ministry.accent}60`}} />

        <div className="relative overflow-hidden rounded-2xl">
          <div className="aspect-4/3 w-full overflow-hidden">
            <img src={ministry.image} alt={ministry.name} className={`h-full w-full object-cover transition-all duration-700 ${hovered ? "scale-110 grayscale-0" : "scale-100 grayscale-30"}`} />
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          <div
            className="absolute top-0 right-0 left-0 h-0.75 transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${ministry.accent}, transparent)`,
              opacity: hovered ? 1 : 0.4,
            }}
          />

          {/* Tag */}
          <div className="absolute top-4 left-4">
            <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase backdrop-blur-md" style={{backgroundColor: `${ministry.accent}30`}}>
              {ministry.tag}
            </span>
          </div>

          {/* Number */}
          <div className="absolute right-4 bottom-4">
            <span className="text-4xl font-black opacity-20 transition-opacity duration-500 group-hover:opacity-40" style={{color: ministry.accent}}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={isAlternate ? "lg:order-1 lg:text-right" : ""}>
        {/* Number + Line */}
        <div className={`mb-4 flex items-center gap-3 ${isAlternate ? "lg:flex-row-reverse" : ""}`}>
          <span className="text-xs font-bold tracking-wider opacity-50" style={{color: ministry.accent}}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div
            className="h-px flex-1 opacity-20"
            style={{
              background: isAlternate ? `linear-gradient(270deg, ${ministry.accent}, transparent)` : `linear-gradient(90deg, ${ministry.accent}, transparent)`,
            }}
          />
        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#d4a843] md:text-3xl lg:text-4xl dark:text-white">{ministry.name}</h2>

        {/* Short description */}
        <p className="mb-4 text-sm font-semibold tracking-wide" style={{color: ministry.accent}}>
          {ministry.shortDescription}
        </p>

        {/* Full description */}
        <p className="mb-6 text-base leading-relaxed text-gray-500 dark:text-white/50">{ministry.fullDescription}</p>

        {/* Info rows */}
        <div className={`space-y-3 ${isAlternate ? "lg:ml-auto lg:max-w-sm" : "max-w-sm"}`}>
          <div className={`flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 transition-all duration-300 hover:border-[#d4a843]/20 dark:border-white/5 dark:bg-white/2 ${isAlternate ? "lg:flex-row-reverse lg:text-right" : ""}`}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{backgroundColor: `${ministry.accent}15`}}>
              <Calendar className="h-4 w-4" style={{color: ministry.accent}} />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase dark:text-white/30">Schedule</p>
              <p className="text-sm font-medium text-gray-700 dark:text-white/70">{ministry.schedule}</p>
            </div>
          </div>

          {ministry.contact && (
            <div className={`flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 transition-all duration-300 hover:border-[#d4a843]/20 dark:border-white/5 dark:bg-white/2 ${isAlternate ? "lg:flex-row-reverse lg:text-right" : ""}`}>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{backgroundColor: `${ministry.accent}15`}}>
                <Mail className="h-4 w-4" style={{color: ministry.accent}} />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase dark:text-white/30">Contact</p>
                <p className="text-sm font-medium text-gray-700 dark:text-white/70">{ministry.contact}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function MinistriesPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const ministriesSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "CAC Itedo Yiyanju Ministries",
      url: "https://cacitedoyiyanju.org/ministries",
      description: "Explore all ministries at CAC Itedo Yiyanju. Find your place to serve and grow in faith.",
      isPartOf: {
        "@type": "WebSite",
        name: "CAC Itedo Yiyanju",
        url: "https://cacitedoyiyanju.org",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {"@type": "ListItem", position: 1, name: "Home", item: "https://cacitedoyiyanju.org"},
          {
            "@type": "ListItem",
            position: 2,
            name: "Ministries",
            item: "https://cacitedoyiyanju.org/ministries",
          },
        ],
      },
    }
    addSchemaToHead(ministriesSchema)
  }, [])

  useEffect(() => {
    if (!pageRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(".ministries-badge", {
        scrollTrigger: {trigger: ".ministries-badge", start: "top 92%", toggleActions: "play none none reverse"},
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
      })
      gsap.from(".ministries-heading", {
        scrollTrigger: {trigger: ".ministries-heading", start: "top 90%", toggleActions: "play none none reverse"},
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })
      gsap.from(".ministries-desc", {
        scrollTrigger: {trigger: ".ministries-desc", start: "top 92%", toggleActions: "play none none reverse"},
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      })
      gsap.from(".ministries-count", {
        scrollTrigger: {trigger: ".ministries-count", start: "top 92%", toggleActions: "play none none reverse"},
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      })
      gsap.from(".cta-section", {
        scrollTrigger: {trigger: ".cta-section", start: "top 90%", toggleActions: "play none none reverse"},
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-white pt-16 dark:bg-[#050a18]">
      {/* ── Hero Header ── */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-3 dark:opacity-[0.015]"
            style={{
              backgroundImage: "linear-gradient(rgba(212,168,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute top-0 -right-40 h-100 w-100 rounded-full bg-[#d4a843]/5 blur-[140px] dark:bg-[#d4a843]/3" />
          <div className="absolute bottom-0 -left-40 h-75 w-75 rounded-full bg-blue-500/3 blur-[100px] dark:bg-[#1a2f5a]/10" />
        </div>

        <div className="relative z-10 container mx-auto max-w-5xl px-6">
          <div className="ministries-badge mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
            <Users className="h-3.5 w-3.5 text-[#d4a843]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#d4a843] uppercase">Our Ministries</span>
          </div>

          <h1 className="ministries-heading mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Get <span className="bg-linear-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">Involved</span>
          </h1>

          <p className="ministries-desc mb-10 max-w-3xl text-lg leading-relaxed text-gray-500 dark:text-white/50">Our ministries are expressions of our mandate as a church and community. We serve God by His Spirit — joyfully. There's a place for everyone to grow, serve, and discover their purpose in Christ.</p>

          {/* Quick stat pills */}
          <div className="flex flex-wrap gap-3">
            {[
              {label: "Ministries", value: allMinistries.length},
              {label: "Volunteers", value: "100+"},
              {label: "Lives Touched", value: "1000+"},
            ].map((s) => (
              <div key={s.label} className="ministries-count rounded-full border border-gray-200/80 bg-gray-50/80 px-4 py-2 dark:border-white/6 dark:bg-white/2">
                <span className="mr-1.5 font-bold text-[#d4a843]">{s.value}</span>
                <span className="text-sm text-gray-500 dark:text-white/40">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent via-[#d4a843]/15 to-transparent" />
      </section>

      {/* ── Ministry Cards ── */}
      <section className="relative py-10 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {allMinistries.map((ministry, i) => (
              <MinistryCard key={ministry.id} ministry={ministry} index={i} isAlternate={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-100 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4a843]/4 blur-[140px] dark:bg-[#d4a843]/3" />
        </div>

        <div className="cta-section relative z-10 container mx-auto max-w-3xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4a843]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#d4a843] uppercase">Join Us</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Ready to Get <span className="bg-linear-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">Involved?</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base text-gray-500 md:text-lg dark:text-white/40">Whether you're looking to serve, grow spiritually, or make a difference — there's a ministry perfect for you. Reach out to learn more.</p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <HashLink smooth to="/#contact" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-[#d4a843] to-[#b8922e] px-8 py-4 text-base font-semibold text-[#0a1628] shadow-[0_0_25px_rgba(212,168,67,0.2)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,168,67,0.35)]">
              <span className="absolute inset-0 bg-linear-to-r from-[#f0d78c] to-[#d4a843] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </HashLink>

            <a href="mailto:cacitedoyiyanju@gmail.com" className="group inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-8 py-4 text-base font-semibold text-gray-700 backdrop-blur-sm transition-all duration-500 hover:border-[#d4a843]/40 hover:text-[#d4a843] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-[#d4a843]/30 dark:hover:text-[#d4a843]">
              <Mail className="h-4 w-4" />
              Email Pastoral Office
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent via-[#d4a843]/15 to-transparent" />
      </section>

      <Footer />
    </div>
  )
}
