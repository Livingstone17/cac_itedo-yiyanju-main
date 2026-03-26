import { Card, CardContent } from '@/components/ui/card';
import choir from '../assets/choir.jpg';
import youth from '../assets/program.jpg';

const MinistryDirectory = () => {
    const featuredMinistries = [
        {
            id: 1,
            name: 'Youth & Young Adults',
            subtitle: 'BETHEL COVENANT YOUTH',
            image: youth,
        },
        {
            id: 2,
            name: 'Worship & Music',
            subtitle: 'BETHEL COVENANT CHOIR',
            image: choir,
        },
    ];

    return (
        <section className="py-20" id="ministries" style={{ backgroundColor: "#F5F5EF", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", paddingLeft: "calc(50vw - 50%)", paddingRight: "calc(50vw - 50%)" }}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-6">
                        Our <span className="text-church-gold">Ministries</span>
                    </h2>
                    <p className="text-base text-church-text-light max-w-2xl mx-auto">
                        Be a functional part of our church family. Explore the various ministries where you can serve, grow, and make a difference.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Heading & CTA */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl md:text-6xl font-black text-church-text mb-8 leading-tight">
                            There's a Place for <span className="text-church-gold">Everyone</span>
                        </h2>
                        <p className="text-lg text-church-text-light mb-8 leading-relaxed max-w-md">
                            Discover the various ways you can serve, grow, and make a difference in our church family.
                        </p>
                        <div>
                            <a
                                href="/ministries"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-church-text text-church-text hover:bg-church-text hover:text-white font-semibold transition-colors duration-300 rounded-full"
                            >
                                See All Ministries
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Featured Ministry Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {featuredMinistries.map((ministry) => (
                            <Card
                                key={ministry.id}
                                className="border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={ministry.image}
                                        alt={ministry.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                                </div>

                                {/* Content */}
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-church-text mb-2">
                                        {ministry.name}
                                    </h3>
                                    <p className="text-church-text-light text-sm">
                                        {ministry.subtitle}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MinistryDirectory;
