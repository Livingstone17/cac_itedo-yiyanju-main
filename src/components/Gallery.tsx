import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Heart, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { galleryQueryOptions, type GalleryImageItem } from "@/queries/homeContent";
import "swiper/css";
import "react-lazy-load-image-component/src/effects/blur.css";

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
      <section className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <p>Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-20" id="gallery">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-church-text md:text-5xl">
            Gallery <span className="text-church-gold">.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-church-text-light">Moments of faith, fellowship, and transformation from our church family</p>
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
                <div className="group relative h-48 cursor-pointer overflow-hidden sm:h-60 md:h-72 lg:h-[480px] xl:h-[480px]" onClick={() => handleImageClick(image)}>
                  <LazyLoadImage src={image.src} alt={image.title} visibleByDefault={index < 2} effect="blur" placeholderSrc={"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="} wrapperClassName="w-full h-full" className="block h-full w-full select-none object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => console.error("Image failed to load:", image.src, e)} onContextMenu={handleContextMenu} draggable={false} />
                  <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/60"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-church-blue/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <Heart className="mb-2 h-8 w-8 transform text-church-gold opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
                    <h3 className="mb-1 translate-y-3 transform text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{image.title}</h3>
                    <p className="translate-y-3 transform text-xs text-white/80 opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100">{image.description}</p>
                    <div className="mt-2 h-0.5 w-8 scale-x-0 transform bg-church-gold opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100"></div>
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
        <DialogContent className="h-screen w-full max-w-4xl border-0 bg-black/90 p-0 md:h-auto">
          {selectedImage && (
            <div className="relative flex h-full w-full items-center justify-center">
              {/* Close Button */}
              <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20" aria-label="Close">
                <X className="h-6 w-6 text-white" />
              </button>

              {/* Image Container with screenshot prevention */}
              <div className="flex h-full w-full flex-col items-center justify-center px-4 py-12">
                <LazyLoadImage src={selectedImage.src} alt={selectedImage.title} effect="blur" placeholderSrc={"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="} wrapperClassName="w-full h-full" className="pointer-events-none block max-h-[80vh] max-w-full select-none object-contain" onContextMenu={handleContextMenu} draggable={false} />
                <div className="mt-6 text-center text-white">
                  <h3 className="mb-2 text-2xl font-bold">{selectedImage.title}</h3>
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
