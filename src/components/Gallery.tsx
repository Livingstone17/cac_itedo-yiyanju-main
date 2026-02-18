import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/gallery');
                const result = await response.json();
                console.log('Fetched gallery images:', result);

                // Handle both array response and nested response
                const filesArray = Array.isArray(result) ? result : result.data?.files || result.files || [];

                const images = filesArray.map((file) => ({
                    id: file.id,
                    title: file.title || file.name.replace(/\.[^/.]+$/, ''),
                    src: `/api/gallery/image/${file.id}`,
                    description: file.description || 'Church event',
                }));
                setGalleryImages(images);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return (
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <p>Loading gallery...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="gallery">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-4">
                        Gallery <span className="text-church-gold">.</span>
                    </h2>
                    <p className="text-lg text-church-text-light max-w-2xl mx-auto">
                        Moments of faith, fellowship, and transformation from our church family
                    </p>
                </div>

                {galleryImages.length > 0 ? (
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
                                <div className="relative group overflow-hidden h-48 sm:h-60 md:h-72 lg:h-[480px] xl:h-[480px] cursor-pointer">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => console.error('Image failed to load:', image.src, e)}
                                        onLoad={() => console.log('Image loaded:', image.src)}
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-church-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                        <Heart className="w-8 h-8 text-church-gold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" />
                                        <h3 className="text-lg font-bold text-white mb-1 transform transition-all duration-500 group-hover:translate-y-0 translate-y-3 opacity-0 group-hover:opacity-100">
                                            {image.title}
                                        </h3>
                                        <p className="text-xs text-white/80 transform transition-all duration-500 group-hover:translate-y-0 translate-y-3 opacity-0 group-hover:opacity-100 delay-100">
                                            {image.description}
                                        </p>
                                        <div className="w-8 h-0.5 bg-church-gold mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-x-100 scale-x-0"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="text-center text-church-text-light">No images found</p>
                )}
            </div>
        </section>
    );
};

export default Gallery;