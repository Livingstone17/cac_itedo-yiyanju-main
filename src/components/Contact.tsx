// import { useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";
// import gsap from "gsap";

// const Contact = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const formRef = useRef<HTMLFormElement>(null);
//   const { toast } = useToast();

//   const contactInfo = [
//     {
//       title: "Visit Us",
//       content: "5, Matanmi Close, Oko-Filling,\nAlagbado, Lagos",
//       icon: MapPin,
//       color: "bg-church-blue-700",
//     },
//     {
//       title: "Call Us",
//       content: "(234) 803-307-2838\n(234) 806-983-1978",
//       icon: Phone,
//       color: "bg-church-gold-400",
//     },
//     {
//       title: "Email Us",
//       content: "cacitedoyiyanju@gmail.com",
//       icon: Mail,
//       color: "bg-church-blue-500",
//     },
//   ];

//   const servicesTimes = [
//     { service: "Sunday Morning Worship", time: "7:00 AM" },
//     { service: "Tuesday Bible Study", time: "5:00 PM" },
//     { service: "Thursday Prayer Meeting", time: "8:00 AM" },
//     { service: "Friday Monthly Youth Vigil", time: "11:00 PM" },
//   ];

//   const otherBranches = [
//     {
//       name: "CAC Itedo Yiyanju – Ikorodu Worship Centre",
//       address: "Beside Dampress Secondary School, New Covenant Estate, Eyebeere, Gbaga off Ijede Road, Ikorodu Lagos",
//       mapUrl: "https://maps.app.goo.gl/q2e2kC3fWugVhw7y7",
//       serviceTime: "Service Time: 8:00 AM every Sunday",
//     },
//     {
//       name: "CAC Itedo Yiyanju – Ifo Worship Centre",
//       address: "Ayoola Street, After Better land school, Balogun Tuntun, Gasline Ososun road, Ifo Ogun State",
//       mapUrl: "https://maps.app.goo.gl/aD42amXhC632U6GX7",
//       serviceTime: "Service Time: 8:00 AM every Sunday",
//     },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       if (!sectionRef.current) return;

//       gsap.from(".contact-title", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         ease: "power2.out",
//       });

//       gsap.from(".contact-subtitle", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
//         opacity: 0,
//         y: 20,
//         duration: 0.8,
//         delay: 0.1,
//         ease: "power2.out",
//       });

//       gsap.from(".contact-card", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
//         opacity: 0,
//         y: 40,
//         duration: 0.8,
//         stagger: 0.15,
//         ease: "power2.out",
//       });

//       gsap.from(".contact-form", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
//         opacity: 0,
//         x: 60,
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.from(".contact-map", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
//         opacity: 0,
//         scale: 0.98,
//         duration: 1,
//         ease: "power2.out",
//       });

//       gsap.from(".contact-branch", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     fetch("https://formspree.io/f/mgvnyndq", {
//       method: "POST",
//       body: formData,
//       headers: { Accept: "application/json" },
//     })
//       .then((response) => {
//         if (response.ok) {
//           formRef.current?.reset();
//           toast({
//             title: "Message Sent!",
//             description: "We will get back to you soon.",
//           });
//         }
//       })
//       .catch(() => {
//         toast({
//           title: "Error",
//           description: "Failed to send message.",
//           variant: "destructive",
//         });
//       });
//   };

//   return (
//     <section ref={sectionRef} id="contact" className="reveal from-light-200 to-light-300 dark:from-dark-300 dark:to-dark-400 bg-linear-to-b py-8">
//       <div className="container mx-auto px-4">
//         <div className="stagger mb-16 text-center">
//           <h2 className="contact-title stagger-item text-text dark:text-light mb-6 text-3xl font-bold md:text-4xl">
//             Need Prayers <span className="text-church-gold-400">?</span>
//           </h2>

//           <p className="contact-subtitle stagger-item text-text-300 dark:text-text-400 mx-auto max-w-2xl text-base">When life feels overwhelming, prayer changes everything. We are here to stand with you.</p>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-3">
//           {/* LEFT — contact info + service times */}
//           <div className="contact-card space-y-6 lg:col-span-1">
//             {contactInfo.map((info, index) => {
//               const Icon = info.icon;
//               return (
//                 <Card key={index} className="contact-card border-light-400 bg-light shadow-soft dark:border-dark-500 dark:bg-dark-400 border">
//                   <CardContent className="p-6">
//                     <div className="flex gap-4">
//                       <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${info.color}`}>
//                         <Icon className="h-6 w-6 text-white" />
//                       </div>
//                       <div>
//                         <h4 className="text-text dark:text-light font-semibold">{info.title}</h4>
//                         <p className="text-text-300 dark:text-text-400 text-sm whitespace-pre-line">{info.content}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}

//             <Card className="contact-card border-light-400 bg-light shadow-soft dark:border-dark-500 dark:bg-dark-400 border">
//               <CardHeader>
//                 <CardTitle className="text-text dark:text-light flex items-center">
//                   <Clock className="text-church-gold-400 mr-2 h-5 w-5" />
//                   Service Times
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   {servicesTimes.map((s, i) => (
//                     <div key={i} className="flex justify-between">
//                       <span className="text-text-300 dark:text-text-400 text-sm">{s.service}</span>
//                       <span className="text-church-gold-400 text-sm font-semibold">{s.time}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* FORM */}
//           <div className="contact-form lg:col-span-2">
//             <Card className="border-light-400 shadow-large dark:border-dark-500 dark:bg-dark-400 border">
//               <CardHeader>
//                 <CardTitle className="text-text dark:text-light text-2xl">Send us a Message</CardTitle>
//               </CardHeader>

//               <CardContent>
//                 <form
//                   ref={formRef}
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     handleFormSubmit(e);
//                   }}
//                   className="space-y-6"
//                 >
//                   <Input name="firstName" placeholder="Your name" required className="border-light-400 bg-light text-text placeholder:text-text-400 dark:border-dark-500 dark:bg-dark-500 dark:text-light dark:placeholder:text-text-400" />
//                   <Input name="email" type="email" placeholder="Email" required className="border-light-400 bg-light text-text placeholder:text-text-400 dark:border-dark-500 dark:bg-dark-500 dark:text-light dark:placeholder:text-text-400" />
//                   <Textarea name="message" placeholder="Message..." required className="border-light-400 bg-light text-text placeholder:text-text-400 dark:border-dark-500 dark:bg-dark-500 dark:text-light dark:placeholder:text-text-400" />

//                   <Button type="submit" className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300 hover:shadow-glow w-full">
//                     <Send className="mr-2 h-5 w-5" />
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* MAP */}
//         <div className="contact-map mt-16">
//           <Card className="border-light-400 shadow-large dark:border-dark-500 overflow-hidden border">
//             <div className="relative aspect-video">
//               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7992498029625!2d3.2491340759097!3d6.6717791933233155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b99e6e2162077%3A0x510b8a2a2b7e1897!2sChrist%20Apostolic%20Church%2C%20Itedo%20Yiyanju!5e0!3m2!1sen!2sng!4v1782062227366!5m2!1sen!2sng" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
//               <div className="bg-church-blue-900/70 text-light absolute inset-0 flex flex-col items-center justify-center transition-opacity hover:opacity-0">
//                 <h4 className="mb-2 text-2xl font-bold">Find Us</h4>
//                 <p className="text-light/80 mb-6 text-sm">5, Itedo Yiyanju Close, Alagbado, Lagos</p>
//                 <Button asChild className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300">
//                   <a href="https://www.google.com/maps/dir/?api=1&destination=6.671838,3.251764" target="_blank" rel="noopener noreferrer">
//                     <MapPin className="mr-2 h-5 w-5" />
//                     Get Directions
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* BRANCHES */}
//         <div className="mt-16 text-center">
//           <h3 className="text-text dark:text-light mb-8 text-2xl font-bold">Our Worship Centres</h3>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           {otherBranches.map((b, i) => (
//             <a key={i} href={b.mapUrl} target="_blank" rel="noopener noreferrer" className="contact-branch">
//               <Card className="border-light-400 bg-light dark:border-dark-500 dark:bg-dark-400 h-full border transition-transform hover:scale-105">
//                 <CardContent className="p-6 text-center">
//                   <h4 className="text-text dark:text-light mb-2 font-semibold">{b.name}</h4>
//                   <p className="text-text-300 dark:text-text-400 text-sm">{b.address}</p>
//                   <p className="text-text-300 dark:text-text-400 mb-4 text-sm">{b.serviceTime}</p>
//                   <Button size="sm" className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300">
//                     Get Directions
//                   </Button>
//                 </CardContent>
//               </Card>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Navigation } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    title: "Visit Us",
    content: "5, Matanmi Close, Oko-Filling,\nAlagbado, Lagos",
    icon: MapPin,
    gradient: "from-blue-500 to-indigo-600",
    accent: "#3b82f6",
  },
  {
    title: "Call Us",
    content: "(234) 803-307-2838\n(234) 806-983-1978",
    icon: Phone,
    gradient: "from-[#d4a843] to-[#b8922e]",
    accent: "#d4a843",
  },
  {
    title: "Email Us",
    content: "cacitedoyiyanju@gmail.com",
    icon: Mail,
    gradient: "from-emerald-500 to-green-600",
    accent: "#10b981",
  },
];

const servicesTimes = [
  { service: "Sunday Morning Worship", time: "7:00 AM" },
  { service: "Tuesday Bible Study", time: "5:00 PM" },
  { service: "Thursday Prayer Meeting", time: "8:00 AM" },
  { service: "Friday Monthly Youth Vigil", time: "11:00 PM" },
];

const otherBranches = [
  {
    name: "CAC Itedo Yiyanju – Ikorodu",
    address: "Beside Dampress Secondary School, New Covenant Estate, Eyebeere, Gbaga off Ijede Road, Ikorodu Lagos",
    mapUrl: "https://maps.app.goo.gl/q2e2kC3fWugVhw7y7",
    serviceTime: "8:00 AM every Sunday",
  },
  {
    name: "CAC Itedo Yiyanju – Ifo",
    address: "Ayoola Street, After Better land school, Balogun Tuntun, Gasline Ososun road, Ifo Ogun State",
    mapUrl: "https://maps.app.goo.gl/aD42amXhC632U6GX7",
    serviceTime: "8:00 AM every Sunday",
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-badge", {
        scrollTrigger: { trigger: ".contact-badge", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: -20, duration: 0.6, ease: "power3.out",
      });
      gsap.from(".contact-heading", {
        scrollTrigger: { trigger: ".contact-heading", start: "top 90%", toggleActions: "play none none reverse" },
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".contact-desc", {
        scrollTrigger: { trigger: ".contact-desc", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: 20, duration: 0.7, ease: "power3.out",
      });
      gsap.from(".contact-info-card", {
        scrollTrigger: { trigger: ".contact-info-grid", start: "top 90%", toggleActions: "play none none reverse" },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
      });
      gsap.from(".contact-form-wrapper", {
        scrollTrigger: { trigger: ".contact-form-wrapper", start: "top 88%", toggleActions: "play none none reverse" },
        opacity: 0, y: 50, duration: 0.9, ease: "power3.out",
      });
      gsap.from(".contact-service-card", {
        scrollTrigger: { trigger: ".contact-service-card", start: "top 90%", toggleActions: "play none none reverse" },
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".contact-map-wrapper", {
        scrollTrigger: { trigger: ".contact-map-wrapper", start: "top 90%", toggleActions: "play none none reverse" },
        opacity: 0, scale: 0.97, duration: 1, ease: "power3.out",
      });
      gsap.from(".contact-branch", {
        scrollTrigger: { trigger: ".contact-branches", start: "top 90%", toggleActions: "play none none reverse" },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    fetch("https://formspree.io/f/mgvnyndq", {
      method: "POST", body: formData, headers: { Accept: "application/json" },
    }).then((res) => {
      if (res.ok) {
        formRef.current?.reset();
        toast({ title: "Message Sent!", description: "We will get back to you soon." });
      }
    }).catch(() => {
      toast({ title: "Error", description: "Failed to send message.", variant: "destructive" });
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-gray-50 py-14 dark:bg-[#050a18] md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]" style={{
          backgroundImage: "linear-gradient(rgba(212,168,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#d4a843]/[0.04] blur-[140px] dark:bg-[#d4a843]/[0.03]" />
        <div className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px] dark:bg-[#1a2f5a]/10" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="contact-badge mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4a843]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a843]">Reach Out</span>
          </div>
          <h2 className="contact-heading mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Need{" "}
            <span className="bg-gradient-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
              Prayers
            </span>
            ?
          </h2>
          <p className="contact-desc mx-auto max-w-2xl text-base text-gray-500 dark:text-white/40 md:text-lg">
            When life feels overwhelming, prayer changes everything. We are here to stand with you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info-grid mb-12 grid gap-4 sm:grid-cols-3 md:mb-16">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <div key={i} className="contact-info-card group relative">
                <div className="absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" style={{ backgroundColor: `${info.accent}15` }} />
                <div className="relative flex items-start gap-4 rounded-2xl border border-gray-200/80 bg-white/80 p-5 backdrop-blur-sm transition-all duration-500 hover:border-gray-300 hover:shadow-lg dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-white/[0.12] dark:hover:shadow-none">
                  <div className="absolute left-5 right-5 top-0 h-[2px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `linear-gradient(90deg, transparent, ${info.accent}, transparent)` }} />
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${info.gradient} shadow-md transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">{info.title}</h4>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-gray-500 dark:text-white/40">{info.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form + Service Times */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Form */}
          <div className="contact-form-wrapper lg:col-span-3">
            <div className="relative rounded-2xl border border-gray-200/80 bg-white/80 p-6 backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.02] md:p-8">
              <div className="absolute left-6 right-6 top-0 h-[2px] rounded-full opacity-40 md:left-8 md:right-8" style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />

              <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white md:text-2xl">Send us a Message</h3>
              <p className="mb-6 text-sm text-gray-400 dark:text-white/30">We'd love to hear from you</p>

              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input name="firstName" placeholder="Your name" required
                    className="rounded-xl border-gray-200 bg-gray-50/80 text-gray-900 placeholder:text-gray-400 focus:border-[#d4a843]/50 focus:ring-[#d4a843]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30" />
                  <Input name="email" type="email" placeholder="Email address" required
                    className="rounded-xl border-gray-200 bg-gray-50/80 text-gray-900 placeholder:text-gray-400 focus:border-[#d4a843]/50 focus:ring-[#d4a843]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30" />
                </div>
                <Textarea name="message" placeholder="Your message or prayer request..." rows={5} required
                  className="rounded-xl border-gray-200 bg-gray-50/80 text-gray-900 placeholder:text-gray-400 focus:border-[#d4a843]/50 focus:ring-[#d4a843]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30" />
                <Button type="submit"
                  className="group w-full rounded-xl bg-gradient-to-r from-[#d4a843] to-[#b8922e] px-8 py-6 text-base font-semibold text-[#0a1628] shadow-[0_0_20px_rgba(212,168,67,0.2)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,168,67,0.35)]">
                  <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Service Times */}
          <div className="contact-service-card lg:col-span-2">
            <div className="relative h-full rounded-2xl border border-gray-200/80 bg-white/80 p-6 backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.02] md:p-8">
              <div className="absolute left-6 right-6 top-0 h-[2px] rounded-full opacity-40 md:left-8 md:right-8" style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4a843] to-[#b8922e] shadow-md">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Service Times</h3>
              </div>

              <div className="space-y-4">
                {servicesTimes.map((s, i) => (
                  <div key={i} className="group flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 transition-all duration-300 hover:border-[#d4a843]/20 hover:bg-[#d4a843]/[0.03] dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-[#d4a843]/15">
                    <span className="text-sm text-gray-600 dark:text-white/50">{s.service}</span>
                    <span className="rounded-full bg-[#d4a843]/10 px-3 py-0.5 text-xs font-bold text-[#d4a843]">
                      {s.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="contact-map-wrapper mt-12 md:mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-white/[0.06]">
            <div className="relative aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7992498029625!2d3.2491340759097!3d6.6717791933233155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b99e6e2162077%3A0x510b8a2a2b7e1897!2sChrist%20Apostolic%20Church%2C%20Itedo%20Yiyanju!5e0!3m2!1sen!2sng!4v1782062227366!5m2!1sen!2sng"
                width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/70 transition-opacity duration-500 hover:opacity-0 dark:bg-[#050a18]/80">
                <MapPin className="mb-3 h-8 w-8 text-[#d4a843]" />
                <h4 className="mb-2 text-2xl font-bold text-white">Find Us</h4>
                <p className="mb-5 text-sm text-white/60">5, Itedo Yiyanju Close, Alagbado, Lagos</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=6.671838,3.251764" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4a843] to-[#b8922e] px-6 py-2.5 text-sm font-semibold text-[#0a1628] shadow-[0_0_20px_rgba(212,168,67,0.3)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(212,168,67,0.5)]">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Branches */}
        <div className="mt-12 md:mt-16">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Our Worship{" "}
              <span className="bg-gradient-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
                Centres
              </span>
            </h3>
            <p className="text-sm text-gray-400 dark:text-white/30">Find a location near you</p>
          </div>

          <div className="contact-branches grid gap-4 md:grid-cols-2">
            {otherBranches.map((b, i) => (
              <a key={i} href={b.mapUrl} target="_blank" rel="noopener noreferrer"
                className="contact-branch group relative block">
                <div className="absolute -inset-px rounded-2xl bg-[#d4a843]/10 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#d4a843]/30 hover:shadow-lg dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#d4a843]/20 dark:hover:shadow-none">
                  <div className="absolute left-6 right-6 top-0 h-[2px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4a843] to-[#b8922e] shadow-md transition-transform duration-500 group-hover:scale-110">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#d4a843] dark:text-white">{b.name}</h4>
                  </div>

                  <p className="mb-3 flex-1 text-sm leading-relaxed text-gray-500 dark:text-white/40">{b.address}</p>

                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#d4a843]/10 px-3 py-1 text-xs font-bold text-[#d4a843]">
                      {b.serviceTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#d4a843] opacity-0 transition-all duration-500 group-hover:opacity-100">
                      Directions <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-12 flex items-center justify-center gap-3 md:mt-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4a843]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#d4a843]/30" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4a843]/30" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/15 to-transparent" />
    </section>
  );
};

export default Contact;