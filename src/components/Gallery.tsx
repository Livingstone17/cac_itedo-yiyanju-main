
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Heart, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { galleryQueryOptions, type GalleryImageItem } from "@/queries/homeContent";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "react-lazy-load-image-component/src/effects/blur.css";

// gsap.registerPlugin(ScrollTrigger);

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

  // 🔥 GSAP section animation (SYNCED WITH GLOBAL FLOW)
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Title first
      gsap.from(".gallery-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Subtitle
      gsap.from(".gallery-subtitle", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        delay: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });

      // Swiper entrance
      gsap.from(".gallery-carousel", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      // Slide micro animation (premium feel)
      gsap.from(".gallery-slide", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
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
      <section className="reveal bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <p>Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="reveal bg-gradient-to-b from-background to-muted/30 py-20"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-16 text-center stagger">
          <h2 className="gallery-title mb-4 text-4xl font-bold text-church-text md:text-5xl stagger-item">
            Gallery <span className="text-church-gold">.</span>
          </h2>

          <p className="gallery-subtitle mx-auto max-w-2xl text-lg text-church-text-light stagger-item">
            Moments of faith, fellowship, and transformation from our church family
          </p>
        </div>

        {/* Swiper */}
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
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="gallery-carousel"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={image.id} className="gallery-slide">
                <div
                  className="group relative h-48 cursor-pointer overflow-hidden sm:h-60 md:h-72 lg:h-[480px]"
                  onClick={() => handleImageClick(image)}
                >
                  <LazyLoadImage
                    src={image.src}
                    alt={image.title}
                    visibleByDefault={index < 2}
                    effect="blur"
                    wrapperClassName="h-full w-full"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onContextMenu={handleContextMenu}
                    draggable={false}
                  />

                  {/* overlays */}
                  <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/60"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <Heart className="mb-2 h-8 w-8 text-church-gold opacity-0 transition-all duration-500 group-hover:opacity-100" />
                    <h3 className="text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-church-text-light">No images found</p>
        )}
      </div>

      {/* Modal unchanged */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="h-[100dvh] w-full max-w-4xl overflow-visible border-0 bg-black/90 p-0 md:h-auto">
          {selectedImage && (
            <div className="relative flex h-full w-full items-center justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-[env(safe-area-inset-top,1rem)] z-20 rounded-full bg-black/50 p-2 backdrop-blur"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              <div className="flex h-full w-full flex-col items-center justify-center px-4 pt-20 pb-12">
                <LazyLoadImage
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  effect="blur"
                  className="pointer-events-none max-h-[80vh] object-contain"
                  onContextMenu={handleContextMenu}
                  draggable={false}
                />

                <div className="mt-6 text-center text-white">
                  <h3 className="mb-2 text-2xl font-bold">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.description}</p>
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