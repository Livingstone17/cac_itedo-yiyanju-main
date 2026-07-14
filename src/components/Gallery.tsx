import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Heart, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { galleryQueryOptions, type GalleryImageItem } from "@/queries/homeContent";
import gsap from "gsap";

import "swiper/css";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
  const { data: galleryImages = [], isPending: loading } = useQuery(galleryQueryOptions);

  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleImageClick = (image: GalleryImageItem) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.from(".gallery-title", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".gallery-subtitle", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        opacity: 0,
        y: 20,
        delay: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".gallery-carousel", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".gallery-slide", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        opacity: 0,
        scale: 0.95,
        y: 20,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (loading) {
    return (
      <section className="reveal bg-light-200 dark:bg-dark-300 py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-300 dark:text-text-400">Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="gallery" className="reveal from-light-200 to-light-300 dark:from-dark-300 dark:to-dark-400 bg-linear-to-b py-20">
      <div className="container mx-auto px-4">
        <div className="stagger mb-16 text-center">
          <h2 className="gallery-title stagger-item text-text dark:text-light mb-4 text-4xl font-bold md:text-5xl">
            Gallery <span className="text-church-gold-400">.</span>
          </h2>

          <p className="gallery-subtitle stagger-item text-text-300 dark:text-text-400 mx-auto max-w-2xl text-lg">Moments of faith, fellowship, and transformation from our church family</p>
        </div>

        {galleryImages.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="gallery-carousel"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={image.id} className="gallery-slide">
                <div className="group relative h-48 cursor-pointer overflow-hidden sm:h-60 md:h-72 lg:h-120" onClick={() => handleImageClick(image)}>
                  <LazyLoadImage src={image.src} alt={image.title} visibleByDefault={index < 2} effect="blur" wrapperClassName="h-full w-full" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" onContextMenu={handleContextMenu} draggable={false} />

                  <div className="bg-church-blue-900/50 group-hover:bg-church-blue-900/70 absolute inset-0 transition-all duration-500" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <Heart className="text-church-gold-400 mb-2 h-8 w-8 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                    <h3 className="text-light text-lg font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">{image.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-text-300 dark:text-text-400 text-center">No images found</p>
        )}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-dark-900/90 h-dvh w-full max-w-4xl overflow-visible border-0 p-0 md:h-auto">
          {selectedImage && (
            <div className="relative flex h-full w-full items-center justify-center">
              <button onClick={() => setIsModalOpen(false)} className="bg-dark-500/50 absolute top-[env(safe-area-inset-top,1rem)] right-4 z-20 rounded-full p-2 backdrop-blur">
                <X className="text-light h-6 w-6" />
              </button>

              <div className="flex h-full w-full flex-col items-center justify-center px-4 pt-20 pb-12">
                <LazyLoadImage src={selectedImage.src} alt={selectedImage.title} effect="blur" className="pointer-events-none max-h-[80vh] object-contain" onContextMenu={handleContextMenu} draggable={false} />

                <div className="text-light mt-6 text-center">
                  <h3 className="mb-2 text-2xl font-bold">{selectedImage.title}</h3>
                  <p className="text-light/80">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
