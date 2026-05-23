import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  /** How far down (in px) before the button appears */
  threshold?: number;
  /** Smooth or instant scroll */
  behavior?: ScrollBehavior;
  /** Extra classes on the button */
  className?: string;
  /** Position from bottom */
  bottom?: string;
  /** Position from right */
  right?: string;
}

export function ScrollToTop({ threshold = 300, behavior = "smooth", className, bottom = "1.5rem", right = "1.5rem" }: ScrollToTopProps) {
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
    <button type="button" aria-label="Scroll to top" onClick={scrollToTop} style={{ bottom, right }} className={cn("fixed z-50 flex h-11 w-11 items-center justify-center rounded-full", "bg-church-gold text-white shadow-lg", "hover:bg-church-gold/90 hover:shadow-xl", "focus:outline-none focus:ring-2 focus:ring-church-gold/50 focus:ring-offset-2", "active:scale-95", "transition-all duration-300", isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0", className)}>
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
