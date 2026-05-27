import { useEffect, useRef } from "react";
import { Users, Heart, BookOpen, Share2, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Footer from "@/components/Footer";
import pastor from "../assets/pastor.jpg";
import yp from "../assets/evajala.jpg";
import ad from "../assets/adegbemi.jpg";
import eni from "../assets/enitinwa.jpg";
import clement from "../assets/amosu.jpg";
import akin from "../assets/akinrotimi.jpg";
import niyi from "../assets/niyi.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutItedoPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // =========================
      // PAGE HERO (Apple fade up)
      // =========================
      gsap.from(".hero-reveal", {
        scrollTrigger: {
          trigger: ".hero-reveal",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // =========================
      // HISTORY TEXT (soft stagger)
      // =========================
      gsap.from("#itedo-history .stagger-item", {
        scrollTrigger: {
          trigger: "#itedo-history .stagger",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
      });

      // =========================
      // PASTORATE CARDS
      // =========================
      gsap.fromTo(
        "#pastorate .card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#pastorate",
            start: "top 75%",
            toggleActions: "play none none none",
            once: true, // 🔥 prevents reset/fade issues
          },
        }
      );

      // =========================
      // CAROUSEL (subtle scale-in)
      // =========================
      gsap.from(".pastorate-carousel", {
        scrollTrigger: {
          trigger: ".pastorate-carousel",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
      });

      // =========================
      // CTA
      // =========================
      gsap.from(".cta-reveal", {
        scrollTrigger: {
          trigger: ".cta-reveal",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const pastorateMembers = [
    {
      id: 1,
      name: "Pastor Samson Akin-Olugbade",
      role: "Presiding Pastor",
      image: pastor,
      email: "samson.akinojugbade@cac.org",
      location: "Lagos, Nigeria",
      bio: "A visionary shepherd and apostolic leader, devoted to raising a Christ-centered generation through sound doctrine and transformative ministry. With over 30years of Apostolic Ministry",
      socialLinks: [
        { platform: "facebook", url: "#", icon: Facebook },
        { platform: "twitter", url: "#", icon: Twitter },
        { platform: "linkedin", url: "#", icon: Linkedin },
      ],
    },
    {
      id: 2,
      name: "Evangelist Ajala Matthew",
      role: "Head, Youth Ministry",
      image: yp,
      email: "ajala.matthew@cac.org",
      location: "Lagos, Nigeria",
      bio: "Passionate about igniting purpose in young lives, raising a bold and spiritually grounded generation for Christ.",
      socialLinks: [
        { platform: "facebook", url: "#", icon: Facebook },
        { platform: "twitter", url: "#", icon: Twitter },
      ],
    },
    {
      id: 3,
      name: "Evangelist Peter Enitinwa",
      role: "Church Secretary",
      image: eni,
      email: "michael.ojekunle@cac.org",
      location: "Lagos State, Nigeria",
      bio: "A diligent steward of order and service, committed to advancing the work of the ministry with excellence and integrity.",
      socialLinks: [
        { platform: "facebook", url: "#", icon: Facebook },
        { platform: "linkedin", url: "#", icon: Linkedin },
      ],
    },
    {
      id: 4,
      name: "Evangelist Samson Akinrotomi",
      role: "Ifo Branch Pastor",
      image: akin,
      email: "adekunle.adebayo@cac.org",
      location: "Lagos, Nigeria",
      bio: "A devoted shepherd, nurturing believers and strengthening the local assembly through faithful teaching and pastoral care.",
      socialLinks: [
        { platform: "facebook", url: "#", icon: Facebook },
        { platform: "twitter", url: "#", icon: Twitter },
        { platform: "linkedin", url: "#", icon: Linkedin },
      ],
    },
    {
      id: 5,
      name: "Evangelist Clement Amosu",
      role: "Head, Worship & Music",
      image: clement,
      email: "clement.amosu@cac.org",
      location: "Lagos, Nigeria",
      bio: "A vessel of worship, leading hearts into God’s presence through spirit-filled praise and uplifting melodies.",
      socialLinks: [
        { platform: "facebook", url: "#", icon: Facebook },
        { platform: "twitter", url: "#", icon: Twitter },
        { platform: "linkedin", url: "#", icon: Linkedin },
      ],
    },
    {
      id: 6,
      name: "Evangelist Oluniyi Samson",
      role: "Presiding Pastor, Ikorodu Branch",
      image: niyi,
      email: "oluniyi.samson@cac.org",
      location: "Lagos, Nigeria",
      bio: "A passionate leader committed to building a thriving branch where lives are transformed and destinies are shaped.",
      socialLinks: [
        { platform: "facebook", url: "#", icon: Facebook },
        { platform: "twitter", url: "#", icon: Twitter },
        { platform: "linkedin", url: "#", icon: Linkedin },
      ],
    },
    {
      id: 7,
      name: "Pastor Y.A. Adegbemi",
      role: "Associate Pastor",
      image: ad,
      email: "adegbemi.adebayo@cac.org",
      location: "Lagos, Nigeria",
      bio: "A faithful co-laborer in ministry, supporting the vision and strengthening the church through teaching, counsel, and service.",
      socialLinks: [
        { platform: "facebook", url: "#", icon: Facebook },
        { platform: "twitter", url: "#", icon: Twitter },
        { platform: "linkedin", url: "#", icon: Linkedin },
      ],
    },
  ];

  return (
    <>
      <section ref={pageRef} className="bg-background pb-20 pt-32" id="itedo-history">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Page Title */}
          <div className="mb-16 hero-reveal">
            <h1 className="mb-6 text-5xl font-bold text-church-text md:text-6xl">
              CAC Itedo <span className="text-church-gold">Yiyanju</span>
            </h1>
            <p className="text-lg leading-relaxed text-church-text-light">A brief look into our local history and leadership</p>
          </div>

          {/* History of CAC Itedo Yiyanju Section */}
          <section className="mb-20">
            <div className="relative border-l-4 border-church-gold pl-6">
              <h2 className="mb-8 text-4xl font-bold text-church-text stagger-item">
                History of CAC Itedo <span className="text-church-gold">Yiyanju</span>
              </h2>
              <div className="space-y-6 leading-relaxed text-church-text-light stagger">
                <p className="stagger-item">In October 2002, a divine journey began when the set man, Pastor Samson Akin-Olugbade, made the bold and obedient decision to resign from his position as a Regional Manager and Financial Director in an oil distribution company. In total surrender, he waited on the Lord for clear direction.</p>
                <p className="stagger-item">In a profound encounter at Ikoyi Mountain, the Lord revealed Himself as the God of Abraham, Isaac, and Jacob, declaring, "I am the Lord God of Bethel. Go and build for Me an altar where nations of the world will gather to worship Me." With this divine mandate, he was instructed to begin in Alagbado, the birthplace of this ministry.</p>
                <p className="stagger-item">In confirmation of this calling, God spoke to Prophet J. O. Odusanya, under whom Pastor Akin-Olugbade was serving in Ibadan, and he released him with his blessing. Thus, the ministry was birthed by divine instruction and prophetic confirmation.</p>
                <p className="stagger-item">The work began with a powerful three-week revival, marked by 7 days of revival services, 7 days of night vigils, and 7 days of morning encounters. God moved mightily through His servants, including Prophet Samuel and Lady Evangelist Bakare. In the midst of this move, God instructed the commencement of Sunday worship services. In obedience, the church gathered, and lives were transformed. Notably, during this period, Mr. Tunji Kilani and his family joined the ministry and became an integral part of the work.</p>
                <p className="stagger-item">In 2003, the church hosted Bethel 2003 with the theme "God of Bethel," where God's presence was tangibly experienced through the ministration of Prophet J. O. Odusanya.</p>
                <p className="stagger-item">Soon after, the Lord established a divine pattern, a monthly program to be held every 15th, 16th, and 17th. This gathering became a beacon of God's power, drawing many as testimonies, miracles, and undeniable manifestations of His glory became evident. Through this, the church was divinely announced to the public.</p>
                <p className="stagger-item">In 2004, Mr. Adetunji Kilani was ordained as an Evangelist. His unwavering dedication, accountability, and loyalty have remained pillars of strength within the ministry.</p>
                <p className="stagger-item">The church was graciously given a piece of land beside the residence of Mr. and Mrs. Oyewole, where a humble place of worship was established. The choir, under the inspired leadership of Mrs. Kilani, ministered with excellence and passion.</p>
                <p className="stagger-item">Then came a defining moment. Midway into the fourth year, the church was asked to vacate the land within 60 days. What could have been a setback became a setup for divine advancement. With faith unshaken, the church pressed on. God raised helpers, and by His grace, a new property was secured in June 2006.</p>
                <p className="stagger-item">Construction began, and for months, worship continued under an open canopy. Yet, the presence of God remained undeniable. Even the fourth anniversary was celebrated under the canopy, a testimony that God's glory is not confined to structures. Today, by His grace, the ministry stands on solid ground, with the pastor's residence, office spaces, guest rooms, and children's halls fully established.</p>
                <p className="stagger-item">From 2006 till now, the church has advanced with strength and purpose, birthing new assemblies and expanding the kingdom of God:</p>
                <p className="stagger-item">C.A.C Chapel of Praise (2008), under Pastor O. S. Moronkeji</p>
                <p className="stagger-item">C.A.C Itedo-Ono-Abayo (2009), under Pastor Adetunji Kilani</p>
                <p className="stagger-item">C.A.C Itedo Yiyanju, Ikorodu (2010)</p>
                <p className="stagger-item">C.A.C Itedo Yiyanju, Ifo (2016)</p>
                <p className="stagger-item">Each branch stands today as a testimony of God's faithfulness, growing stronger and impacting lives.</p>
                <p className="stagger-item">In 2025, by the grace of God, the church was elevated to a District Headquarters, a clear sign of divine growth, influence, and increased responsibility in God's kingdom.</p>
                <p className="stagger-item">We believe that church should be a place of healing, hope, light, communion and transformation. Through authentic worship, practical teaching, word-based prayers and genuine community, we've seen countless lives changed by the power of God's love.</p>
                <p className="stagger-item">Today, we're not just a church, we're a family committed to making a lasting impact in our city and beyond. Join us as we continue this incredible journey together.</p>
              </div>
            </div>
          </section>

          {/* The Pastorate Section */}
          <section id="pastorate" className="mb-20">
            <div className="relative border-l-4 border-church-gold pl-6">
              <h2 className="mb-8 text-4xl font-bold text-church-text stagger-item">
                The <span className="text-church-gold">Pastorate</span>
              </h2>
              <div className="space-y-8 leading-relaxed text-church-text-light">
                <p className="text-lg">The pastorate of CAC Itedo Yiyanju is dedicated to providing spiritual leadership, pastoral care, and apostolic oversight to the body of Christ. Our leadership team is committed to:</p>

                {/* Leadership Responsibilities */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="card flex items-start rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
                    <Users className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-church-gold" />
                    <div>
                      <h4 className="mb-2 font-bold text-church-text stagger-item">Spiritual Oversight</h4>
                      <p className="text-sm">Providing pastoral care, counseling, and spiritual guidance to members</p>
                    </div>
                  </div>

                  <div className="card  flex items-start rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
                    <BookOpen className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-church-gold" />
                    <div>
                      <h4 className="mb-2 font-bold text-church-text stagger-item">Teaching & Doctrine</h4>
                      <p className="text-sm">Teaching sound biblical doctrine and apostolic principles</p>
                    </div>
                  </div>

                  <div className="card flex items-start rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
                    <Heart className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-church-gold" />
                    <div>
                      <h4 className="mb-2 font-bold text-church-text stagger-item">Spiritual Care</h4>
                      <p className="text-sm">Ministering to the sick, afflicted, and those in need</p>
                    </div>
                  </div>

                  <div className="card flex items-start rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
                    <Share2 className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-church-gold" />
                    <div>
                      <h4 className="mb-2 font-bold text-church-text stagger-item">Community Impact</h4>
                      <p className="text-sm">Engaging in outreach and service to our local communities</p>
                    </div>
                  </div>
                </div>

                {/* Pastoral Vision */}
                <div className="mt-10 rounded-lg border border-church-gold/20 bg-gradient-to-r from-church-blue/5 to-church-gold/5 p-8">
                  <h4 className="mb-3 text-2xl font-bold text-church-text stagger-item">Our Vision</h4>
                  <p className="mb-6 leading-relaxed text-church-text-light">To raise a generation of holy, undiluted, and consecrated saints, prepared and made ready for the glorious return of our Lord and Saviour, Jesus Christ.</p>

                  <h4 className="mb-3 text-2xl font-bold text-church-text stagger-item">Our Ministry</h4>
                  <p className="mb-6 leading-relaxed text-church-text-light">To nurture and build believers through the undiluted Word of God, raising them as true saints, while engaging in spiritual warfare against every force that seeks to hinder them from walking in the fullness of redemption in Christ.</p>

                  <h4 className="mb-3 text-2xl font-bold text-church-text stagger-item">Our Mandate</h4>
                  <p className="leading-relaxed text-church-text-light">To build an altar unto the Lord where nations of the world will gather in unity to bow, worship, and encounter the God of Bethel.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Pastorate Carousel — Full Width */}
        <section className="mb-20">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-4 text-center text-4xl font-bold text-church-text">
              Meet Our <span className="text-church-gold">Pastorate</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-church-text-light">Dedicated leaders serving CAC Itedo Yiyanju with passion, integrity, and apostolic vision</p>
          </div>

          <div className="pastorate-carousel mx-auto max-w-6xl px-4">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation
              pagination={{ clickable: true }}
              loop
              breakpoints={{
                480: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="pb-14"
            >
              {pastorateMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg">
                    {/* Pastor Image */}
                    <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-church-blue to-church-blue/80">
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Pastor Info */}
                    <div className="p-5">
                      <h3 className="mb-1 text-lg font-bold text-church-text">{member.name}</h3>
                      <p className="mb-3 text-sm font-semibold text-church-gold">{member.role}</p>
                      <p className="mb-4 text-sm leading-relaxed text-church-text-light">{member.bio}</p>

                      {/* Contact Info */}
                      <div className="mb-4 border-t border-border pt-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 flex-shrink-0 text-church-gold" />
                          <span className="text-church-text-light">{member.location}</span>
                        </div>
                      </div>

                      {/* Social Links */}
                      {/* <div className="flex gap-3">
                        {member.socialLinks.map((link) => {
                          const SocialIcon = link.icon;
                          return (
                            <a key={link.platform} href={link.url} className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-church-text-light transition-all duration-300 hover:border-church-gold hover:bg-church-gold/10 hover:text-church-gold" aria-label={link.platform}>
                              <SocialIcon className="h-4 w-4" />
                            </a>
                          );
                        })}
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Connection CTA */}
        <div className="container mx-auto max-w-4xl px-4 cta-reveal">
          <div className="rounded-lg border border-church-gold/20 bg-gradient-to-r from-church-blue/10 to-church-gold/10 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-church-text">Connect With Our Community</h3>
            <p className="mx-auto mb-6 max-w-2xl text-church-text-light">Experience the warmth of Christian fellowship and the power of apostolic ministry at CAC Itedo Yiyanju. You are warmly invited to join us in worship, prayer, and service.</p>
            <a href="/events" className="inline-block rounded-lg bg-church-gold px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-church-gold/90">
              View Our Events
            </a>
          </div>
        </div>
      </section>
      <Footer />

      {/* Carousel custom styles */}
      <style>{`
        .pastorate-carousel .swiper-button-next,
        .pastorate-carousel .swiper-button-prev {
          color: var(--church-gold, #d4a843);
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .pastorate-carousel .swiper-button-next::after,
        .pastorate-carousel .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }

        .pastorate-carousel .swiper-button-next:hover,
        .pastorate-carousel .swiper-button-prev:hover {
          background: var(--church-gold, #d4a843);
          color: white;
          border-color: var(--church-gold, #d4a843);
        }

        .pastorate-carousel .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground));
          opacity: 0.4;
          width: 10px;
          height: 10px;
        }

        .pastorate-carousel .swiper-pagination-bullet-active {
          background: #d4a843;
        }

        /* Hide navigation arrows on mobile */
        @media (max-width: 640px) {
          .pastorate-carousel .swiper-button-next,
          .pastorate-carousel .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
