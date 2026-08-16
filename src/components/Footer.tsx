import {Input} from "@/components/ui/input"
import {Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Clock, Heart, ChevronUp, Send} from "lucide-react"
import logo from "@/assets/logo.png"
import {useNavigate, useLocation} from "react-router-dom"
import {scrollToSection} from "@/lib/scrollToSection"

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const quickLinks = [
    {label: "About Us", href: "#about", type: "anchor"},
    {label: "Ministries", href: "/ministries", type: "route"},
    {label: "Events", href: "/events", type: "route"},
    {label: "Sermons", href: "/sermons", type: "route"},
    {label: "Give", href: "/give", type: "route"},
    {label: "Contact", href: "#contact", type: "anchor"},
  ]

  const resourceLinks = [
    {label: "Watch Live", href: "/listen/video", type: "route"},
    {label: "Listen Live", href: "/listen/audio", type: "route"},
    {label: "CAC Hymnal", href: "https://cac-hymnal-pwa.vercel.app", type: "external"},
    {label: "Books", href: "/books", type: "route"},
  ]

  const socialLinks = [
    {icon: Facebook, href: "https://www.facebook.com/cacitedoyiyanju", label: "Facebook"},
    {icon: Instagram, href: "https://www.instagram.com/cacitedoyiyanju", label: "Instagram"},
    {icon: Youtube, href: "https://www.youtube.com/@cacitedoyiyanju", label: "YouTube"},
  ]

  const serviceTimes = [
    {day: "Sunday", service: "Worship Service", time: "7:00 AM"},
    {day: "Tuesday", service: "Bible Study", time: "5:00 PM"},
    {day: "Thursday", service: "Prayer Meeting", time: "8:00 AM"},
  ]

  const handleLinkClick = (link: {label: string; href: string; type: string}) => {
    if (link.type === "external") {
      window.open(link.href, "_blank", "noopener,noreferrer")
    } else if (link.type === "route") {
      navigate(link.href)
    } else {
      const sectionId = link.href.replace("#", "")
      if (location.pathname !== "/") {
        navigate("/")
        setTimeout(() => scrollToSection(sectionId), 0)
      } else {
        scrollToSection(sectionId)
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <footer className="bg-background relative overflow-hidden text-white">
      {/* Top gradient line */}
      <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-[#d4a843]/30 to-transparent" />

      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,168,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute bottom-0 -left-40 h-100 w-100 rounded-full bg-[#d4a843]/3 blur-[140px]" />
        <div className="absolute top-0 -right-40 h-75 w-75 rounded-full bg-[#1a2f5a]/20 blur-[100px]" />
      </div>

      {/* ── Service Times Banner ── */}
      <div className="relative z-10 border-b border-white/6">
        <div className="container mx-auto px-6 py-8">
          <div className="border-foreground/6 rounded-2xl border bg-white/2 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-px max-w-15 flex-1 bg-linear-to-r from-transparent to-[#d4a843]/40" />
              <div className="flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
                <Clock className="h-3.5 w-3.5 text-[#d4a843]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#d4a843] uppercase">Join Us To Fellowship</span>
              </div>
              <div className="h-px max-w-15 flex-1 bg-linear-to-l from-transparent to-[#d4a843]/40" />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {serviceTimes.map((s, i) => (
                <div key={i} className="group border-foreground/5 rounded-xl border bg-white/2 p-4 text-center transition-all duration-500 hover:border-[#d4a843]/20 hover:bg-white/4">
                  <span className="mb-1 block text-xs font-bold tracking-wider text-[#d4a843] uppercase">{s.day}</span>
                  <span className="text-foreground/70 block text-sm font-medium">{s.service}</span>
                  <span className="mt-1 inline-block rounded-full bg-[#d4a843]/10 px-3 py-0.5 text-xs font-bold text-[#d4a843]">{s.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Content ── */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Column 1: Church Info */}
            <div className="lg:col-span-4">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-[#d4a843] to-[#b8922e] shadow-md">
                  <img src={logo} alt="CAC Itedo Yiyanju logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <span className="text-foreground block text-lg font-bold">Itedo Yiyanju</span>
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-[#d4a843] uppercase">Christ Apostolic Church</span>
                </div>
              </div>

              <p className="text-foreground/40 mb-6 max-w-xs text-sm leading-relaxed">A community of believers committed to loving God, loving people, and making a difference in our world.</p>

              {/* Contact info */}
              <div className="space-y-3">
                {[
                  {icon: MapPin, text: "5, Matanmi Close, Oko-filling, Alagbado, Lagos"},
                  {icon: Phone, text: "(+234) 803-307-2838"},
                  {icon: Mail, text: "cacitedoyiyanju@gmail.com"},
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#d4a843]/10 transition-colors duration-300 group-hover:bg-[#d4a843]/20">
                      <item.icon className="h-3.5 w-3.5 text-[#d4a843]" />
                    </div>
                    <span className="text-foreground/40 group-hover:text-foreground/60 pt-1 text-sm transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-foreground mb-5 text-sm font-bold tracking-wider uppercase">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <button onClick={() => handleLinkClick(link)} className="group text-foreground/40 flex items-center gap-2 text-sm transition-all duration-300 hover:text-[#d4a843]">
                      <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="lg:col-span-2">
              <h4 className="text-foreground mb-5 text-sm font-bold tracking-wider uppercase">Resources</h4>
              <ul className="space-y-2.5">
                {resourceLinks.map((link, i) => (
                  <li key={i}>
                    <button onClick={() => handleLinkClick(link)} className="group text-foreground/40 flex items-center gap-2 text-sm transition-all duration-300 hover:text-[#d4a843]">
                      <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      <span>{link.label}</span>
                      {link.type === "external" && <span className="text-foreground/20 text-[10px]">↗</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter + Socials */}
            <div className="lg:col-span-4">
              <h4 className="text-foreground mb-5 text-sm font-bold tracking-wider uppercase">Stay Connected</h4>
              <p className="text-foreground/40 mb-4 text-sm">Subscribe for updates on events, sermons, and community news.</p>

              <form onSubmit={(e) => e.preventDefault()} className="mb-6 flex gap-2">
                <Input type="email" placeholder="Your email address" className="border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/25 flex-1 rounded-xl text-sm focus:border-[#d4a843]/50 focus:ring-[#d4a843]/20" />
                <button type="submit" className="text-background flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#d4a843] to-[#b8922e] shadow-[0_0_15px_rgba(212,168,67,0.2)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,168,67,0.35)]">
                  <Send className="h-4 w-4" />
                </button>
              </form>

              {/* Social links */}
              <div>
                <h5 className="text-foreground/30 mb-3 text-xs font-semibold tracking-wider uppercase">Follow Us</h5>
                <div className="flex gap-2">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon
                    return (
                      <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="group border-foreground/6 bg-foreground/2 flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-500 hover:border-[#d4a843]/30 hover:bg-[#d4a843]/10">
                        <Icon className="text-foreground/40 h-4 w-4 transition-colors duration-300 group-hover:text-[#d4a843]" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-foreground/6 relative z-10 border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          {/* Copyright */}
          <p className="text-foreground/30 flex items-center gap-1 text-xs">&copy; {new Date().getFullYear()} CAC Itedo Yiyanju. All rights reserved.</p>

          {/* Back to top */}
          <button onClick={scrollToTop} className="group border-foreground/6 bg-foreground/2 text-foreground/30 flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs transition-all duration-500 hover:border-[#d4a843]/20 hover:text-[#d4a843]">
            Back to top
            <ChevronUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// import {Button} from "@/components/ui/button"
// import {Input} from "@/components/ui/input"
// import {Facebook, Instagram, Youtube, Mail, Phone, MapPin} from "lucide-react"
// import logo from "@/assets/logo.png"
// import {useNavigate, useLocation} from "react-router-dom"
// import {scrollToSection} from "@/lib/scrollToSection"

// const Footer = () => {
//   const navigate = useNavigate()
//   const location = useLocation()

//   const quickLinks = [
//     {label: "About Us", href: "#about", type: "anchor"},
//     {label: "Sermons", href: "/sermons", type: "route"},
//     {label: "Give", href: "/give", type: "route"},
//     {label: "Contact", href: "#contact", type: "anchor"},
//   ]

//   const socialLinks = [
//     {
//       icon: Facebook,
//       href: "https://www.facebook.com/cacitedoyiyanju",
//       label: "Facebook",
//     },
//     {
//       icon: Instagram,
//       href: "https://www.instagram.com/cacitedoyiyanju",
//       label: "Instagram",
//     },
//     {
//       icon: Youtube,
//       href: "https://www.youtube.com/@cacitedoyiyanju",
//       label: "YouTube",
//     },
//   ]

//   const handleLinkClick = (link: {label: string; href: string; type: string}) => {
//     if (link.type === "route") {
//       navigate(link.href)
//     } else {
//       const sectionId = link.href.replace("#", "")
//       if (location.pathname !== "/") {
//         navigate("/")
//         setTimeout(() => scrollToSection(sectionId), 0)
//       } else {
//         scrollToSection(sectionId)
//       }
//     }
//   }

//   return (
//     <footer className="bg-church-blue-700 text-light dark:bg-church-blue-900">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* Church Info */}
//           <div className="lg:col-span-1">
//             <div className="mb-6 flex items-center space-x-2">
//               <div className="bg-church-gold-400 flex h-10 w-10 items-center justify-center rounded-lg">
//                 <img src={logo} alt="CAC Itedo Yiyanju logo" />
//               </div>
//               <span className="text-light text-xl font-bold">Itedo Yiyanju</span>
//             </div>

//             <p className="text-light/80 mb-6 leading-relaxed">A community of believers committed to loving God, loving people, and making a difference in our world.</p>

//             <div className="space-y-3">
//               <div className="text-light/80 flex items-center space-x-3">
//                 <MapPin className="text-church-gold-400 h-4 w-4" />
//                 <span className="text-sm">5, Matanmi Close, Oko-filling, Alagbado, Lagos</span>
//               </div>
//               <div className="text-light/80 flex items-center space-x-3">
//                 <Phone className="text-church-gold-400 h-4 w-4" />
//                 <span className="text-sm">(+234) 8033072838</span>
//               </div>
//               <div className="text-light/80 flex items-center space-x-3">
//                 <Mail className="text-church-gold-400 h-4 w-4" />
//                 <span className="text-sm">cacitedoyiyanju@gmail.com</span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-light mb-6 text-lg font-semibold">Quick Links</h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <button onClick={() => handleLinkClick(link)} className="text-light/80 hover:text-church-gold-400 text-left text-sm transition-colors duration-300">
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-light mb-6 text-lg font-semibold">Stay Connected</h3>
//             <p className="text-light/80 mb-4 text-sm">Subscribe to our newsletter for updates on events, sermons, and community news.</p>
//             <div className="space-y-3">
//               <Input type="email" placeholder="Your email address" className="border-light/20 bg-light/10 text-light placeholder:text-light/60" />
//               <Button className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300 hover:shadow-glow w-full">Subscribe</Button>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-light mb-3 text-sm font-semibold">Follow Us</h4>
//               <div className="flex space-x-3">
//                 {socialLinks.map((social, index) => {
//                   const Icon = social.icon
//                   return (
//                     <a key={index} href={social.href} className="group bg-light/10 hover:bg-church-gold-400 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300" aria-label={social.label} target="_blank" rel="noopener noreferrer">
//                       <Icon className="text-light/80 group-hover:text-church-blue-900 h-4 w-4" />
//                     </a>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Service Times Banner */}
//         <div className="border-light/20 mt-12 border-t pt-8">
//           <div className="bg-church-gold-400/20 rounded-lg p-6 text-center">
//             <h3 className="text-light mb-4 text-xl font-bold">Join Us To Fellowship</h3>
//             <div className="grid gap-4 text-sm md:grid-cols-3">
//               <div>
//                 <div className="text-light font-semibold">Sunday Morning</div>
//                 <div className="text-light/80">7:00 AM - Worship Service</div>
//               </div>
//               <div>
//                 <div className="text-light font-semibold">Tuesday Evening</div>
//                 <div className="text-light/80">5:00 PM - Bible Study</div>
//               </div>
//               <div>
//                 <div className="text-light font-semibold">Thursday</div>
//                 <div className="text-light/80">8:00 AM - Prayer Meeting</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-light/20 mt-8 border-t pt-8 text-center">
//           <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
//             <p className="text-light/60 text-sm">&copy; {new Date().getFullYear()} CAC Itedo Yiyanju. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
