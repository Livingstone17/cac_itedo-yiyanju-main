import { useEffect } from 'react';
import { Users, Heart, BookOpen, Share2, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import Footer from '@/components/Footer';
import pastor from '../assets/pastor.jpg';
import yp from '../assets/ajala.jpg';

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
            name: "Pastor Ajala Matthew",
            role: "Youth Pastor",
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
            role: "Church Secretary / Prayer Coordinator",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
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
            name: "Pastor Samson Akinrotomi",
            role: "Ifo Branch Pastor",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
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
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
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
            name: "Pastor Y.A. Adegbemi",
            role: "Head, Programmes & Outreach",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
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
                                    Founded in 2002, CAC Itedo Yiyanju began as a small group of families with a big vision: to create a place where everyone could experience God's love, be liberated from the hold of darkness, and find their purpose in God. What started in a living room has grown into a thriving community of over 1000 members.
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
                                    <h4 className="text-2xl font-bold text-church-text mb-4">Our Pastoral Vision</h4>
                                    <p className="text-church-text-light leading-relaxed mb-4">
                                        The pastorate of CAC Itedo Yiyanju envisions a community of believers who are:
                                    </p>
                                    <ul className="space-y-3 text-church-text-light">
                                        <li className="flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">•</span>
                                            <span>Deeply rooted in God's Word and apostolic truth</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">•</span>
                                            <span>Empowered by the Holy Spirit for ministry and service</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">•</span>
                                            <span>Living holy and separated lives that glorify Christ</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">•</span>
                                            <span>Engaged in prayer, intercession, and spiritual warfare</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">•</span>
                                            <span>Actively involved in discipleship and mentoring others</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">•</span>
                                            <span>Committed to reaching the lost and expanding God's kingdom</span>
                                        </li>
                                    </ul>
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
                                            <div className="flex items-center gap-3 text-sm">
                                                <Mail className="w-4 h-4 text-church-gold flex-shrink-0" />
                                                <a
                                                    href={`mailto:${pastor.email}`}
                                                    className="text-church-text-light hover:text-church-gold transition-colors"
                                                >
                                                    {pastor.email}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <MapPin className="w-4 h-4 text-church-gold flex-shrink-0" />
                                                <span className="text-church-text-light">
                                                    {pastor.location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex gap-3">
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
                                        </div>
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
