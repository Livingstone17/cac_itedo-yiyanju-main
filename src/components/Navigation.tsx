// import { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Users, Heart, Phone, ChevronDown, Video, Mic, BookOpen, Music, Library } from "lucide-react";
// import logo from "@/assets/logo.png";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { useLiveStatus } from "@/contexts/LiveStatusContext";

// type DropdownType = "about" | "live" | "resources" | null;

// interface NavItem {
//   label: string;
//   href?: string;
//   dropdown?: boolean;
//   icon: React.ElementType;
// }

// const aboutItems = [
//   { label: "History of CAC", href: "/about-cac" },
//   { label: "Tenets of CAC", href: "/about-cac/#tenets" },
//   { label: "About CAC Itedo Yiyanju", href: "/about-itedo" },
//   { label: "The Pastorate", href: "/about-itedo/#pastorate" },
// ];

// const resourceItems = [
//   {
//     label: "Sermons",
//     href: "/sermons",
//     icon: Mic,
//     external: false,
//     description: "Listen to past sermons",
//   },
//   {
//     label: "Hymnal",
//     href: "https://cac-hymnal-pwa.vercel.app",
//     icon: Music,
//     external: true,
//     description: "CAC Hymn book",
//   },
//   {
//     label: "Books",
//     href: "/books",
//     icon: BookOpen,
//     external: false,
//     description: "Browse our book collection",
//   },
// ];

// const navigationItems: NavItem[] = [
//   { label: "Home", href: "/", icon: Users },
//   { label: "About Us", dropdown: true, icon: Users },
//   { label: "Live Stream", dropdown: true, icon: Video },
//   { label: "Events", href: "/events", icon: Users },
//   { label: "Resources", dropdown: true, icon: Library },
//   { label: "Give", href: "/give", icon: Heart },
//   { label: "Contact Us", href: "#contact", icon: Phone },
// ];

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
//   const navigate = useNavigate();
//   const aboutDropdownRef = useRef<HTMLDivElement | null>(null);
//   const liveDropdownRef = useRef<HTMLDivElement | null>(null);
//   const resourcesDropdownRef = useRef<HTMLDivElement | null>(null);

//   const { isLive } = useLiveStatus();

//   const getDropdownType = (label: string): DropdownType => {
//     if (label === "About Us") return "about";
//     if (label === "Live Stream") return "live";
//     if (label === "Resources") return "resources";
//     return null;
//   };

//   const getDropdownRef = (label: string) => {
//     if (label === "About Us") return aboutDropdownRef;
//     if (label === "Live Stream") return liveDropdownRef;
//     if (label === "Resources") return resourcesDropdownRef;
//     return null;
//   };

//   const toggleDropdown = (dropdown: DropdownType) => {
//     setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
//   };

//   const closeAllMenus = () => {
//     setOpenDropdown(null);
//     setIsMenuOpen(false);
//   };

//   const handleAnchorClick = (href: string) => {
//     if (href.startsWith("#")) {
//       navigate("/");
//       setTimeout(() => {
//         const element = document.querySelector(href);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 0);
//     }
//   };

//   useEffect(() => {
//     if (window.innerWidth < 768) return;

//     const handleClickOutside = (event: MouseEvent) => {
//       if (openDropdown === null) return;

//       const target = event.target as Node;
//       const isInsideAbout = aboutDropdownRef.current?.contains(target);
//       const isInsideLive = liveDropdownRef.current?.contains(target);
//       const isInsideResources = resourcesDropdownRef.current?.contains(target);

//       if (!isInsideAbout && !isInsideLive && !isInsideResources) {
//         setOpenDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [openDropdown]);

//   /* ── Dropdown wrapper classes ── */
//   const dropdownPanelClass = "absolute top-full mt-[22px] rounded-lg border shadow-lg " + "bg-light dark:bg-dark-400 " + "border-light-400 dark:border-dark-500";

//   const dropdownItemClass = "flex items-center px-4 py-2 text-sm transition-colors duration-200 " + "text-text-200 dark:text-text-400 " + "hover:bg-light-300 dark:hover:bg-dark-500 " + "hover:text-text dark:hover:text-light " + "first:rounded-t-lg last:rounded-b-lg";

//   const dropdownItemRichClass = "flex items-center px-4 py-2.5 text-sm transition-colors duration-200 " + "text-text-200 dark:text-text-400 " + "hover:bg-light-300 dark:hover:bg-dark-500 " + "hover:text-text dark:hover:text-light " + "first:rounded-t-lg last:rounded-b-lg";

//   /* ── Nav link classes ── */
//   const navLinkClass = "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light " + "font-normal transition-colors duration-300";

//   const navButtonClass = "flex items-center space-x-1 text-sm font-normal transition-colors duration-300 " + "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light";

//   /* ── Mobile nav link classes ── */
//   const mobileNavLinkClass = "flex items-center space-x-3 py-2 transition-colors duration-300 " + "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light";

//   const mobileNavButtonClass = "flex w-full items-center space-x-3 py-2 text-left transition-colors duration-300 " + "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light";

//   const mobileSubLinkClass = "text-sm transition-colors duration-200 " + "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light";

//   /* ════════════════════════════════════════════
//      DESKTOP ITEMS
//      ════════════════════════════════════════════ */
//   const renderDesktopItem = (item: NavItem) => {
//     if (item.dropdown) {
//       const dropdownType = getDropdownType(item.label);
//       const ref = getDropdownRef(item.label);

//       return (
//         <div key={item.label} className="relative" ref={ref}>
//           <button className={navButtonClass} onClick={() => toggleDropdown(dropdownType)}>
//             <span>{item.label}</span>

//             {item.label === "Live Stream" && isLive && (
//               <div className="ml-2 flex items-center gap-1">
//                 <span className="relative flex h-2 w-2">
//                   <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500" />
//                   <span className="relative h-2 w-2 rounded-full bg-red-600" />
//                 </span>
//                 <span className="text-xs font-bold tracking-wider text-red-500">LIVE</span>
//               </div>
//             )}

//             <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === dropdownType ? "rotate-180" : ""}`} />
//           </button>

//           {/* ABOUT US DROPDOWN */}
//           {item.label === "About Us" && openDropdown === "about" && (
//             <div className={`${dropdownPanelClass} w-56`}>
//               {aboutItems.map((aboutItem) => (
//                 <a
//                   key={aboutItem.label}
//                   href={aboutItem.href}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setOpenDropdown(null);
//                     const [, hash] = aboutItem.href.split("#");
//                     if (hash) {
//                       window.location.href = aboutItem.href;
//                     } else {
//                       navigate(aboutItem.href);
//                     }
//                   }}
//                   className={dropdownItemClass}
//                 >
//                   {aboutItem.label}
//                 </a>
//               ))}
//             </div>
//           )}

//           {/* LIVE STREAM DROPDOWN */}
//           {item.label === "Live Stream" && openDropdown === "live" && (
//             <div className={`${dropdownPanelClass} w-40`}>
//               <a href="/listen/video" className={dropdownItemClass} onClick={() => setOpenDropdown(null)}>
//                 <Video className="mr-2 h-4 w-4" />
//                 Watch Us Live
//               </a>
//               <a href="/listen/audio" className={dropdownItemClass} onClick={() => setOpenDropdown(null)}>
//                 <Mic className="mr-2 h-4 w-4" />
//                 Listen Live
//               </a>
//             </div>
//           )}

//           {/* RESOURCES DROPDOWN */}
//           {item.label === "Resources" && openDropdown === "resources" && (
//             <div className={`${dropdownPanelClass} w-52`}>
//               {resourceItems.map((resourceItem) => {
//                 const IconComp = resourceItem.icon;

//                 if (resourceItem.external) {
//                   return (
//                     <a key={resourceItem.label} href={resourceItem.href} target="_blank" rel="noopener noreferrer" className={dropdownItemRichClass} onClick={() => setOpenDropdown(null)}>
//                       <IconComp className="mr-3 h-4 w-4" />
//                       <div>
//                         <div className="font-medium">{resourceItem.label}</div>
//                         <div className="text-text-400 dark:text-text-500 text-xs">{resourceItem.description}</div>
//                       </div>
//                     </a>
//                   );
//                 }

//                 return (
//                   <Link key={resourceItem.label} to={resourceItem.href} className={dropdownItemRichClass} onClick={() => setOpenDropdown(null)}>
//                     <IconComp className="mr-3 h-4 w-4" />
//                     <div>
//                       <div className="font-medium">{resourceItem.label}</div>
//                       <div className="text-text-400 dark:text-text-500 text-xs">{resourceItem.description}</div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       );
//     }

//     if (item.href) {
//       return (
//         <a
//           key={item.label}
//           href={item.href}
//           onClick={(e) => {
//             setOpenDropdown(null);
//             if (item.href!.startsWith("#")) {
//               e.preventDefault();
//               handleAnchorClick(item.href!);
//             }
//           }}
//           className={navLinkClass}
//         >
//           {item.label}
//         </a>
//       );
//     }

//     return null;
//   };

//   /* ════════════════════════════════════════════
//      MOBILE ITEMS
//      ════════════════════════════════════════════ */
//   const renderMobileItem = (item: NavItem) => {
//     const IconComponent = item.icon;

//     if (item.dropdown) {
//       const dropdownType = getDropdownType(item.label);

//       return (
//         <div key={item.label}>
//           <button onClick={() => toggleDropdown(dropdownType)} className={mobileNavButtonClass}>
//             <IconComponent className="h-5 w-5" />
//             <span className="font-normal">{item.label}</span>

//             {item.label === "Live Stream" && isLive && (
//               <div className="flex items-center gap-1">
//                 <span className="relative flex h-2 w-2">
//                   <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500" />
//                   <span className="relative h-2 w-2 rounded-full bg-red-600" />
//                 </span>
//                 <span className="text-xs font-bold text-red-500">LIVE</span>
//               </div>
//             )}

//             <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${openDropdown === dropdownType ? "rotate-180" : ""}`} />
//           </button>

//           {/* ABOUT US - Mobile */}
//           {dropdownType === "about" && openDropdown === "about" && (
//             <div className="mt-2 ml-8 flex flex-col space-y-2" onClick={(e) => e.stopPropagation()}>
//               {aboutItems.map((aboutItem) => (
//                 <Link
//                   key={aboutItem.label}
//                   to={aboutItem.href}
//                   className={mobileSubLinkClass}
//                   onClick={() => {
//                     setOpenDropdown(null);
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   {aboutItem.label}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* LIVE STREAM - Mobile */}
//           {dropdownType === "live" && openDropdown === "live" && (
//             <div className="mt-2 ml-8 flex flex-col space-y-2" onClick={(e) => e.stopPropagation()}>
//               <Link
//                 to="/listen/video"
//                 className={`flex items-center ${mobileSubLinkClass}`}
//                 onClick={() => {
//                   setOpenDropdown(null);
//                   setIsMenuOpen(false);
//                 }}
//               >
//                 <Video className="mr-2 h-4 w-4" />
//                 Watch Live
//               </Link>
//               <Link
//                 to="/listen/audio"
//                 className={`flex items-center ${mobileSubLinkClass}`}
//                 onClick={() => {
//                   setOpenDropdown(null);
//                   setIsMenuOpen(false);
//                 }}
//               >
//                 <Mic className="mr-2 h-4 w-4" />
//                 Listen Live
//               </Link>
//             </div>
//           )}

//           {/* RESOURCES - Mobile */}
//           {dropdownType === "resources" && openDropdown === "resources" && (
//             <div className="mt-2 ml-8 flex flex-col space-y-2" onClick={(e) => e.stopPropagation()}>
//               {resourceItems.map((resourceItem) => {
//                 const IconComp = resourceItem.icon;

//                 if (resourceItem.external) {
//                   return (
//                     <a
//                       key={resourceItem.label}
//                       href={resourceItem.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`flex items-center ${mobileSubLinkClass}`}
//                       onClick={() => {
//                         setOpenDropdown(null);
//                         setIsMenuOpen(false);
//                       }}
//                     >
//                       <IconComp className="mr-2 h-4 w-4" />
//                       {resourceItem.label}
//                       <span className="text-text-400/60 ml-1 text-xs">↗</span>
//                     </a>
//                   );
//                 }

//                 return (
//                   <Link
//                     key={resourceItem.label}
//                     to={resourceItem.href}
//                     className={`flex items-center ${mobileSubLinkClass}`}
//                     onClick={() => {
//                       setOpenDropdown(null);
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     <IconComp className="mr-2 h-4 w-4" />
//                     {resourceItem.label}
//                   </Link>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       );
//     }

//     return (
//       <Link key={item.label} to={item.href || "/"} className={mobileNavLinkClass} onClick={() => closeAllMenus()}>
//         <IconComponent className="h-5 w-5" />
//         <span className="font-normal">{item.label}</span>
//       </Link>
//     );
//   };

//   /* ════════════════════════════════════════════
//      RENDER
//      ════════════════════════════════════════════ */
//   return (
//     <nav className={"fixed top-0 z-50 w-full backdrop-blur-sm " + "bg-light/90 dark:bg-dark-300/90 " + "border-light-400 dark:border-dark-500 border-b " + "shadow-soft"}>
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <button
//             onClick={() => {
//               closeAllMenus();
//               navigate("/");
//             }}
//             className="flex cursor-pointer items-center space-x-2 transition-opacity hover:opacity-80"
//           >
//             <div className="from-church-gold-400 to-church-gold-300 shadow-soft flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br">
//               <img src={logo} alt="Church Logo" />
//             </div>
//             <span className="text-text dark:text-light text-xl font-bold">Itedo Yiyanju</span>
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden items-center gap-3 lg:flex">
//             <div className="relative flex items-center space-x-8">{navigationItems.map(renderDesktopItem)}</div>
//             <ThemeToggle />
//           </div>

//           {/* Mobile: theme + menu */}
//           <div className="flex items-center gap-1 lg:hidden">
//             <ThemeToggle />
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-text dark:text-light hover:bg-light-300 dark:hover:bg-dark-400"
//               onClick={() => {
//                 setIsMenuOpen((prev) => {
//                   const next = !prev;
//                   if (!next) setOpenDropdown(null);
//                   return next;
//                 });
//               }}
//             >
//               {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation Panel */}
//         {isMenuOpen && (
//           <div className={"border-t py-4 md:hidden " + "border-light-400 dark:border-dark-500"}>
//             <div className="flex flex-col space-y-4">{navigationItems.map(renderMobileItem)}</div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;



import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Heart, Phone, ChevronDown, Video, Mic, BookOpen, Music, Library } from "lucide-react";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLiveStatus } from "@/contexts/LiveStatusContext";
import gsap from "gsap";

type DropdownType = "about" | "live" | "resources" | null;

interface NavItem {
  label: string;
  href?: string;
  dropdown?: boolean;
  icon: React.ElementType;
}

const aboutItems = [
  { label: "History of CAC", href: "/about-cac" },
  { label: "Tenets of CAC", href: "/about-cac/#tenets" },
  { label: "About CAC Itedo Yiyanju", href: "/about-itedo" },
  { label: "The Pastorate", href: "/about-itedo/#pastorate" },
];

const resourceItems = [
  { label: "Sermons", href: "/sermons", icon: Mic, external: false, description: "Listen to past sermons" },
  { label: "Hymnal", href: "https://cac-hymnal-pwa.vercel.app", icon: Music, external: true, description: "CAC Hymn book" },
  { label: "Books", href: "/books", icon: BookOpen, external: false, description: "Browse our book collection" },
];

const navigationItems: NavItem[] = [
  { label: "Home", href: "/", icon: Users },
  { label: "About Us", dropdown: true, icon: Users },
  { label: "Live Stream", dropdown: true, icon: Video },
  { label: "Events", href: "/events", icon: Users },
  { label: "Resources", dropdown: true, icon: Library },
  { label: "Give", href: "/give", icon: Heart },
  { label: "Contact Us", href: "#contact", icon: Phone },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const innerBarRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const aboutDropdownRef = useRef<HTMLDivElement | null>(null);
  const liveDropdownRef = useRef<HTMLDivElement | null>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement | null>(null);

  const { isLive } = useLiveStatus();

  // ── Scroll handler ──────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;

    setScrollProgress(progress);
    setIsScrolled(scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── GSAP scroll-driven animation ───────────────────────────────
  useEffect(() => {
    if (!navRef.current || !innerBarRef.current) return;

    if (isScrolled) {
      gsap.to(navRef.current, {
        duration: 0.5,
        ease: "power3.out",
        backdropFilter: "blur(20px)",
        borderBottomColor: "rgba(212, 168, 67, 0.15)",
      });

      gsap.to(innerBarRef.current, {
        duration: 0.6,
        ease: "power3.out",
        maxWidth: "900px",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "9999px",
        backgroundColor: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
      });

      // Animate logo smaller
      if (logoRef.current) {
        gsap.to(logoRef.current, {
          duration: 0.4,
          ease: "power3.out",
          scale: 0.85,
        });
      }

      // Compact the nav links
      if (desktopNavRef.current) {
        gsap.to(desktopNavRef.current.querySelectorAll(".nav-link-item"), {
          duration: 0.3,
          ease: "power2.out",
          fontSize: "0.8rem",
          stagger: 0.02,
        });
      }
    } else {
      gsap.to(navRef.current, {
        duration: 0.5,
        ease: "power3.out",
        backdropFilter: "blur(8px)",
        borderBottomColor: "transparent",
      });

      gsap.to(innerBarRef.current, {
        duration: 0.6,
        ease: "power3.out",
        maxWidth: "100%",
        paddingLeft: "0rem",
        paddingRight: "0rem",
        borderRadius: "0px",
        backgroundColor: "rgba(0,0,0,0)",
        border: "1px solid transparent",
        boxShadow: "none",
      });

      if (logoRef.current) {
        gsap.to(logoRef.current, {
          duration: 0.4,
          ease: "power3.out",
          scale: 1,
        });
      }

      if (desktopNavRef.current) {
        gsap.to(desktopNavRef.current.querySelectorAll(".nav-link-item"), {
          duration: 0.3,
          ease: "power2.out",
          fontSize: "0.875rem",
          stagger: 0.02,
        });
      }
    }
  }, [isScrolled]);

  // ── Dropdown helpers ────────────────────────────────────────────
  const getDropdownType = (label: string): DropdownType => {
    if (label === "About Us") return "about";
    if (label === "Live Stream") return "live";
    if (label === "Resources") return "resources";
    return null;
  };

  const getDropdownRef = (label: string) => {
    if (label === "About Us") return aboutDropdownRef;
    if (label === "Live Stream") return liveDropdownRef;
    if (label === "Resources") return resourcesDropdownRef;
    return null;
  };

  const toggleDropdown = (dropdown: DropdownType) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  const handleAnchorClick = (href: string) => {
    if (href.startsWith("#")) {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  // ── Click outside to close dropdowns ────────────────────────────
  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown === null) return;
      const target = event.target as Node;
      const isInside =
        aboutDropdownRef.current?.contains(target) ||
        liveDropdownRef.current?.contains(target) ||
        resourcesDropdownRef.current?.contains(target);
      if (!isInside) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // ── Class definitions ───────────────────────────────────────────
  const dropdownPanelClass =
    "absolute top-full mt-3 rounded-xl border shadow-2xl " +
    "bg-white/95 dark:bg-[#0c1425]/95 backdrop-blur-xl " +
    "border-gray-200/50 dark:border-white/10 " +
    "animate-in fade-in slide-in-from-top-2 duration-200";

  const dropdownItemClass =
    "flex items-center px-4 py-2.5 text-sm transition-all duration-200 " +
    "text-gray-600 dark:text-gray-400 " +
    "hover:bg-gray-100/80 dark:hover:bg-white/5 " +
    "hover:text-gray-900 dark:hover:text-white " +
    "hover:pl-5 " +
    "first:rounded-t-xl last:rounded-b-xl";

  const dropdownItemRichClass =
    "flex items-center px-4 py-3 text-sm transition-all duration-200 " +
    "text-gray-600 dark:text-gray-400 " +
    "hover:bg-gray-100/80 dark:hover:bg-white/5 " +
    "hover:text-gray-900 dark:hover:text-white " +
    "hover:pl-5 " +
    "first:rounded-t-xl last:rounded-b-xl";

  const mobileNavLinkClass =
    "flex items-center space-x-3 py-3 px-2 rounded-lg transition-all duration-300 " +
    "text-gray-600 dark:text-gray-400 " +
    "hover:text-gray-900 dark:hover:text-white " +
    "hover:bg-gray-100/50 dark:hover:bg-white/5";

  const mobileNavButtonClass =
    "flex w-full items-center space-x-3 py-3 px-2 rounded-lg text-left transition-all duration-300 " +
    "text-gray-600 dark:text-gray-400 " +
    "hover:text-gray-900 dark:hover:text-white " +
    "hover:bg-gray-100/50 dark:hover:bg-white/5";

  const mobileSubLinkClass =
    "text-sm py-2 px-3 rounded-md transition-all duration-200 " +
    "text-gray-500 dark:text-gray-500 " +
    "hover:text-gray-900 dark:hover:text-white " +
    "hover:bg-gray-100/50 dark:hover:bg-white/5";

  // ── Desktop nav item renderer ───────────────────────────────────
  const renderDesktopItem = (item: NavItem) => {
    if (item.dropdown) {
      const dropdownType = getDropdownType(item.label);
      const ref = getDropdownRef(item.label);

      return (
        <div key={item.label} className="relative" ref={ref}>
          <button
            className={
              "nav-link-item group flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 " +
              "text-gray-600 dark:text-gray-400 " +
              "hover:text-gray-900 dark:hover:text-white " +
              "hover:bg-gray-100/50 dark:hover:bg-white/5 " +
              (openDropdown === dropdownType ? "bg-gray-100/50 dark:bg-white/5 text-gray-900 dark:text-white" : "")
            }
            onClick={() => toggleDropdown(dropdownType)}
          >
            <span>{item.label}</span>

            {item.label === "Live Stream" && isLive && (
              <div className="ml-1 flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500" />
                  <span className="relative h-2 w-2 rounded-full bg-red-600" />
                </span>
                <span className="text-[10px] font-bold tracking-wider text-red-500">LIVE</span>
              </div>
            )}

            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${openDropdown === dropdownType ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* About Dropdown */}
          {item.label === "About Us" && openDropdown === "about" && (
            <div className={`${dropdownPanelClass} left-0 w-60`}>
              <div className="border-b border-gray-100 px-4 py-2 dark:border-white/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d4a843]">
                  About Us
                </span>
              </div>
              {aboutItems.map((aboutItem) => (
                <a
                  key={aboutItem.label}
                  href={aboutItem.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDropdown(null);
                    const [, hash] = aboutItem.href.split("#");
                    if (hash) {
                      window.location.href = aboutItem.href;
                    } else {
                      navigate(aboutItem.href);
                    }
                  }}
                  className={dropdownItemClass}
                >
                  {aboutItem.label}
                </a>
              ))}
            </div>
          )}

          {/* Live Stream Dropdown */}
          {item.label === "Live Stream" && openDropdown === "live" && (
            <div className={`${dropdownPanelClass} left-0 w-48`}>
              <div className="border-b border-gray-100 px-4 py-2 dark:border-white/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d4a843]">
                  Live Stream
                </span>
              </div>
              <a
                href="/listen/video"
                className={dropdownItemClass}
                onClick={() => setOpenDropdown(null)}
              >
                <Video className="mr-2.5 h-4 w-4 text-[#d4a843]" />
                Watch Live
              </a>
              <a
                href="/listen/audio"
                className={dropdownItemClass}
                onClick={() => setOpenDropdown(null)}
              >
                <Mic className="mr-2.5 h-4 w-4 text-[#d4a843]" />
                Listen Live
              </a>
            </div>
          )}

          {/* Resources Dropdown */}
          {item.label === "Resources" && openDropdown === "resources" && (
            <div className={`${dropdownPanelClass} left-0 w-56`}>
              <div className="border-b border-gray-100 px-4 py-2 dark:border-white/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d4a843]">
                  Resources
                </span>
              </div>
              {resourceItems.map((resourceItem) => {
                const IconComp = resourceItem.icon;
                if (resourceItem.external) {
                  return (
                    <a
                      key={resourceItem.label}
                      href={resourceItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={dropdownItemRichClass}
                      onClick={() => setOpenDropdown(null)}
                    >
                      <IconComp className="mr-3 h-4 w-4 text-[#d4a843]" />
                      <div>
                        <div className="font-medium">{resourceItem.label}</div>
                        <div className="text-xs text-gray-400 dark:text-gray-500">
                          {resourceItem.description}
                        </div>
                      </div>
                    </a>
                  );
                }
                return (
                  <Link
                    key={resourceItem.label}
                    to={resourceItem.href}
                    className={dropdownItemRichClass}
                    onClick={() => setOpenDropdown(null)}
                  >
                    <IconComp className="mr-3 h-4 w-4 text-[#d4a843]" />
                    <div>
                      <div className="font-medium">{resourceItem.label}</div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">
                        {resourceItem.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    if (item.href) {
      return (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => {
            setOpenDropdown(null);
            if (item.href!.startsWith("#")) {
              e.preventDefault();
              handleAnchorClick(item.href!);
            }
          }}
          className={
            "nav-link-item rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 " +
            "text-gray-600 dark:text-gray-400 " +
            "hover:text-gray-900 dark:hover:text-white " +
            "hover:bg-gray-100/50 dark:hover:bg-white/5"
          }
        >
          {item.label}
        </a>
      );
    }

    return null;
  };

  // ── Mobile nav item renderer ────────────────────────────────────
  const renderMobileItem = (item: NavItem) => {
    const IconComponent = item.icon;

    if (item.dropdown) {
      const dropdownType = getDropdownType(item.label);
      return (
        <div key={item.label}>
          <button onClick={() => toggleDropdown(dropdownType)} className={mobileNavButtonClass}>
            <IconComponent className="h-5 w-5 text-[#d4a843]" />
            <span className="font-medium">{item.label}</span>
            {item.label === "Live Stream" && isLive && (
              <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500" />
                  <span className="relative h-2 w-2 rounded-full bg-red-600" />
                </span>
                <span className="text-xs font-bold text-red-500">LIVE</span>
              </div>
            )}
            <ChevronDown
              className={`ml-auto h-4 w-4 transition-transform duration-300 ${openDropdown === dropdownType ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* About - Mobile */}
          {dropdownType === "about" && openDropdown === "about" && (
            <div className="ml-8 mt-1 flex flex-col space-y-1 border-l-2 border-[#d4a843]/20 pl-4">
              {aboutItems.map((aboutItem) => (
                <Link
                  key={aboutItem.label}
                  to={aboutItem.href}
                  className={mobileSubLinkClass}
                  onClick={closeAllMenus}
                >
                  {aboutItem.label}
                </Link>
              ))}
            </div>
          )}

          {/* Live - Mobile */}
          {dropdownType === "live" && openDropdown === "live" && (
            <div className="ml-8 mt-1 flex flex-col space-y-1 border-l-2 border-[#d4a843]/20 pl-4">
              <Link to="/listen/video" className={`flex items-center ${mobileSubLinkClass}`} onClick={closeAllMenus}>
                <Video className="mr-2 h-4 w-4 text-[#d4a843]" /> Watch Live
              </Link>
              <Link to="/listen/audio" className={`flex items-center ${mobileSubLinkClass}`} onClick={closeAllMenus}>
                <Mic className="mr-2 h-4 w-4 text-[#d4a843]" /> Listen Live
              </Link>
            </div>
          )}

          {/* Resources - Mobile */}
          {dropdownType === "resources" && openDropdown === "resources" && (
            <div className="ml-8 mt-1 flex flex-col space-y-1 border-l-2 border-[#d4a843]/20 pl-4">
              {resourceItems.map((resourceItem) => {
                const IconComp = resourceItem.icon;
                if (resourceItem.external) {
                  return (
                    <a
                      key={resourceItem.label}
                      href={resourceItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${mobileSubLinkClass}`}
                      onClick={closeAllMenus}
                    >
                      <IconComp className="mr-2 h-4 w-4 text-[#d4a843]" />
                      {resourceItem.label}
                      <span className="ml-1 text-xs text-gray-400">↗</span>
                    </a>
                  );
                }
                return (
                  <Link
                    key={resourceItem.label}
                    to={resourceItem.href}
                    className={`flex items-center ${mobileSubLinkClass}`}
                    onClick={closeAllMenus}
                  >
                    <IconComp className="mr-2 h-4 w-4 text-[#d4a843]" />
                    {resourceItem.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link key={item.label} to={item.href || "/"} className={mobileNavLinkClass} onClick={closeAllMenus}>
        <IconComponent className="h-5 w-5 text-[#d4a843]" />
        <span className="font-medium">{item.label}</span>
      </Link>
    );
  };

  // ── RENDER ──────────────────────────────────────────────────────
  return (
    <>
      <nav
        ref={navRef}
        className={
          "fixed top-0 z-50 w-full transition-all duration-500 " +
          (isScrolled
            ? "bg-white/80 dark:bg-[#050a18]/80 shadow-[0_1px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent")
        }
        style={{
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        }}
      >
        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] transition-all duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div
            ref={innerBarRef}
            className={
              "mx-auto flex items-center transition-all duration-500 " +
              (isScrolled
                ? "h-14 justify-center gap-6 my-1"
                : "h-16 justify-between")
            }
          >
            {/* Logo */}
            <button
              ref={logoRef}
              onClick={() => {
                closeAllMenus();
                navigate("/");
              }}
              className="flex cursor-pointer items-center space-x-2 transition-all duration-300 hover:opacity-80"
            >
              <div
                className={
                  "flex items-center justify-center overflow-hidden rounded-lg bg-lineaar-to-br from-[#d4a843] to-[#b8922e] transition-all duration-500 " +
                  (isScrolled ? "h-8 w-8" : "h-10 w-10")
                }
              >
                <img src={logo} alt="Church Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span
                  className={
                    "font-bold leading-tight transition-all duration-500 " +
                    "text-gray-900 dark:text-white " +
                    (isScrolled ? "text-base" : "text-lg")
                  }
                >
                  Itedo Yiyanju
                </span>
                {!isScrolled && (
                  <span className="text-[10px] font-medium tracking-wider text-[#d4a843]">
                    CHRIST APOSTOLIC CHURCH
                  </span>
                )}
              </div>
            </button>

            {/* Desktop Navigation */}
            <div ref={desktopNavRef} className="hidden items-center gap-1 lg:flex">
              {navigationItems.map(renderDesktopItem)}

              {/* Separator */}
              <div className="mx-2 h-5 w-px bg-gray-200 dark:bg-white/10" />

              <ThemeToggle />
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-1 lg:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className={
                  "relative overflow-hidden rounded-lg transition-all duration-300 " +
                  "text-gray-700 dark:text-gray-300 " +
                  "hover:bg-gray-100 dark:hover:bg-white/5"
                }
                onClick={() => {
                  setIsMenuOpen((prev) => {
                    const next = !prev;
                    if (!next) setOpenDropdown(null);
                    return next;
                  });
                }}
              >
                <div className="relative h-5 w-5">
                  <Menu
                    className={
                      "absolute inset-0 h-5 w-5 transition-all duration-300 " +
                      (isMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")
                    }
                  />
                  <X
                    className={
                      "absolute inset-0 h-5 w-5 transition-all duration-300 " +
                      (isMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")
                    }
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          className={
            "overflow-hidden transition-all duration-500 ease-in-out lg:hidden " +
            (isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0")
          }
        >
          <div
            className={
              "border-t px-4 py-4 " +
              "border-gray-100 dark:border-white/5 " +
              "bg-white/95 dark:bg-[#050a18]/95 " +
              "backdrop-blur-xl"
            }
          >
            <div className="flex flex-col space-y-1">{navigationItems.map(renderMobileItem)}</div>

            {/* Mobile bottom accent */}
            <div className="mt-4 border-t border-gray-100 pt-4 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-600">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#d4a843] opacity-50" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#d4a843]" />
                </span>
                <span className="tracking-wider">Join us every Sunday</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer so content isn't hidden behind fixed nav */}
      <div className={isScrolled ? "h-6" : "h-16"} />
    </>
  );
};

export default Navigation;