import { Card, CardContent } from '@/components/ui/card';

const MinistryDirectory = () => {
    const featuredMinistries = [
        {
            id: 1,
            name: 'Youth & Young Adults',
            subtitle: 'BETHEL COVENANT YOUTH',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop',
        },
        {
            id: 2,
            name: 'Worship & Music',
            subtitle: 'BETHEL COVENANT CHOIR',
            image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=400&fit=crop',
        },
    ];

    return (
        <section className="py-20 bg-background" id="ministries">
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
                            Discover the various ways you can serve, grow, and make a difference in our church community.
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
