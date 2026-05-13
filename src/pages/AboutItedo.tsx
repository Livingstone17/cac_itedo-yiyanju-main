import { useEffect } from 'react';
import { Users, Heart, BookOpen, Share2, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import Footer from '@/components/Footer';
import pastor from '../assets/pastor.jpg';
import yp from '../assets/evajala.jpg';
import ad from '../assets/adegbemi.jpg';
import eni from '../assets/enitinwa.jpg';
import clement from '../assets/amosu.jpg';
import akin from '../assets/akinrotimi.jpg';
import niyi from '../assets/niyi.jpg';

export default function AboutItedoPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pastorateMembers = [
        {
            id: 1,
            name: "Pastor Samson Akin-Olugbade",
            role: "Presiding Pastor",
            image: pastor,
            email: "samson.akinojugbade@cac.org",
            location: "Lagos, Nigeria",
            bio: "Founder and Presiding Pastor with over 30 years of apostolic ministry",
            socialLinks: [
                { platform: "facebook", url: "#", icon: Facebook },
                { platform: "twitter", url: "#", icon: Twitter },
                { platform: "linkedin", url: "#", icon: Linkedin },
            ]
        },
        {
            id: 2,
            name: "Evangelist Ajala Matthew",
            role: "Head, Youth Ministry",
            image: yp,
            email: "ajala.matthew@cac.org",
            location: "Lagos, Nigeria",
            bio: "Lead pastor with a passion for spiritual growth and discipleship",
            socialLinks: [
                { platform: "facebook", url: "#", icon: Facebook },
                { platform: "twitter", url: "#", icon: Twitter },
            ]
        },
        {
            id: 3,
            name: "Evangelist Peter Enitinwa",
            role: "Church Secretary",
            image: eni,
            email: "michael.ojekunle@cac.org",
            location: "Lagos State, Nigeria",
            bio: "Prayer warrior dedicated to intercession and spiritual warfare",
            socialLinks: [
                { platform: "facebook", url: "#", icon: Facebook },
                { platform: "linkedin", url: "#", icon: Linkedin },
            ]
        },
        {
            id: 4,
            name: "Evangelist Samson Akinrotomi",
            role: "Ifo Branch Pastor",
            image: akin,
            email: "adekunle.adebayo@cac.org",
            location: "Lagos, Nigeria",
            bio: "Youth enthusiast focused on empowering the next generation",
            socialLinks: [
                { platform: "facebook", url: "#", icon: Facebook },
                { platform: "twitter", url: "#", icon: Twitter },
                { platform: "linkedin", url: "#", icon: Linkedin },
            ]
        },
        {
            id: 5,
            name: "Evangelist Clement Amosu",
            role: "Head, Worship & Music",
            image: clement,
            email: "clement.amosu@cac.org",
            location: "Lagos, Nigeria",
            bio: "Youth enthusiast focused on empowering the next generation",
            socialLinks: [
                { platform: "facebook", url: "#", icon: Facebook },
                { platform: "twitter", url: "#", icon: Twitter },
                { platform: "linkedin", url: "#", icon: Linkedin },
            ]
        },
        {
            id: 6,
            name: "Evangelist Oluniyi Samson",
            role: "Presiding Pastor, Ikorodu Branch",
            image: niyi,
            email: "oluniyi.samson@cac.org",
            location: "Lagos, Nigeria",
            bio: "Youth enthusiast focused on empowering the next generation",
            socialLinks: [
                { platform: "facebook", url: "#", icon: Facebook },
                { platform: "twitter", url: "#", icon: Twitter },
                { platform: "linkedin", url: "#", icon: Linkedin },
            ]
        },
        {
            id: 7,
            name: "Pastor Y.A. Adegbemi",
            role: "Associate Pastor",
            image: ad,
            email: "adegbemi.adebayo@cac.org",
            location: "Lagos, Nigeria",
            bio: "Youth enthusiast focused on empowering the next generation",
            socialLinks: [
                { platform: "facebook", url: "#", icon: Facebook },
                { platform: "twitter", url: "#", icon: Twitter },
                { platform: "linkedin", url: "#", icon: Linkedin },
            ]
        },
    ];

    return (
        <>
            <section className="pt-32 pb-20 bg-background" id="itedo-history">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Page Title */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-church-text mb-6">
                            CAC Itedo <span className="text-church-gold">Yiyanju</span>
                        </h1>
                        <p className="text-lg text-church-text-light leading-relaxed">
                            A brief look into our local history and leadership
                        </p>
                    </div>

                    {/* History of CAC Itedo Yiyanju Section */}
                    <div className="mb-20">
                        <div className="relative pl-6 border-l-4 border-church-gold">
                            <h2 className="text-4xl font-bold text-church-text mb-8">
                                History of CAC Itedo <span className="text-church-gold">Yiyanju</span>
                            </h2>
                            <div className="space-y-6 text-church-text-light leading-relaxed">
                                <p>
                                    In October 2002, a divine journey began when the set man, Pastor Samson Akin-Olugbade, made the bold and obedient decision to resign from his position as a Regional Manager and Financial Director in an oil distribution company. In total surrender, he waited on the Lord for clear direction.
                                </p>
                                <p>
                                    In a profound encounter at Ikoyi Mountain, the Lord revealed Himself as the God of Abraham, Isaac, and Jacob, declaring, "I am the Lord God of Bethel. Go and build for Me an altar where nations of the world will gather to worship Me." With this divine mandate, he was instructed to begin in Alagbado, the birthplace of this ministry.
                                </p>
                                <p>
                                    In confirmation of this calling, God spoke to Prophet J. O. Odusanya, under whom Pastor Akin-Olugbade was serving in Ibadan, and he released him with his blessing. Thus, the ministry was birthed by divine instruction and prophetic confirmation.
                                </p>
                                <p>
                                    The work began with a powerful three-week revival, marked by 7 days of revival services, 7 days of night vigils, and 7 days of morning encounters. God moved mightily through His servants, including Prophet Samuel and Lady Evangelist Bakare. In the midst of this move, God instructed the commencement of Sunday worship services. In obedience, the church gathered, and lives were transformed. Notably, during this period, Mr. Tunji Kilani and his family joined the ministry and became an integral part of the work.
                                </p>
                                <p>
                                    In 2003, the church hosted Bethel 2003 with the theme "God of Bethel," where God's presence was tangibly experienced through the ministration of Prophet J. O. Odusanya.
                                </p>
                                <p>
                                    Soon after, the Lord established a divine pattern, a monthly program to be held every 15th, 16th, and 17th. This gathering became a beacon of God's power, drawing many as testimonies, miracles, and undeniable manifestations of His glory became evident. Through this, the church was divinely announced to the public.
                                </p>
                                <p>
                                    In 2004, Mr. Adetunji Kilani was ordained as an Evangelist. His unwavering dedication, accountability, and loyalty have remained pillars of strength within the ministry.
                                </p>
                                <p>
                                    The church was graciously given a piece of land beside the residence of Mr. and Mrs. Oyewole, where a humble place of worship was established. The choir, under the inspired leadership of Mrs. Kilani, ministered with excellence and passion.
                                </p>
                                <p>
                                    Then came a defining moment. Midway into the fourth year, the church was asked to vacate the land within 60 days. What could have been a setback became a setup for divine advancement. With faith unshaken, the church pressed on. God raised helpers, and by His grace, a new property was secured in June 2006.
                                </p>
                                <p>
                                    Construction began, and for months, worship continued under an open canopy. Yet, the presence of God remained undeniable. Even the fourth anniversary was celebrated under the canopy, a testimony that God's glory is not confined to structures. Today, by His grace, the ministry stands on solid ground, with the pastor's residence, office spaces, guest rooms, and children's halls fully established.
                                </p>
                                <p>
                                    From 2006 till now, the church has advanced with strength and purpose, birthing new assemblies and expanding the kingdom of God:
                                </p>
                                <p>
                                    C.A.C Chapel of Praise (2008), under Pastor O. S. Moronkeji
                                </p>
                                <p>
                                    C.A.C Itedo-Ono-Abayo (2009), under Pastor Adetunji Kilani
                                </p>
                                <p>
                                    C.A.C Itedo Yiyanju, Ikorodu (2010)
                                </p>
                                <p>
                                    C.A.C Itedo Yiyanju, Ifo (2016)
                                </p>
                                <p>
                                    Each branch stands today as a testimony of God's faithfulness, growing stronger and impacting lives.
                                </p>
                                <p>
                                    In 2025, by the grace of God, the church was elevated to a District Headquarters, a clear sign of divine growth, influence, and increased responsibility in God's kingdom.
                                </p>
                                <p>
                                    We believe that church should be a place of healing, hope, light, communion and transformation. Through authentic worship, practical teaching, word-based prayers and genuine community, we've seen countless lives changed by the power of God's love.
                                </p>
                                <p>
                                    Today, we're not just a church, we're a family committed to making a lasting impact in our city and beyond. Join us as we continue this incredible journey together.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Pastorate Section */}
                    <div className="mb-20">
                        <div className="relative pl-6 border-l-4 border-church-gold">
                            <h2 className="text-4xl font-bold text-church-text mb-8">
                                The <span className="text-church-gold">Pastorate</span>
                            </h2>
                            <div className="space-y-8 text-church-text-light leading-relaxed">
                                <p className="text-lg">
                                    The pastorate of CAC Itedo Yiyanju is dedicated to providing spiritual leadership, pastoral care, and apostolic oversight to the body of Christ. Our leadership team is committed to:
                                </p>

                                {/* Leadership Responsibilities */}
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 flex items-start">
                                        <Users className="w-6 h-6 text-church-gold mr-4 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-church-text mb-2">Spiritual Oversight</h4>
                                            <p className="text-sm">
                                                Providing pastoral care, counseling, and spiritual guidance to members
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 flex items-start">
                                        <BookOpen className="w-6 h-6 text-church-gold mr-4 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-church-text mb-2">Teaching & Doctrine</h4>
                                            <p className="text-sm">
                                                Teaching sound biblical doctrine and apostolic principles
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 flex items-start">
                                        <Heart className="w-6 h-6 text-church-gold mr-4 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-church-text mb-2">Spiritual Care</h4>
                                            <p className="text-sm">
                                                Ministering to the sick, afflicted, and those in need
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 flex items-start">
                                        <Share2 className="w-6 h-6 text-church-gold mr-4 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-church-text mb-2">Community Impact</h4>
                                            <p className="text-sm">
                                                Engaging in outreach and service to our local communities
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pastoral Vision */}
                                <div className="bg-gradient-to-r from-church-blue/5 to-church-gold/5 rounded-lg p-8 border border-church-gold/20 mt-10">
                                    <h4 className="text-2xl font-bold text-church-text mb-3">Our Vision</h4>
                                    <p className="text-church-text-light leading-relaxed mb-6">
                                        To raise a generation of holy, undiluted, and consecrated saints, prepared and made ready for the glorious return of our Lord and Saviour, Jesus Christ.
                                    </p>

                                    <h4 className="text-2xl font-bold text-church-text mb-3">Our Ministry</h4>
                                    <p className="text-church-text-light leading-relaxed mb-6">
                                        To nurture and build believers through the undiluted Word of God, raising them as true saints, while engaging in spiritual warfare against every force that seeks to hinder them from walking in the fullness of redemption in Christ.
                                    </p>

                                    <h4 className="text-2xl font-bold text-church-text mb-3">Our Mandate</h4>
                                    <p className="text-church-text-light leading-relaxed">
                                        To build an altar unto the Lord where nations of the world will gather in unity to bow, worship, and encounter the God of Bethel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pastorate Members Section */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-church-text mb-12 text-center">
                            Meet Our <span className="text-church-gold">Pastorate</span>
                        </h2>
                        <p className="text-center text-church-text-light mb-12 max-w-2xl mx-auto">
                            Dedicated leaders serving CAC Itedo Yiyanju with passion, integrity, and apostolic vision
                        </p>

                        {/* Pastorate Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {pastorateMembers.map((pastor) => (
                                <div
                                    key={pastor.id}
                                    className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                                >
                                    {/* Pastor Image */}
                                    <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-church-blue to-church-blue/80">
                                        <img
                                            src={pastor.image}
                                            alt={pastor.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Pastor Info */}
                                    <div className="p-6">
                                        {/* Name and Role */}
                                        <h3 className="text-2xl font-bold text-church-text mb-1">
                                            {pastor.name}
                                        </h3>
                                        <p className="text-church-gold font-semibold mb-4">
                                            {pastor.role}
                                        </p>

                                        {/* Bio */}
                                        <p className="text-church-text-light text-sm mb-4 leading-relaxed">
                                            {pastor.bio}
                                        </p>

                                        {/* Contact Info */}
                                        <div className="space-y-2 mb-6 py-4 border-t border-b border-border">
                                            {/* <div className="flex items-center gap-3 text-sm">
                                                <Mail className="w-4 h-4 text-church-gold flex-shrink-0" />
                                                <a
                                                    href={`mailto:${pastor.email}`}
                                                    className="text-church-text-light hover:text-church-gold transition-colors"
                                                >
                                                    {pastor.email}
                                                </a>
                                            </div> */}
                                            <div className="flex items-center gap-3 text-sm">
                                                <MapPin className="w-4 h-4 text-church-gold flex-shrink-0" />
                                                <span className="text-church-text-light">
                                                    {pastor.location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        {/* <div className="flex gap-3">
                                            {pastor.socialLinks.map((link) => {
                                                const IconComponent = link.icon;
                                                return (
                                                    <a
                                                        key={link.platform}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-lg bg-gray-100 text-church-text-light hover:bg-church-gold hover:text-white transition-all duration-300"
                                                        title={link.platform}
                                                    >
                                                        <IconComponent className="w-5 h-5" />
                                                    </a>
                                                );
                                            })}
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Connection CTA */}
                    <div className="bg-gradient-to-r from-church-blue/10 to-church-gold/10 rounded-lg p-8 border border-church-gold/20 text-center">
                        <h3 className="text-2xl font-bold text-church-text mb-4">
                            Connect With Our Community
                        </h3>
                        <p className="text-church-text-light mb-6 max-w-2xl mx-auto">
                            Experience the warmth of Christian fellowship and the power of apostolic ministry at CAC Itedo Yiyanju. You are warmly invited to join us in worship, prayer, and service.
                        </p>
                        <a
                            href="/events"
                            className="inline-block px-8 py-3 bg-church-gold text-white rounded-lg hover:bg-church-gold/90 transition-colors duration-300 font-semibold"
                        >
                            View Our Events
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
