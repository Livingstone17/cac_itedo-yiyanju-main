import { useEffect } from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';
import Footer from '@/components/Footer';
import { addSchemaToHead } from '@/lib/schema';

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
            shortDescription: 'Experience God through powerful praise and worship',
            fullDescription: 'Our Worship ministry is dedicated to creating inspiring musical experiences that draw hearts closer to God. We produce authentic worship expressions that deepen relationships with Christ and inspire our community.',
            schedule: 'Thursdays & Wednesdays, 5:00 PM',
            contact: 'worship@cacitedo.org',
            image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            name: 'Prayer & Intercession',
            shortDescription: 'Join us in powerful intercessory prayer',
            fullDescription: 'We are committed to intercessory prayer for our church, community, and the world. Through prayer, we seek God\'s will, wisdom, and divine intervention in all circumstances. Prayer is the heartbeat of our ministry.',
            schedule: 'Daily & Special Prayer Sessions',
            contact: 'prayer@cacitedo.org',
            image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            name: 'Youth & Young Adults',
            shortDescription: 'Empowering the next generation in Christ',
            fullDescription: 'Our Youth ministry focuses on discipling young believers and helping them discover their purpose in God. Through dynamic programs, mentorship, and leadership training, we equip young people to make a lasting impact for Christ.',
            schedule: 'Fridays 6:00 PM & Saturdays 4:00 PM',
            contact: 'youth@cacitedo.org',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop'
        },
        {
            id: 4,
            name: 'Teens Growth',
            shortDescription: 'Sons and Daughters of the Prophet',
            fullDescription: 'We extend God\'s love beyond our church walls through community service, charitable works, and social impact initiatives. We believe in serving our neighbors and being a blessing to those in need.',
            schedule: 'Saturdays 10:00 AM - 2:00 PM',
            contact: 'outreach@cacitedo.org',
            image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop'
        },
        {
            id: 5,
            name: 'Sunday School & Teaching',
            shortDescription: 'Growing in biblical knowledge and discipleship',
            fullDescription: 'Our Teaching ministry provides biblical education for all ages. We offer engaging classes and materials designed to help believers grow in their understanding of God\'s Word and develop a strong spiritual foundation.',
            schedule: 'Saturdays 4:00 PM - 6:00 PM',
            contact: 'education@cacitedo.org',
            image: 'https://images.unsplash.com/photo-1427504494814-3206461229cc?w=600&h=400&fit=crop'
        },
        {
            id: 6,
            name: 'Pastoral Care',
            shortDescription: 'Compassionate support in every season of life',
            fullDescription: 'Our pastoral care team is available to provide spiritual guidance, counseling, and support during challenging times. We believe in walking with our members through every season, offering prayers, wisdom, and biblical counsel.',
            schedule: 'By Appointment',
            contact: 'pastoral@cacitedo.org',
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop'
        },
        {
            id: 7,
            name: 'Media & Technical',
            shortDescription: 'Creating and managing digital content for our church',
            fullDescription: 'Our Media & Technical team is responsible for creating and managing digital content for our church. This includes video production, live streaming, website maintenance, and technical support for our services.',
            schedule: 'By Appointment',
            contact: 'media@cacitedo.org',
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop'
        }
    ];

    return (
        <div className="min-h-screen pt-16 bg-background">
            {/* Header */}
            <section className="py-16 bg-gradient-to-b from-white to-background">
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
                                        <div className="flex items-start gap-4">
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
                                        </div>
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-6">
                        Ready to Get <span className="text-church-gold">Involved?</span>
                    </h2>
                    <p className="text-lg text-church-text-light mb-8 max-w-2xl mx-auto">
                        Whether you're looking to serve, grow spiritually, or make a difference in your community, there's a ministry perfect for you. Reach out to any ministry lead or contact our office to learn more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="inline-block bg-church-gold hover:bg-church-gold/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                        >
                            Contact Us
                        </a>
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
