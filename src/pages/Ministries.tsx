import { useEffect } from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';
import Footer from '@/components/Footer';
import { addSchemaToHead } from '@/lib/schema';
import choir from '../assets/choir.jpg';
import youth from '../assets/program.jpg';
import prayer from '../assets/prayer.jpg';
import ss from '../assets/sunday_school.jpg';
import media from '../assets/front_shirt.png';
import usher from '../assets/usher.jpg'
import { HashLink } from "react-router-hash-link";


export default function MinistriesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Add structured data for ministries page
        const ministriesSchema = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "CAC Itedo Yiyanju Ministries",
            "url": "https://cacitedoyiyanju.org/ministries",
            "description": "Explore all ministries at CAC Itedo Yiyanju. Find your place to serve and grow in faith with our various ministry teams.",
            "isPartOf": {
                "@type": "WebSite",
                "name": "CAC Itedo Yiyanju",
                "url": "https://cacitedoyiyanju.org"
            },
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://cacitedoyiyanju.org"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Ministries",
                        "item": "https://cacitedoyiyanju.org/ministries"
                    }
                ]
            }
        };

        addSchemaToHead(ministriesSchema);
    }, []);

    const allMinistries = [
        {
            id: 1,
            name: 'Worship & Music',
            shortDescription: 'Leading hearts into God’s presence through spirit-filled praise and worship',
            fullDescription: 'The Worship & Music ministry is dedicated to creating an atmosphere where hearts are lifted and lives are transformed in God’s presence. Through spirit-led praise, worship, and musical excellence, we help draw people closer to Christ and foster deeper encounters with Him.',
            schedule: 'Thursdays & Saturdays, 5:00 PM',
            image: choir
        },
        {
            id: 2,
            name: 'Prayer & Intercession',
            shortDescription: 'Standing in the gap through fervent and effectual prayer',
            fullDescription: 'The Prayer & Intercession ministry is committed to seeking the face of God on behalf of the church, families, and nations. Through consistent and heartfelt prayer, we birth God’s will on earth, strengthen the body of Christ, and invite divine intervention into every situation.',
            schedule: 'Daily & Special Prayer Sessions',
            image: prayer
        },
        {
            id: 3,
            name: 'Youth & Young Adults',
            shortDescription: 'Raising a generation rooted in Christ and purpose',
            fullDescription: 'The Youth & Young Adults ministry is focused on discipling and empowering young believers to discover their identity and purpose in Christ. Through mentorship, teaching, and engaging programs, we equip them to live boldly for God and impact their generation.',
            schedule: '2nd Fridays, 11:00 PM',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop'
        },
        {
            id: 4,
            name: 'Teens Growth',
            shortDescription: 'Nurturing teens into grounded and Spirit-led believers',
            fullDescription: 'The Teens Growth ministry is devoted to nurturing teenagers in their walk with God, helping them build a strong spiritual foundation early in life. Through discipleship, fellowship, and mentorship, we raise teens who are rooted in Christ and confident in their faith.',
            schedule: 'To be announced',
            image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop'
        },
        {
            id: 5,
            name: 'Sunday School & Teaching',
            shortDescription: 'Deepening faith through sound biblical teaching',
            fullDescription: 'The Sunday School & Teaching ministry is dedicated to grounding believers in the Word of God. Through structured teaching, Bible study, and discipleship classes, we help members grow in spiritual understanding and live out their faith practically.',
            schedule: 'Saturdays 4:00 PM - 6:00 PM',
            image: ss
        },
        {
            id: 6,
            name: 'Pastoral Care',
            shortDescription: 'Walking with believers through every season of life',
            fullDescription: 'The Pastoral Care ministry provides spiritual support, counseling, and encouragement to members of the church. With compassion and wisdom, we stand with individuals and families in times of need, offering prayer, guidance, and biblical counsel.',
            schedule: 'By Appointment',
            contact: '+2348033072838',
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop'
        },
        {
            id: 7,
            name: 'Media & Technical',
            shortDescription: 'Amplifying the message of Christ through media and technology',
            fullDescription: 'The Media & Technical team serves as a vital channel for spreading the gospel beyond the walls of the church. Through excellence in audio-visual production, live streaming, and digital platforms, they ensure every message is clearly seen and heard. With skill and dedication, they create an atmosphere where worship flows seamlessly and lives are impacted both in-house and across the world.',
            schedule: 'By Appointment',
            contact: '+234 816 422 4586',
            image: media
        },
        {
            id: 8,
            name: 'Ushering and Protocol',
            shortDescription: 'Ensuring order, warmth, and excellence in every worship experience',
            fullDescription: 'The Ushering and Protocol team serves as the church’s first point of contact, creating a welcoming and orderly atmosphere for all. They guide seating, coordinate movement during services, and uphold reverence in God’s house. With hearts of service and attention to detail, they help ensure that every worship experience flows smoothly, allowing congregants to focus fully on encountering God.',
            schedule: 'By Appointment',
            contact: '+234 816 422 4586',
            image: usher
        }
    ];

    return (
        <div className="min-h-screen pt-16 bg-background">
            {/* Header */}
            <section className="py-16 bg-gradient-to-b from-background to-muted/25">
                <div className="container mx-auto px-4 max-w-5xl">
                    <p className="text-base font-semibold text-church-gold tracking-widest uppercase mb-4">
                        🌍 Our Ministries
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-church-text mb-6">
                        Get <span className="text-church-gold">Involved</span>
                    </h1>
                    <p className="text-lg text-church-text-light max-w-3xl">
                        Our ministries are expressions of our mandate as a church and community. We serve God by His Spirit—joyfully. There's a place for everyone to grow, serve, and discover their purpose in Christ.
                    </p>
                </div>
            </section>

            {/* Ministries Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                        {allMinistries.map((ministry) => (
                            <div key={ministry.id} className="group">
                                {/* Image */}
                                <div className="overflow-hidden rounded-lg mb-8 h-64">
                                    <img
                                        src={ministry.image}
                                        alt={ministry.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-church-text mb-3">
                                        {ministry.name}
                                    </h2>
                                    <p className="text-base text-church-text-light mb-6 leading-relaxed">
                                        {ministry.fullDescription}
                                    </p>

                                    {/* Info Cards */}
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <Calendar className="w-5 h-5 text-church-gold mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs text-church-text-light/70 font-semibold uppercase tracking-wide">Schedule</p>
                                                <p className="text-church-text font-medium">{ministry.schedule}</p>
                                            </div>
                                        </div>
                                        {/* <div className="flex items-start gap-4">
                                            <Mail className="w-5 h-5 text-church-gold mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs text-church-text-light/70 font-semibold uppercase tracking-wide">Get in Touch</p>
                                                <a
                                                    href={`mailto:${ministry.contact}`}
                                                    className="text-church-gold hover:text-church-gold/80 font-medium transition-colors"
                                                >
                                                    {ministry.contact}
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-border mt-8"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-6">
                        Ready to Get <span className="text-church-gold">Involved?</span>
                    </h2>
                    <p className="text-lg text-church-text-light mb-8 max-w-2xl mx-auto">
                        Whether you're looking to serve, grow spiritually, or make a difference in your community, there's a ministry perfect for you. Reach out to any ministry lead or contact our office to learn more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <HashLink smooth
                            to="/#contact"
                            className="inline-block bg-church-gold hover:bg-church-gold/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                        >
                            Contact Us
                        </HashLink>
                        <a
                            href="mailto:pastoral@cacitedo.org"
                            className="inline-block border-2 border-church-gold text-church-gold hover:bg-church-gold/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                        >
                            Email Pastoral Office
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
