
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
        <section
            id="ministries"
            className="py-20 bg-blue-50  border-y border-border/60 reveal"
            style={{
                marginLeft: "calc(-50vw + 50%)",
                marginRight: "calc(-50vw + 50%)",
                paddingLeft: "calc(50vw - 50%)",
                paddingRight: "calc(50vw - 50%)",
            }}
        >
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16 stagger">
                    <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-6 stagger-item text-black/70">
                        Our <span className="text-church-gold">Ministries</span>
                    </h2>

                    <p className="text-base text-church-text-light max-w-2xl mx-auto stagger-item">
                        Be a functional part of our church family. Explore the various ministries where you can serve, grow, and make a difference.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side */}
                    <div className="flex flex-col justify-center stagger">

                        {/* <h2 className="text-5xl md:text-6xl font-black text-church-text mb-8 leading-tight stagger-item text-black/70">
                            There's a Place for <span className="text-church-gold">Everyone</span>
                        </h2> */}
                        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight stagger-item text-black/70 dark:text-black/70">
                            There's a Place for <span className="text-church-gold">Everyone</span>
                        </h2>

                        <p className="text-lg text-church-text-light mb-8 leading-relaxed max-w-md stagger-item">
                            Discover the various ways you can serve, grow, and make a difference in our church family.
                        </p>

                        <div className="stagger-item">
                            <a
                                href="/ministries"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-church-text text-church-text hover:bg-church-text hover:text-primary-foreground font-semibold transition-colors duration-300 rounded-full dark:text-black/70"
                            >
                                See All Ministries
                            </a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger">

                        {featuredMinistries.map((ministry) => (
                            <div key={ministry.id} className="stagger-item">
                                <Card className="group border border-border bg-card text-card-foreground shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">

                                    {/* Image */}
                                    <div className="relative overflow-hidden h-64">
                                        <img
                                            src={ministry.image}
                                            alt={ministry.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MinistryDirectory;