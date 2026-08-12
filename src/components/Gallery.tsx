// import { useState, useEffect, useRef } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Heart, X } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { galleryQueryOptions, type GalleryImageItem } from "@/queries/homeContent";
// import gsap from "gsap";

// import "swiper/css";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const Gallery = () => {
//   const { data: galleryImages = [], isPending: loading } = useQuery(galleryQueryOptions);

//   const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   const handleImageClick = (image: GalleryImageItem) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const handleContextMenu = (e: React.MouseEvent) => {
//     e.preventDefault();
//   };

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       if (!sectionRef.current) return;

//       gsap.from(".gallery-title", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       gsap.from(".gallery-subtitle", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
//         opacity: 0,
//         y: 20,
//         delay: 0.1,
//         duration: 0.7,
//         ease: "power2.out",
//       });

//       gsap.from(".gallery-carousel", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
//         opacity: 0,
//         y: 60,
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.from(".gallery-slide", {
//         scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
//         opacity: 0,
//         scale: 0.95,
//         y: 20,
//         duration: 0.8,
//         stagger: 0.05,
//         ease: "power2.out",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   if (loading) {
//     return (
//       <section className="reveal bg-light-200 dark:bg-dark-300 py-20">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-text-300 dark:text-text-400">Loading gallery...</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section ref={sectionRef} id="gallery" className="reveal from-light-200 to-light-300 dark:from-dark-300 dark:to-dark-400 bg-linear-to-b py-20">
//       <div className="container mx-auto px-4">
//         <div className="stagger mb-16 text-center">
//           <h2 className="gallery-title stagger-item text-text dark:text-light mb-4 text-4xl font-bold md:text-5xl">
//             Gallery <span className="text-church-gold-400">.</span>
//           </h2>

//           <p className="gallery-subtitle stagger-item text-text-300 dark:text-text-400 mx-auto max-w-2xl text-lg">Moments of faith, fellowship, and transformation from our church family</p>
//         </div>

//         {galleryImages.length > 0 ? (
//           <Swiper
//             modules={[Autoplay]}
//             slidesPerView={4}
//             spaceBetween={0}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 4 },
//             }}
//             className="gallery-carousel"
//           >
//             {galleryImages.map((image, index) => (
//               <SwiperSlide key={image.id} className="gallery-slide">
//                 <div className="group relative h-48 cursor-pointer overflow-hidden sm:h-60 md:h-72 lg:h-120" onClick={() => handleImageClick(image)}>
//                   <LazyLoadImage src={image.src} alt={image.title} visibleByDefault={index < 2} effect="blur" wrapperClassName="h-full w-full" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" onContextMenu={handleContextMenu} draggable={false} />

//                   <div className="bg-church-blue-900/50 group-hover:bg-church-blue-900/70 absolute inset-0 transition-all duration-500" />

//                   <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
//                     <Heart className="text-church-gold-400 mb-2 h-8 w-8 opacity-0 transition-all duration-500 group-hover:opacity-100" />
//                     <h3 className="text-light text-lg font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">{image.title}</h3>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         ) : (
//           <p className="text-text-300 dark:text-text-400 text-center">No images found</p>
//         )}
//       </div>

//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className="bg-dark-900/90 h-dvh w-full max-w-4xl overflow-visible border-0 p-0 md:h-auto">
//           {selectedImage && (
//             <div className="relative flex h-full w-full items-center justify-center">
//               <button onClick={() => setIsModalOpen(false)} className="bg-dark-500/50 absolute top-[env(safe-area-inset-top,1rem)] right-4 z-20 rounded-full p-2 backdrop-blur">
//                 <X className="text-light h-6 w-6" />
//               </button>

//               <div className="flex h-full w-full flex-col items-center justify-center px-4 pt-20 pb-12">
//                 <LazyLoadImage src={selectedImage.src} alt={selectedImage.title} effect="blur" className="pointer-events-none max-h-[80vh] object-contain" onContextMenu={handleContextMenu} draggable={false} />

//                 <div className="text-light mt-6 text-center">
//                   <h3 className="mb-2 text-2xl font-bold">{selectedImage.title}</h3>
//                   <p className="text-light/80">{selectedImage.description}</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// };

// export default Gallery;



import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Heart, X, Camera, ZoomIn } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { galleryQueryOptions, type GalleryImageItem } from "@/queries/homeContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "react-lazy-load-image-component/src/effects/blur.css";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const { data: galleryImages = [], isPending: loading } = useQuery(galleryQueryOptions);
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleImageClick = (image: GalleryImageItem) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".gallery-badge", {
        scrollTrigger: { trigger: ".gallery-badge", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: -20, duration: 0.6, ease: "power3.out",
      });
      gsap.from(".gallery-heading", {
        scrollTrigger: { trigger: ".gallery-heading", start: "top 90%", toggleActions: "play none none reverse" },
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".gallery-desc", {
        scrollTrigger: { trigger: ".gallery-desc", start: "top 92%", toggleActions: "play none none reverse" },
        opacity: 0, y: 20, duration: 0.7, ease: "power3.out",
      });
      gsap.from(".gallery-carousel", {
        scrollTrigger: { trigger: ".gallery-carousel", start: "top 90%", toggleActions: "play none none reverse" },
        opacity: 0, y: 50, duration: 1, ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-white py-14 dark:bg-[#050a18] md:py-28">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#d4a843]" style={{ animationDelay: "0ms" }} />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#d4a843]" style={{ animationDelay: "150ms" }} />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#d4a843]" style={{ animationDelay: "300ms" }} />
          </div>
          <p className="mt-4 text-sm text-gray-400 dark:text-white/30">Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative overflow-hidden bg-white py-14 dark:bg-[#050a18] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4a843]/[0.04] blur-[140px] dark:bg-[#d4a843]/[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="gallery-badge mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 px-4 py-1.5">
            <Camera className="h-3.5 w-3.5 text-[#d4a843]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a843]">
              Our Moments
            </span>
          </div>

          <h2 className="gallery-heading mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Church{" "}
            <span className="bg-gradient-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>

          <p className="gallery-desc mx-auto max-w-2xl text-base text-gray-500 dark:text-white/40 md:text-lg">
            Moments of faith, fellowship, and transformation from our church family.
          </p>
        </div>
      </div>

      {/* Carousel — full bleed */}
      {galleryImages.length > 0 ? (
        <div className="gallery-carousel relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-[#050a18] md:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-[#050a18] md:w-32" />

          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={12}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            breakpoints={{
              320: { slidesPerView: 1.3, spaceBetween: 8 },
              480: { slidesPerView: 1.8, spaceBetween: 10 },
              640: { slidesPerView: 2.3, spaceBetween: 12 },
              1024: { slidesPerView: 3.2, spaceBetween: 14 },
              1280: { slidesPerView: 4, spaceBetween: 16 },
            }}
            className="!px-4 md:!px-8"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={image.id}>
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => handleImageClick(image)}
                >
                  {/* Image */}
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl">
                    <LazyLoadImage
                      src={image.src}
                      alt={image.title}
                      visibleByDefault={index < 3}
                      effect="blur"
                      wrapperClassName="h-full w-full"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onContextMenu={handleContextMenu}
                      draggable={false}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#d4a843]/0 transition-all duration-500 group-hover:border-[#d4a843]/40" />

                  {/* Top accent */}
                  <div
                    className="absolute left-4 right-4 top-0 h-[2px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }}
                  />

                  {/* Hover content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a843]/20 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                      <ZoomIn className="h-5 w-5 text-[#d4a843]" />
                    </div>
                    <h3 className="text-base font-bold text-white opacity-0 transition-all delay-75 duration-500 group-hover:opacity-100">
                      {image.title}
                    </h3>
                  </div>

                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full rounded-b-2xl border-t border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white/70">{image.title}</span>
                      <Heart className="h-4 w-4 text-[#d4a843]" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="container mx-auto px-6 text-center">
          <div className="rounded-2xl border border-gray-200/80 bg-gray-50/50 py-16 dark:border-white/[0.06] dark:bg-white/[0.02]">
            <Camera className="mx-auto mb-3 h-8 w-8 text-gray-300 dark:text-white/20" />
            <p className="text-gray-400 dark:text-white/30">No images found</p>
          </div>
        </div>
      )}

      {/* Bottom accent */}
      <div className="container mx-auto px-6">
        <div className="mt-12 flex items-center justify-center gap-3 md:mt-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4a843]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#d4a843]/30" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4a843]/30" />
        </div>
      </div>

      {/* Bottom separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/15 to-transparent" />

      {/* ── Lightbox Modal ── */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="h-dvh w-full max-w-5xl overflow-visible border-0 bg-black/95 p-0 backdrop-blur-xl dark:bg-[#050a18]/95 md:h-auto md:rounded-2xl">
          {selectedImage && (
            <div className="relative flex h-full w-full items-center justify-center">
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-[env(safe-area-inset-top,1rem)] z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              <div className="flex h-full w-full flex-col items-center justify-center px-4 pb-12 pt-20 md:px-8">
                {/* Image */}
                <div className="relative">
                  <div className="absolute -inset-2 rounded-xl bg-[#d4a843]/5 blur-2xl" />
                  <LazyLoadImage
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    effect="blur"
                    className="pointer-events-none relative max-h-[70vh] rounded-lg object-contain shadow-2xl"
                    onContextMenu={handleContextMenu}
                    draggable={false}
                  />
                </div>

                {/* Caption */}
                <div className="mt-6 text-center">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.description && (
                    <p className="max-w-lg text-sm text-white/50">
                      {selectedImage.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4a843]/40" />
                    <Heart className="h-4 w-4 text-[#d4a843]/40" />
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4a843]/40" />
                  </div>
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