import { Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Gallery = () => {
    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&h=600&fit=crop",
            title: "Sunday Worship",
            description: "Experience powerful praise and worship"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
            title: "Prayer & Intercession",
            description: "Connecting hearts in unified prayer"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
            title: "Community Fellowship",
            description: "Building strong bonds in Christ"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
            title: "Youth Ministry",
            description: "Empowering the next generation"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1522071820081-940382a59da1?w=800&h=600&fit=crop",
            title: "Outreach & Service",
            description: "Making a difference in our community"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1516627145497-ae3dcd1071ea?w=800&h=600&fit=crop",
            title: "Spiritual Growth",
            description: "Growing deeper in faith together"
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
            title: "Discipleship",
            description: "Mentoring and spiritual development"
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
            title: "Children's Ministry",
            description: "Nurturing young hearts in faith"
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="gallery">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-4">
                        Our <span className="text-church-gold">Gallery</span>
                    </h2>
                    <p className="text-lg text-church-text-light max-w-2xl mx-auto">
                        Moments of faith, fellowship, and transformation from our church family
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={4}
                    spaceBetween={0}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                    }}
                    className="gallery-carousel"
                >
                    {galleryImages.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="relative group overflow-hidden h-80 cursor-pointer" style={{ height: 450 }}>
                                {/* Image */}
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

                                {/* Color Accent Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-church-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Content Container */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                    {/* Heart Icon */}
                                    <Heart className="w-8 h-8 text-church-gold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" />

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-1 transform transition-all duration-500 group-hover:translate-y-0 translate-y-3 opacity-0 group-hover:opacity-100">
                                        {image.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs text-white/80 transform transition-all duration-500 group-hover:translate-y-0 translate-y-3 opacity-0 group-hover:opacity-100 delay-100">
                                        {image.description}
                                    </p>

                                    {/* Accent Line */}
                                    <div className="w-8 h-0.5 bg-church-gold mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-x-100 scale-x-0"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default Gallery;
