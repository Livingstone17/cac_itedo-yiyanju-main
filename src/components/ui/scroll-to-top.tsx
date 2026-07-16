import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  threshold?: number;
  behavior?: ScrollBehavior;
  className?: string;
  avoidWhatsapp?: boolean;
}

export function ScrollToTop({ threshold = 300, behavior = "smooth", className, avoidWhatsapp = true }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <button type="button" aria-label="Scroll to top" onClick={scrollToTop} className={cn("fixed right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border", "border-church-gold-300/40 bg-church-gold-400 text-church-blue-900", "shadow-soft hover:bg-church-gold-300 hover:shadow-medium", "focus-visible:ring-church-gold-400/40 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:outline-none", "transition-all duration-300 active:scale-95", avoidWhatsapp ? "bottom-24 md:bottom-6" : "bottom-6", isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0", className)}>
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
