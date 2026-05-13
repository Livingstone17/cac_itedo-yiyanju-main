import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Heart, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { galleryQueryOptions, type GalleryImageItem } from '@/queries/homeContent';
import 'swiper/css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {
    const { data: galleryImages = [], isPending: loading } = useQuery(galleryQueryOptions);
    const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (image: GalleryImageItem) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
    };

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
                        {galleryImages.map((image, index) => (
                            <SwiperSlide key={image.id}>
                                <div
                                    className="relative group overflow-hidden h-48 sm:h-60 md:h-72 lg:h-[480px] xl:h-[480px] cursor-pointer"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <LazyLoadImage
                                        src={image.src}
                                        alt={image.title}
                                        visible={index < 2}
                                        effect="blur"
                                        placeholderSrc={"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}
                                        wrapperClassName="w-full h-full"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 select-none block"
                                        onError={(e) => console.error('Image failed to load:', image.src, e)}
                                        onContextMenu={handleContextMenu}
                                        draggable={false}
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

            {/* Image Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-4xl w-full h-screen md:h-auto p-0 border-0 bg-black/90">
                    {selectedImage && (
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            {/* Image Container with screenshot prevention */}
                            <div className="flex flex-col items-center justify-center w-full h-full px-4 py-12">
                                <LazyLoadImage
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    effect="blur"
                                    placeholderSrc={"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}
                                    wrapperClassName="w-full h-full"
                                    className="max-w-full max-h-[80vh] object-contain select-none pointer-events-none block"
                                    onContextMenu={handleContextMenu}
                                    draggable={false}
                                />
                                <div className="mt-6 text-center text-white">
                                    <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                                    <p className="text-white/80">{selectedImage.description}</p>
                                </div>
                            </div>

                            {/* Watermark overlay for screenshot protection */}
                            {/* <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
                                <div className="text-white text-6xl font-bold transform -rotate-45 whitespace-nowrap">
                                    CAC ITEDO YIYANJU
                                </div>
                            </div> */}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Gallery;