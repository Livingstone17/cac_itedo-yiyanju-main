// import React, { useState, useRef, useEffect } from "react";
// import { Heart, Building2, DollarSign, Copy, Check, MapPin, Clock10 } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Footer from "@/components/Footer";
// import globusLogo from "@/assets/globus.png";
// import gtbLogo from "@/assets/gtb.png";
// import givingImage from "@/assets/giving.jpg";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const GivePage: React.FC = () => {
//     const pageRef = useRef(null);
//     const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
//     const [copiedCampusIndex, setCopiedCampusIndex] = useState<number | null>(null);
//     const [selectedCampus, setSelectedCampus] = useState<number>(0);

//     const nigeriaOptions = [
//         {
//             name: "Globus Bank",
//             logo: globusLogo,
//             accountNumber: "1000229170",
//             accountName: "Christ Apostolic Church - Itedo Yiyanju",
//         },
//         {
//             name: "GTB",
//             logo: gtbLogo,
//             accountNumber: "0019268524",
//             accountName: "Christ Apos Chr Itedo Yiyanju",
//         },
//     ];

//     const branches = [
//         {
//             name: "CAC Itedo Yiyanju – Head Quarters",
//             address: "5, Itedo Yiyanju Close, Alagbado, Lagos",
//             serviceTime: "Service Time: 8:00 AM every Sunday",
//             bankAccounts: [
//                 {
//                     bank: "Globus Bank",
//                     logo: globusLogo,
//                     accountNumber: "1000229170",
//                     accountName: "CAC Itedo Yiyanju Main",
//                 },
//                 {
//                     bank: "GTB",
//                     logo: gtbLogo,
//                     accountNumber: "0019268524",
//                     accountName: "CAC Itedo Yiyanju Main",
//                 },
//             ],
//         },
//         {
//             name: "CAC Itedo Yiyanju – Ikorodu Branch",
//             address: "Beside Dampress Secondary School, New Covenant Estate, Eyebeere, Gbaga off Ijede Road, Ikorodu Lagos",
//             serviceTime: "Service Time: 8:00 AM every Sunday",
//             bankAccounts: [
//                 {
//                     bank: "GTB",
//                     logo: gtbLogo,
//                     accountNumber: "0019268525",
//                     accountName: "CAC Itedo Yiyanju Ikorodu",
//                 },
//             ],
//         },
//         {
//             name: "CAC Itedo Yiyanju – Ifo Branch",
//             address: "Ayoola Street, After Better land school, Balogun Tuntun, Gasline Ososun road, Ifo Ogun State",
//             serviceTime: "Service Time: 8:00 AM every Sunday",
//             bankAccounts: [
//                 {
//                     bank: "Globus Bank",
//                     logo: globusLogo,
//                     accountNumber: "1000229172",
//                     accountName: "CAC Itedo Yiyanju Ifo",
//                 },
//             ],
//         },
//     ];

//     const handleCopyAccountNumber = (accountNumber: string, index: number) => {
//         navigator.clipboard.writeText(accountNumber).then(() => {
//             setCopiedIndex(index);
//             // Reset the copied state after 2 seconds
//             setTimeout(() => setCopiedIndex(null), 5000);
//         });
//     };

//     const handleCopyCampusAccountNumber = (accountNumber: string, index: number) => {
//         navigator.clipboard.writeText(accountNumber).then(() => {
//             setCopiedCampusIndex(index);
//             // Reset the copied state after 2 seconds
//             setTimeout(() => setCopiedCampusIndex(null), 5000);
//         });
//     };

//     useEffect(() => {
//         const ctx = gsap.context(() => {

//             // 🔥 HERO (parallax + fade)
//             gsap.from(".hero-content", {
//                 opacity: 0,
//                 y: 80,
//                 duration: 1.2,
//                 ease: "power3.out"
//             });

//             gsap.to(".hero-bg", {
//                 yPercent: 20,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: ".hero",
//                     start: "top top",
//                     end: "bottom top",
//                     scrub: true
//                 }
//             });

//             // 🔥 SECTION TITLES
//             gsap.utils.toArray(".reveal").forEach((el: any) => {
//                 gsap.from(el, {
//                     scrollTrigger: {
//                         trigger: el,
//                         start: "top 85%",
//                         toggleActions: "play none none none"
//                     },
//                     opacity: 0,
//                     y: 50,
//                     duration: 0.9,
//                     ease: "power3.out"
//                 });
//             });

//             // 🔥 STAGGER ITEMS (cards, banks, FAQ, etc.)
//             gsap.utils.toArray(".stagger").forEach((container: any) => {
//                 const items = container.querySelectorAll(".stagger-item");

//                 gsap.set(items, { opacity: 1 }); // prevent flicker

//                 gsap.from(items, {
//                     scrollTrigger: {
//                         trigger: container,
//                         start: "top 85%",
//                         toggleActions: "play none none none"
//                     },
//                     opacity: 0,
//                     y: 40,
//                     stagger: 0.15,
//                     duration: 0.8,
//                     ease: "power3.out"
//                 });
//             });

//             // 🔥 CAMPUS SWITCH CARD (smooth change)
//             gsap.from(".campus-card", {
//                 scrollTrigger: {
//                     trigger: ".campus-card",
//                     start: "top 85%",
//                 },
//                 opacity: 0,
//                 y: 40,
//                 duration: 0.8
//             });

//         }, pageRef);

//         return () => ctx.revert();
//     }, []);


//     return (
//         <div ref={pageRef} className="min-h-screen pt-16">
//             {/* Hero Section */}
//             <section
//                 className="hero relative text-white py-20 px-6 overflow-hidden"
//                 style={{
//                     backgroundImage: `url(${givingImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     // backgroundAttachment: "fixed",
//                     backgroundAttachment: "scroll"
//                 }}
//             >
//                 {/* Black Overlay */}
//                 <div className=" hero-bg absolute inset-0 bg-black/60"></div>

//                 {/* Content */}
//                 <div className="hero-content relative z-10 container mx-auto text-center">
//                     <div className="max-w-3xl mx-auto">
//                         <h1 className="text-5xl md:text-6xl font-bold mb-6">
//                             Your Offering.
//                             <span className="block text-church-gold">His Harvest.</span>
//                         </h1>
//                         <p className="text-xl text-white/90 mb-8">
//                             Partner with God in purpose: give your tithes, offerings, and seeds to help us reach souls with the life-changing gospel.
//                         </p>
//                         <div className="flex flex-col md:flex-row gap-4 justify-center">
//                             <Button
//                                 variant="hero"
//                                 size="lg"
//                                 onClick={() => document.getElementById("giving-options")?.scrollIntoView({ behavior: "smooth" })}
//                             >
//                                 Give Now
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Giving Options Section */}
//             <section id="giving-options" className="py-20 bg-background">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16 reveal">
//                         <h2 className="text-4xl font-bold text-church-text mb-4">Ways to Give</h2>
//                         <p className="text-lg text-church-text-light max-w-2xl mx-auto">
//                             Join us as we align our resources with our faith, partnering with God to advance the gospel in our time.
//                         </p>
//                     </div>

//                     {/* Bank Transfer Section */}
//                     <div className="mb-20">
//                         <h3 className="text-2xl font-bold text-church-text mb-8 flex items-center gap-3">
//                             <Building2 className="w-7 h-7 text-church-gold" />
//                             Bank Transfer
//                         </h3>
//                         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
//                             {/* Empty Column */}
//                             <div></div>

//                             {/* Cards Container */}
//                             <div className="lg:col-span-3">
//                                 <div className="grid md:grid-cols-2 gap-6 stagger">
//                                     {nigeriaOptions.map((option, index) => (
//                                         <Card key={index} className="stagger-item shadow-soft border-church-blue/10 hover:shadow-md transition">
//                                             <CardHeader>
//                                                 <CardTitle className="text-lg text-church-text flex items-center gap-3">
//                                                     <img src={option.logo} alt={option.name} className="w-8 h-8 object-contain" />
//                                                     {option.name}
//                                                 </CardTitle>
//                                             </CardHeader>
//                                             <CardContent className="space-y-4">
//                                                 <div>
//                                                     <p className="text-sm text-church-text-light font-medium">Account Number</p>
//                                                     <div className="flex items-center justify-between mt-1 gap-2">
//                                                         <p className="text-xl font-semibold text-church-text">{option.accountNumber}</p>
//                                                         <button
//                                                             onClick={() => handleCopyAccountNumber(option.accountNumber, index)}
//                                                             className="p-2 rounded-lg hover:bg-church-blue/10 transition-colors"
//                                                             title="Copy account number"
//                                                         >
//                                                             {copiedIndex === index ? (
//                                                                 <Check className="w-5 h-5 text-green-600" />
//                                                             ) : (
//                                                                 <Copy className="w-5 h-5 text-church-gold" />
//                                                             )}
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-sm text-church-text-light font-medium">Account Name</p>
//                                                     <p className="text-sm text-church-text mt-1">{option.accountName}</p>
//                                                 </div>
//                                             </CardContent>
//                                         </Card>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Empty Column */}
//                             <div></div>
//                         </div>
//                     </div>

//                     {/* Online Payment Section */}
//                     {/* <div>
//                         <h3 className="text-2xl font-bold text-church-text mb-8 flex items-center gap-3">
//                             <DollarSign className="w-7 h-7 text-church-gold" />
//                             Online Payment
//                         </h3>
//                         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6"> */}
//                     {/* Empty Column */}
//                     <div></div>

//                     {/* Payment Options */}
//                     {/* <div className="lg:col-span-3">
//                                 <div className="space-y-4">
//                                     {/* Paystack */}
//                     {/* <Card className="shadow-soft border-church-blue/10 hover:shadow-md transition">
//                                         <CardContent className="p-6 flex items-center justify-between">
//                                             <div>
//                                                 <h4 className="text-lg font-semibold text-church-text mb-2">Paystack</h4>
//                                                 <p className="text-sm text-church-text-light">Pay securely with Naira (₦)</p>
//                                             </div>
//                                             <Button
//                                                 variant="hero"
//                                                 onClick={() => window.open("https://paystack.com/pay/your-link", "_blank")}
//                                             >
//                                                 Give Now
//                                             </Button>
//                                         </CardContent>
//                                     </Card>  */}

//                     {/* Flutterwave */}
//                     {/* <Card className="shadow-soft border-church-blue/10 hover:shadow-md transition">
//                                         <CardContent className="p-6 flex items-center justify-between">
//                                             <div>
//                                                 <h4 className="text-lg font-semibold text-church-text mb-2">Flutterwave</h4>
//                                                 <p className="text-sm text-church-text-light">Pay securely in multiple currencies</p>
//                                             </div>
//                                             <Button
//                                                 variant="hero"
//                                                 onClick={() => window.open("https://rave.flutterwave.com/pay/your-link", "_blank")}
//                                             >
//                                                 Give Now
//                                             </Button>
//                                         </CardContent>
//                                     </Card> */}
//                     {/* </div> */}
//                     {/* </div> */}

//                     {/* Empty Column */}
//                     {/* <div></div> */}
//                     {/* </div> */}
//                     {/* </div> */}
//                 </div>
//             </section>

//             {/* Give to Specific Campus Section */}
//             <section className="py-20 bg-background">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16 reveal">
//                         <h2 className="text-4xl font-bold text-church-text mb-4">Give to Specific Branch</h2>
//                         <p className="text-lg text-church-text-light max-w-2xl mx-auto">
//                             Support the work of God in a specific location. Choose which branch your giving should support.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
//                         {/* Empty Column */}
//                         <div></div>

//                         {/* Campus Selection */}
//                         <div className="lg:col-span-3">
//                             <div className="grid md:grid-cols-2 gap-4 mb-8 stagger">
//                                 {branches.map((campus, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => setSelectedCampus(index)}
//                                         className={`stagger-item p-4 rounded-lg border-2 text-left transition-all ${selectedCampus === index
//                                             ? "border-church-gold bg-church-gold/10"
//                                             : "border-church-blue/20 hover:border-church-gold/50"
//                                             }`}
//                                     >
//                                         <div className="flex items-start gap-3">
//                                             <MapPin className={`w-5 h-5 flex-shrink-0 mt-1 ${selectedCampus === index ? "text-church-gold" : "text-church-text-light"}`} />
//                                             <div>
//                                                 <h4 className="font-semibold text-church-text text-sm mb-1">{campus.name}</h4>
//                                                 <p className="text-xs text-church-text-light">{campus.address}</p>
//                                             </div>
//                                         </div>
//                                     </button>
//                                 ))}
//                             </div>

//                             {/* Selected Campus Details */}
//                             <Card className="campus-card shadow-soft border-church-blue/10 mb-ß">
//                                 <CardContent className="p-6">
//                                     <h3 className="text-lg font-semibold text-church-text mb-4">{branches[selectedCampus].name}</h3>
//                                     <div className="space-y-3 mb-6">
//                                         <div className="flex gap-3">
//                                             <MapPin className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
//                                             <p className="text-church-text-light">{branches[selectedCampus].address}</p>
//                                         </div>
//                                         <div className="flex gap-3">
//                                             <Clock10 className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
//                                             <p className="text-church-text-light">{branches[selectedCampus].serviceTime}</p>
//                                         </div>
//                                     </div>

//                                     {/* Branch Account Details */}
//                                     <div className="border-t border-church-blue/10 py-6">
//                                         <h4 className="font-semibold text-church-text mb-4">Bank Accounts for This Branch</h4>
//                                         <div className="space-y-4 stagger">
//                                             {branches[selectedCampus].bankAccounts.map((account, idx) => (
//                                                 <div key={idx} className="stagger-item bg-church-cream/50 rounded-lg p-4 space-y-2">
//                                                     <div className="flex items-center gap-2">
//                                                         <img src={account.logo} alt={account.bank} className="w-6 h-6 object-contain" />
//                                                         <p className="text-sm font-semibold text-church-text">{account.bank}</p>
//                                                     </div>
//                                                     <div className="flex items-center justify-between gap-2">
//                                                         <div>
//                                                             <p className="text-xs text-church-text-light">Account Number</p>
//                                                             <p className="text-sm font-mono font-semibold text-church-text">{account.accountNumber}</p>
//                                                         </div>
//                                                         <button
//                                                             onClick={() => handleCopyCampusAccountNumber(account.accountNumber, idx)}
//                                                             className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
//                                                             title="Copy account number"
//                                                         >
//                                                             {copiedCampusIndex === idx ? (
//                                                                 <Check className="w-5 h-5 text-green-600" />
//                                                             ) : (
//                                                                 <Copy className="w-5 h-5 text-church-gold" />
//                                                             )}
//                                                         </button>
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-xs text-church-text-light">Account Name</p>
//                                                         <p className="text-xs text-church-text">{account.accountName}</p>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     <div className="border-t border-church-blue/10 pt-6 mt-6">
//                                         <p className="text-sm text-church-text-light mb-4">
//                                             Use the account details above for bank transfers, or use the online payment options provided earlier to give securely.
//                                         </p>
//                                         <Button variant="hero" className="w-full">
//                                             Give to {branches[selectedCampus].name.split(" – ")[1] || "Head Quarters"}
//                                         </Button>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </div>

//                         {/* Empty Column */}
//                         <div></div>
//                     </div>
//                 </div>
//             </section>

//             {/* FAQ Section */}
//             <section className="py-20 bg-gradient-subtle">
//                 <div className="container mx-auto px-6 reveal">
//                     <h2 className="text-3xl font-bold text-church-text text-center mb-12">Frequently Asked Questions</h2>
//                     <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger">
//                         <div className="stagger-item">
//                             <h3 className="text-lg font-semibold text-church-text mb-3">What are tithes?</h3>
//                             <p className="text-church-text-light">
//                                 A tithe is 10% of your income given to support the ministry and spread the gospel.
//                             </p>
//                         </div>
//                         <div className="stagger-item">
//                             <h3 className="text-lg font-semibold text-church-text mb-3">What are offerings?</h3>
//                             <p className="text-church-text-light">
//                                 Offerings are voluntary gifts given as an act of worship and support beyond tithes.
//                             </p>
//                         </div>
//                         <div className="stagger-item">
//                             <h3 className="text-lg font-semibold text-church-text mb-3">How is my giving used?</h3>
//                             <p className="text-church-text-light">
//                                 Your giving supports our ministry, outreach programs, facilities, and spreading the gospel.
//                             </p>
//                         </div>
//                         <div className="stagger-item">
//                             <h3 className="text-lg font-semibold text-church-text mb-3">Is giving secure?</h3>
//                             <p className="text-church-text-light">
//                                 Yes, all online payments are secured by industry-standard encryption through Paystack and Flutterwave.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default GivePage;


//NEW ENHANCEMENT 1


// import React, { useState, useRef, useEffect } from "react";
// import { Heart, Copy, Check, MapPin, Clock10, ChevronDown } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Footer from "@/components/Footer";
// import globusLogo from "@/assets/globus.png";
// import gtbLogo from "@/assets/gtb.png";
// import givingImage from "@/assets/giving.jpg";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const GivePage: React.FC = () => {
//     const pageRef = useRef(null);
//     const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
//     const [copiedCampusIndex, setCopiedCampusIndex] = useState<number | null>(null);
//     const [selectedCampus, setSelectedCampus] = useState<number>(0);
//     const [openFaq, setOpenFaq] = useState<number | null>(0);

//     const nigeriaOptions = [
//         {
//             name: "Globus Bank",
//             logo: globusLogo,
//             accountNumber: "1000229170",
//             accountName: "Christ Apostolic Church - Itedo Yiyanju",
//         },
//         {
//             name: "GTB",
//             logo: gtbLogo,
//             accountNumber: "0019268524",
//             accountName: "Christ Apos Chr Itedo Yiyanju",
//         },
//     ];

//     const branches = [
//         {
//             name: "CAC Itedo Yiyanju – Head Quarters",
//             address: "5, Itedo Yiyanju Close, Alagbado, Lagos",
//             serviceTime: "Service Time: 8:00 AM every Sunday",
//             bankAccounts: [
//                 {
//                     bank: "Globus Bank",
//                     logo: globusLogo,
//                     accountNumber: "1000229170",
//                     accountName: "CAC Itedo Yiyanju Main",
//                 },
//                 {
//                     bank: "GTB",
//                     logo: gtbLogo,
//                     accountNumber: "0019268524",
//                     accountName: "CAC Itedo Yiyanju Main",
//                 },
//             ],
//         },
//         {
//             name: "CAC Itedo Yiyanju – Ikorodu Branch",
//             address: "Beside Dampress Secondary School, New Covenant Estate, Eyebeere, Gbaga off Ijede Road, Ikorodu Lagos",
//             serviceTime: "Service Time: 8:00 AM every Sunday",
//             bankAccounts: [
//                 {
//                     bank: "GTB",
//                     logo: gtbLogo,
//                     accountNumber: "0019268525",
//                     accountName: "CAC Itedo Yiyanju Ikorodu",
//                 },
//             ],
//         },
//         {
//             name: "CAC Itedo Yiyanju – Ifo Branch",
//             address: "Ayoola Street, After Better land school, Balogun Tuntun, Gasline Ososun road, Ifo Ogun State",
//             serviceTime: "Service Time: 8:00 AM every Sunday",
//             bankAccounts: [
//                 {
//                     bank: "Globus Bank",
//                     logo: globusLogo,
//                     accountNumber: "1000229172",
//                     accountName: "CAC Itedo Yiyanju Ifo",
//                 },
//             ],
//         },
//     ];

//     const faqs = [
//         { q: "What are tithes?", a: "A tithe is 10% of your income given to support the ministry and spread the gospel." },
//         { q: "What are offerings?", a: "Offerings are voluntary gifts given as an act of worship and support beyond tithes." },
//         { q: "How is my giving used?", a: "Your giving supports our ministry, outreach programs, facilities, and spreading the gospel." },
//         { q: "Is giving secure?", a: "Yes, all online payments are secured by industry-standard encryption through Paystack and Flutterwave." }
//     ];

//     const handleCopyAccountNumber = (accountNumber: string, index: number) => {
//         navigator.clipboard.writeText(accountNumber).then(() => {
//             setCopiedIndex(index);
//             setTimeout(() => setCopiedIndex(null), 5000);
//         });
//     };

//     const handleCopyCampusAccountNumber = (accountNumber: string, index: number) => {
//         navigator.clipboard.writeText(accountNumber).then(() => {
//             setCopiedCampusIndex(index);
//             setTimeout(() => setCopiedCampusIndex(null), 5000);
//         });
//     };

//     useEffect(() => {
//         const ctx = gsap.context(() => {

//             // 🔥 HERO (parallax + fade)
//             gsap.from(".hero-content", {
//                 opacity: 0,
//                 y: 80,
//                 duration: 1.2,
//                 ease: "power3.out"
//             });

//             gsap.to(".hero-bg", {
//                 yPercent: 20,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: ".hero",
//                     start: "top top",
//                     end: "bottom top",
//                     scrub: true
//                 }
//             });

//             // 🔥 SECTION TITLES
//             gsap.utils.toArray(".reveal").forEach((el: any) => {
//                 gsap.from(el, {
//                     scrollTrigger: {
//                         trigger: el,
//                         start: "top 85%",
//                         toggleActions: "play none none none"
//                     },
//                     opacity: 0,
//                     y: 50,
//                     duration: 0.9,
//                     ease: "power3.out"
//                 });
//             });

//             // 🔥 STAGGER ITEMS (cards, banks, FAQ, etc.)
//             gsap.utils.toArray(".stagger").forEach((container: any) => {
//                 const items = container.querySelectorAll(".stagger-item");

//                 gsap.set(items, { opacity: 1 }); // prevent flicker

//                 gsap.from(items, {
//                     scrollTrigger: {
//                         trigger: container,
//                         start: "top 85%",
//                         toggleActions: "play none none none"
//                     },
//                     opacity: 0,
//                     y: 40,
//                     stagger: 0.15,
//                     duration: 0.8,
//                     ease: "power3.out"
//                 });
//             });

//             // 🔥 CAMPUS SWITCH CARD (smooth change)
//             gsap.from(".campus-card", {
//                 scrollTrigger: {
//                     trigger: ".campus-card",
//                     start: "top 85%",
//                 },
//                 opacity: 0,
//                 y: 40,
//                 duration: 0.8
//             });

//         }, pageRef);

//         return () => ctx.revert();
//     }, []);


//     return (
//         <div ref={pageRef} className="min-h-screen bg-background">
//             {/* Hero Section */}
//             <section className="hero relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
//                 <div className="hero-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${givingImage})` }}></div>
//                 <div className="absolute inset-0 bg-black/60 z-[1]"></div>

//                 <div className="hero-content relative z-10 container mx-auto text-center px-6">
//                     <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                         Your Offering. <br />
//                         <span className="text-church-gold">His Harvest.</span>
//                     </h1>
//                     <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//                         Partner with God in purpose: give your tithes, offerings, and seeds to help us reach souls with the life-changing gospel.
//                     </p>
//                     <Button variant="hero" size="lg" onClick={() => document.getElementById("giving-options")?.scrollIntoView({ behavior: "smooth" })}>
//                         Give Now
//                     </Button>
//                 </div>
//             </section>

//             {/* Scripture / Intro Section */}
//             <section className="py-20 bg-background text-center reveal">
//                 <div className="container mx-auto px-6 max-w-3xl">
//                     <Heart className="w-12 h-12 text-church-gold mx-auto mb-6" />
//                     <p className="text-2xl md:text-3xl font-serif italic text-church-text mb-4 leading-relaxed">
//                         "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
//                     </p>
//                     <p className="text-lg text-church-text-light font-semibold">2 Corinthians 9:7</p>
//                 </div>
//             </section>

//             {/* Giving Options Section */}
//             <section id="giving-options" className="py-16 bg-gradient-subtle">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16 reveal">
//                         <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-4">Ways to Give</h2>
//                         <p className="text-lg text-church-text-light max-w-2xl mx-auto">
//                             Join us as we align our resources with our faith, partnering with God to advance the gospel in our time.
//                         </p>
//                     </div>

//                     {/* Bank Transfer Section */}
//                     <div className="max-w-5xl mx-auto">
//                         <div className="grid md:grid-cols-2 gap-8 stagger">
//                             {nigeriaOptions.map((option, index) => (
//                                 <Card key={index} className="stagger-item shadow-soft border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
//                                     <div className="bg-church-blue/5 p-6 border-b border-border flex items-center gap-4">
//                                         <div className="w-12 h-12 rounded-full bg-background p-2 flex items-center justify-center shadow-sm">
//                                             <img src={option.logo} alt={option.name} className="w-full h-full object-contain" />
//                                         </div>
//                                         <h3 className="text-xl font-semibold text-church-text">{option.name}</h3>
//                                     </div>
//                                     <CardContent className="p-6 space-y-4">
//                                         <div>
//                                             <p className="text-xs text-church-text-light font-medium uppercase tracking-wider">Account Number</p>
//                                             <div className="flex items-center justify-between mt-1 gap-2">
//                                                 <p className="text-2xl font-mono font-bold text-church-text">{option.accountNumber}</p>
//                                                 <button
//                                                     onClick={() => handleCopyAccountNumber(option.accountNumber, index)}
//                                                     className="p-2 rounded-lg hover:bg-church-gold/10 transition-colors group"
//                                                     title="Copy account number"
//                                                 >
//                                                     {copiedIndex === index ? (
//                                                         <Check className="w-5 h-5 text-green-600" />
//                                                     ) : (
//                                                         <Copy className="w-5 h-5 text-church-gold group-hover:scale-110 transition-transform" />
//                                                     )}
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <p className="text-xs text-church-text-light font-medium uppercase tracking-wider">Account Name</p>
//                                             <p className="text-base text-church-text mt-1">{option.accountName}</p>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Give to Specific Campus Section */}
//             <section className="py-20 bg-background">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-12 reveal">
//                         <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-4">Give to a Specific Branch</h2>
//                         <p className="text-lg text-church-text-light max-w-2xl mx-auto">
//                             Support the work of God in a specific location. Choose which branch your giving should support.
//                         </p>
//                     </div>

//                     {/* Branch Tabs */}
//                     <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
//                         {branches.map((campus, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => setSelectedCampus(index)}
//                                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCampus === index
//                                     ? "bg-church-gold text-white shadow-md"
//                                     : "bg-muted text-church-text hover:bg-church-gold/10"
//                                     }`}
//                             >
//                                 {campus.name.split(" – ")[1] || campus.name}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Selected Campus Details */}
//                     <div className="max-w-4xl mx-auto">
//                         <Card className="campus-card shadow-soft border-border overflow-hidden">
//                             <div className="grid md:grid-cols-2">
//                                 {/* Campus Info */}
//                                 <div className="bg-church-blue/5 p-8 flex flex-col justify-center">
//                                     <h3 className="text-2xl font-bold text-church-text mb-6">{branches[selectedCampus].name}</h3>
//                                     <div className="space-y-4">
//                                         <div className="flex gap-3">
//                                             <MapPin className="w-5 h-5 text-church-gold flex-shrink-0 mt-1" />
//                                             <p className="text-church-text-light leading-relaxed">{branches[selectedCampus].address}</p>
//                                         </div>
//                                         <div className="flex gap-3">
//                                             <Clock10 className="w-5 h-5 text-church-gold flex-shrink-0 mt-1" />
//                                             <p className="text-church-text-light">{branches[selectedCampus].serviceTime}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Bank Accounts */}
//                                 <div className="p-8 stagger">
//                                     <h4 className="font-semibold text-church-text mb-6 text-lg">Bank Details</h4>
//                                     <div className="space-y-6">
//                                         {branches[selectedCampus].bankAccounts.map((account, idx) => (
//                                             <div key={idx} className="stagger-item border-b border-border pb-4 last:border-0 last:pb-0">
//                                                 <div className="flex items-center gap-2 mb-2">
//                                                     <img src={account.logo} alt={account.bank} className="w-6 h-6 object-contain" />
//                                                     <p className="text-sm font-semibold text-church-text">{account.bank}</p>
//                                                 </div>
//                                                 <div className="flex items-center justify-between gap-2 mb-2">
//                                                     <p className="text-lg font-mono font-bold text-church-text">{account.accountNumber}</p>
//                                                     <button
//                                                         onClick={() => handleCopyCampusAccountNumber(account.accountNumber, idx)}
//                                                         className="p-1.5 rounded-md hover:bg-muted transition-colors"
//                                                         title="Copy account number"
//                                                     >
//                                                         {copiedCampusIndex === idx ? (
//                                                             <Check className="w-4 h-4 text-green-600" />
//                                                         ) : (
//                                                             <Copy className="w-4 h-4 text-church-gold" />
//                                                         )}
//                                                     </button>
//                                                 </div>
//                                                 <p className="text-xs text-church-text-light">{account.accountName}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </Card>
//                     </div>
//                 </div>
//             </section>

//             {/* FAQ Section */}
//             <section className="py-20 bg-gradient-subtle">
//                 <div className="container mx-auto px-6 reveal">
//                     <h2 className="text-3xl font-bold text-church-text text-center mb-12">Frequently Asked Questions</h2>
//                     <div className="max-w-3xl mx-auto space-y-4 stagger">
//                         {faqs.map((faq, index) => (
//                             <div key={index} className="stagger-item bg-background rounded-lg border border-border overflow-hidden shadow-sm">
//                                 <button
//                                     className="flex w-full items-center justify-between p-5 text-left"
//                                     onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                                 >
//                                     <span className="font-semibold text-church-text">{faq.q}</span>
//                                     <ChevronDown className={`w-5 h-5 text-church-gold transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
//                                 </button>
//                                 {openFaq === index && (
//                                     <div className="px-5 pb-5 text-church-text-light border-t border-border pt-4">
//                                         {faq.a}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// export default GivePage;


// NEW ENHANCEMENT 2
import React, { useState, useRef, useEffect } from "react";
import {
    Heart,
    Building2,
    CreditCard,
    Copy,
    Check,
    MapPin,
    Clock10,
    ArrowRight,
    Globe,
    Smartphone,
    ShieldCheck,
    Bell,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import globusLogo from "@/assets/globus.png";
import gtbLogo from "@/assets/gtb.png";
import givingImage from "@/assets/giving.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GivePage: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const tabContentRef = useRef<HTMLDivElement>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [copiedCampusIndex, setCopiedCampusIndex] = useState<number | null>(null);
    const [selectedCampus, setSelectedCampus] = useState<number>(0);
    const [activeTab, setActiveTab] = useState<"online" | "bank" | "branch">("bank");

    const nigeriaOptions = [
        {
            name: "Globus Bank",
            logo: globusLogo,
            accountNumber: "1000229170",
            accountName: "Christ Apostolic Church - Itedo Yiyanju",
        },
        {
            name: "GTB",
            logo: gtbLogo,
            accountNumber: "0019268524",
            accountName: "Christ Apos Chr Itedo Yiyanju",
        },
    ];

    const branches = [
        {
            name: "CAC Itedo Yiyanju – Head Quarters",
            shortName: "Head Quarters",
            address: "5, Itedo Yiyanju Close, Alagbado, Lagos",
            serviceTime: "Service Time: 8:00 AM every Sunday",
            bankAccounts: [
                {
                    bank: "Globus Bank",
                    logo: globusLogo,
                    accountNumber: "1000229170",
                    accountName: "CAC Itedo Yiyanju Main",
                },
                {
                    bank: "GTB",
                    logo: gtbLogo,
                    accountNumber: "0019268524",
                    accountName: "CAC Itedo Yiyanju Main",
                },
            ],
        },
        {
            name: "CAC Itedo Yiyanju – Ikorodu Branch",
            shortName: "Ikorodu Branch",
            address:
                "Beside Dampress Secondary School, New Covenant Estate, Eyebeere, Gbaga off Ijede Road, Ikorodu Lagos",
            serviceTime: "Service Time: 8:00 AM every Sunday",
            bankAccounts: [
                {
                    bank: "GTB",
                    logo: gtbLogo,
                    accountNumber: "0019268525",
                    accountName: "CAC Itedo Yiyanju Ikorodu",
                },
            ],
        },
        {
            name: "CAC Itedo Yiyanju – Ifo Branch",
            shortName: "Ifo Branch",
            address:
                "Ayoola Street, After Better land school, Balogun Tuntun, Gasline Ososun road, Ifo Ogun State",
            serviceTime: "Service Time: 8:00 AM every Sunday",
            bankAccounts: [
                {
                    bank: "Globus Bank",
                    logo: globusLogo,
                    accountNumber: "1000229172",
                    accountName: "CAC Itedo Yiyanju Ifo",
                },
            ],
        },
    ];

    const handleCopyAccountNumber = (accountNumber: string, index: number) => {
        navigator.clipboard.writeText(accountNumber).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        });
    };

    const handleCopyCampusAccountNumber = (accountNumber: string, index: number) => {
        navigator.clipboard.writeText(accountNumber).then(() => {
            setCopiedCampusIndex(index);
            setTimeout(() => setCopiedCampusIndex(null), 2000);
        });
    };

    // Hero + global section animations (run once)
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-title", {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
            });

            gsap.from(".hero-subtitle", {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                delay: 0.4,
            });

            gsap.from(".hero-cta", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                delay: 0.6,
            });

            // Sections below the tabs (Why Give, FAQ, CTA)
            gsap.utils.toArray(".section-reveal").forEach((el: any) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    ease: "power3.out",
                });
            });

            gsap.utils.toArray(".section-stagger").forEach((container: any) => {
                const items = container.querySelectorAll(".section-stagger-item");
                gsap.from(items, {
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                    },
                    opacity: 0,
                    y: 30,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "power3.out",
                });
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    // Tab content animations (run on every tab switch)
    useEffect(() => {
        if (!tabContentRef.current) return;

        const ctx = gsap.context(() => {
            // Animate the tab content wrapper
            gsap.fromTo(
                ".tab-content",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
            );

            // Animate stagger items inside the active tab
            const staggerContainers = document.querySelectorAll(".tab-stagger");
            staggerContainers.forEach((container) => {
                const items = container.querySelectorAll(".tab-stagger-item");
                gsap.fromTo(
                    items,
                    { opacity: 0, y: 25 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.12,
                        duration: 0.5,
                        ease: "power3.out",
                        delay: 0.2,
                    }
                );
            });
        }, tabContentRef);

        return () => ctx.revert();
    }, [activeTab]);

    return (
        <div ref={pageRef} className="min-h-screen bg-background">
            {/* Hero Section */}
            <section
                className="relative flex min-h-[60vh] items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${givingImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />

                <div className="relative z-10 container mx-auto px-6 py-20 text-center">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                            <Heart className="h-4 w-4 text-red-400" />
                            <span>Partner with God's Work</span>
                        </div>

                        <h1 className="hero-title mb-6 text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
                            Your Giving.
                            <br />
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                                Eternal Impact.
                            </span>
                        </h1>

                        <p className="hero-subtitle mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                            Join us in advancing the Kingdom through your generous support. Every seed sown
                            produces a harvest of righteousness.
                        </p>

                        <div className="hero-cta flex flex-col justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="bg-white px-8 font-semibold text-black hover:bg-white/90"
                                onClick={() => {
                                    setActiveTab("bank");
                                    document
                                        .getElementById("giving-tabs")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Give via Bank Transfer
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/30 text-black/75 bg-white/10 backdrop-blur-sm hover:bg-white/10"
                                onClick={() => {
                                    setActiveTab("branch");
                                    document
                                        .getElementById("giving-tabs")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Give to a Branch
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Giving Options */}
            <section id="giving-tabs" className="relative z-20 -mt-20 py-16 md:py-24">
                <div className="container mx-auto px-6">
                    {/* Tab Navigation */}
                    <div className="mb-12 flex flex-wrap justify-center gap-2">
                        {[
                            { id: "bank" as const, label: "Bank Transfer", icon: Building2 },
                            { id: "branch" as const, label: "Specific Branch", icon: MapPin },
                            { id: "online" as const, label: "Online Giving", icon: CreditCard },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? "scale-105 bg-primary text-primary-foreground shadow-lg"
                                    : "border border-border bg-white text-muted-foreground hover:bg-muted"
                                    }`}
                            >
                                <tab.icon className="h-4 w-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Container */}
                    <div ref={tabContentRef}>
                        {/* ──────────────── BANK TRANSFER TAB ──────────────── */}
                        {activeTab === "bank" && (
                            <div className="tab-content mx-auto max-w-4xl">
                                <div className="mb-12 text-center">
                                    <h2 className="mb-4 text-3xl font-bold text-church-text md:text-4xl">
                                        Bank Transfer
                                    </h2>
                                    <p className="text-lg text-church-text-light">
                                        Transfer directly to our church accounts
                                    </p>
                                </div>

                                <div className="tab-stagger grid gap-6 md:grid-cols-2">
                                    {nigeriaOptions.map((option, index) => (
                                        <Card
                                            key={index}
                                            className="tab-stagger-item border-2 border-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                                        >
                                            <CardHeader className="bg-muted/50 pb-4">
                                                <CardTitle className="flex items-center gap-3 text-xl">
                                                    <img
                                                        src={option.logo}
                                                        alt={option.name}
                                                        className="h-10 w-10 object-contain"
                                                    />
                                                    <span className="text-church-text">{option.name}</span>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6 pt-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium uppercase tracking-wider text-church-text-light">
                                                        Account Number
                                                    </label>
                                                    <div className="flex items-center gap-3">
                                                        <Input
                                                            value={option.accountNumber}
                                                            readOnly
                                                            className="h-14 border-0 bg-muted/50 font-mono text-2xl font-bold text-church-text"
                                                        />
                                                        <Button
                                                            size="icon"
                                                            variant="outline"
                                                            onClick={() =>
                                                                handleCopyAccountNumber(option.accountNumber, index)
                                                            }
                                                            className="h-14 w-14 shrink-0"
                                                        >
                                                            {copiedIndex === index ? (
                                                                <Check className="h-6 w-6 text-green-600" />
                                                            ) : (
                                                                <Copy className="h-6 w-6 text-church-text" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                    {copiedIndex === index && (
                                                        <p className="animate-in fade-in slide-in-from-top-1 text-sm font-medium text-green-600">
                                                            Copied to clipboard!
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium uppercase tracking-wider text-church-text-light">
                                                        Account Name
                                                    </label>
                                                    <p className="rounded-lg bg-muted/30 p-3 text-lg font-semibold text-church-text">
                                                        {option.accountName}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <div className="tab-stagger-item mt-12 rounded-2xl bg-primary/5 p-8 text-center">
                                    <Smartphone className="mx-auto mb-4 h-12 w-12 text-primary" />
                                    <h3 className="mb-2 text-xl font-bold text-church-text">
                                        Mobile Banking?
                                    </h3>
                                    <p className="text-church-text-light">
                                        Use the account details above for instant transfers via your banking app.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ──────────────── ONLINE GIVING TAB (Coming Soon) ──────────────── */}
                        {activeTab === "online" && (
                            <div className="tab-content mx-auto max-w-2xl">
                                <div className="text-center">
                                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                                        <CreditCard className="h-12 w-12 text-primary" />
                                    </div>

                                    <h2 className="mb-4 text-3xl font-bold text-church-text md:text-4xl">
                                        Online Giving
                                    </h2>

                                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700">
                                        <Bell className="h-4 w-4" />
                                        Coming Soon
                                    </div>

                                    <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-church-text-light">
                                        We're working on integrating secure online payment options so you can give
                                        conveniently from anywhere in the world. Stay tuned!
                                    </p>

                                    <div className="tab-stagger mx-auto max-w-md space-y-4 rounded-2xl border border-border bg-muted/30 p-8 text-left">
                                        <h3 className="text-center font-semibold text-church-text">
                                            What to expect
                                        </h3>
                                        <div className="space-y-3">
                                            {[
                                                {
                                                    icon: CreditCard,
                                                    text: "Card payments (Visa, Mastercard, Verve)",
                                                },
                                                { icon: Globe, text: "International currency support" },
                                                { icon: ShieldCheck, text: "Bank-grade encryption & security" },
                                                { icon: Smartphone, text: "Mobile-friendly checkout" },
                                            ].map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="tab-stagger-item flex items-center gap-3 text-sm text-church-text-light"
                                                >
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                                        <feature.icon className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span>{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                        <Button size="lg" onClick={() => setActiveTab("bank")}>
                                            <Building2 className="mr-2 h-4 w-4" />
                                            Give via Bank Transfer Instead
                                        </Button>
                                    </div>

                                    <p className="mt-6 text-sm text-church-text-light">
                                        Questions? Contact our finance team at{" "}
                                        <a
                                            href="mailto:finance@cactedo.org"
                                            className="text-primary hover:underline"
                                        >
                                            finance@cactedo.org
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ──────────────── BRANCH SELECTION TAB ──────────────── */}
                        {activeTab === "branch" && (
                            <div className="tab-content mx-auto max-w-5xl">
                                <div className="mb-12 text-center">
                                    <h2 className="mb-4 text-3xl font-bold text-church-text md:text-4xl">
                                        Support a Specific Branch
                                    </h2>
                                    <p className="text-lg text-church-text-light">
                                        Direct your giving to the location where you want to make an impact
                                    </p>
                                </div>

                                <div className="tab-stagger mb-8 grid gap-4 md:grid-cols-3">
                                    {branches.map((campus, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedCampus(index)}
                                            className={`tab-stagger-item rounded-xl border-2 p-6 text-left transition-all duration-300 ${selectedCampus === index
                                                ? "scale-105 border-primary bg-primary/5 shadow-lg"
                                                : "border-border hover:border-primary/30 hover:bg-muted/30"
                                                }`}
                                        >
                                            <div className="mb-2 flex items-start gap-3">
                                                <div
                                                    className={`rounded-lg p-2 ${selectedCampus === index
                                                        ? "bg-primary text-primary-foreground"
                                                        : "bg-muted"
                                                        }`}
                                                >
                                                    <MapPin className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h4
                                                        className={`text-lg font-bold ${selectedCampus === index
                                                            ? "text-primary"
                                                            : "text-church-text"
                                                            }`}
                                                    >
                                                        {campus.shortName}
                                                    </h4>
                                                    <p className="mt-1 line-clamp-2 text-xs text-church-text-light">
                                                        {campus.address}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                {/* Selected Campus Details */}
                                <Card className="campus-details overflow-hidden border-2 border-primary/20 shadow-xl">
                                    <div className="border-b border-primary/10 bg-primary/5 p-6">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-full bg-primary p-3 text-primary-foreground">
                                                <Building2 className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-church-text">
                                                    {branches[selectedCampus].name}
                                                </h3>
                                                <p className="mt-1 flex items-center gap-2 text-church-text-light">
                                                    <Clock10 className="h-4 w-4" />
                                                    {branches[selectedCampus].serviceTime}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="space-y-6 p-6">
                                        <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4">
                                            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                            <div>
                                                <p className="mb-1 font-medium text-church-text">Address</p>
                                                <p className="text-church-text-light">
                                                    {branches[selectedCampus].address}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="flex items-center gap-2 text-lg font-bold text-church-text">
                                                <Building2 className="h-5 w-5 text-primary" />
                                                Bank Accounts
                                            </h4>

                                            <div className="space-y-3">
                                                {branches[selectedCampus].bankAccounts.map((account, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-md"
                                                    >
                                                        <div className="mb-4 flex items-center gap-3">
                                                            <img
                                                                src={account.logo}
                                                                alt={account.bank}
                                                                className="h-8 w-8 object-contain"
                                                            />
                                                            <span className="font-bold text-church-text">
                                                                {account.bank}
                                                            </span>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <div className="flex items-center justify-between gap-4 rounded-lg bg-muted/50 p-3">
                                                                <div>
                                                                    <p className="mb-1 text-xs uppercase tracking-wider text-church-text-light">
                                                                        Account Number
                                                                    </p>
                                                                    <p className="font-mono text-xl font-bold text-church-text">
                                                                        {account.accountNumber}
                                                                    </p>
                                                                </div>
                                                                <Button
                                                                    size="icon"
                                                                    variant="outline"
                                                                    onClick={() =>
                                                                        handleCopyCampusAccountNumber(
                                                                            account.accountNumber,
                                                                            idx
                                                                        )
                                                                    }
                                                                    className="h-10 w-10 shrink-0"
                                                                >
                                                                    {copiedCampusIndex === idx ? (
                                                                        <Check className="h-4 w-4 text-green-600" />
                                                                    ) : (
                                                                        <Copy className="h-4 w-4 text-church-text" />
                                                                    )}
                                                                </Button>
                                                            </div>
                                                            {copiedCampusIndex === idx && (
                                                                <p className="animate-in fade-in slide-in-from-top-1 text-sm font-medium text-green-600">
                                                                    Copied to clipboard!
                                                                </p>
                                                            )}

                                                            <div>
                                                                <p className="mb-1 text-xs uppercase tracking-wider text-church-text-light">
                                                                    Account Name
                                                                </p>
                                                                <p className="font-medium text-church-text">
                                                                    {account.accountName}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Why Give Section */}
            <section className="bg-gradient-subtle py-16">
                <div className="container mx-auto px-6">
                    <div className="section-reveal mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-church-text">
                            Why Your Giving Matters
                        </h2>
                        <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
                    </div>

                    <div className="section-stagger mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Evangelism",
                                desc: "Supporting outreach programs that spread the gospel to unreached communities.",
                                icon: Globe,
                            },
                            {
                                title: "Discipleship",
                                desc: "Training and equipping believers to grow deeper in their faith and service.",
                                icon: Heart,
                            },
                            {
                                title: "Community",
                                desc: "Building facilities and resources that serve our congregation and neighbors.",
                                icon: Building2,
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="section-stagger-item p-6 text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-church-text">{item.title}</h3>
                                <p className="text-church-text-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="section-reveal mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-church-text">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-church-text-light">
                            Everything you need to know about giving
                        </p>
                    </div>

                    <div className="section-stagger space-y-4">
                        {[
                            {
                                q: "What is the difference between tithes and offerings?",
                                a: "Tithes are 10% of your income given as an act of worship and obedience. Offerings are additional gifts given voluntarily to support specific needs or projects.",
                            },
                            {
                                q: "How is my donation used?",
                                a: "Your giving supports our ministry operations, evangelism programs, facility maintenance, staff welfare, and community outreach initiatives.",
                            },
                            {
                                q: "Can I give anonymously?",
                                a: "Yes. For bank transfers, you can contact our finance team if you prefer to remain anonymous.",
                            },
                            {
                                q: "Is my payment information secure?",
                                a: "Absolutely. Bank transfers use your own secure banking platform. When we launch online giving, we will partner with PCI-DSS compliant payment processors to ensure your data is protected.",
                            },
                            {
                                q: "Can I get a receipt for tax purposes?",
                                a: "Yes, all donations are acknowledged. For bank transfers, contact finance@cactedo.org to request a receipt.",
                            },
                        ].map((faq, idx) => (
                            <div
                                key={idx}
                                className="section-stagger-item rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
                            >
                                <h3 className="mb-2 text-lg font-bold text-black">{faq.q}</h3>
                                <p className="leading-relaxed text-church-text-light">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                        Ready to Partner with Us?
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
                        "Each of you should give what you have decided in your heart to give, not
                        reluctantly or under compulsion, for God loves a cheerful giver." – 2 Corinthians
                        9:7
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="px-8 font-semibold"
                        onClick={() => {
                            setActiveTab("bank");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Start Giving Now
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GivePage;