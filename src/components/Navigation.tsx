import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Heart, Phone, ChevronDown, Video, Mic } from "lucide-react";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLiveStatus } from "@/contexts/LiveStatusContext";


type DropdownType = "about" | "live" | null;

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

const navigationItems: NavItem[] = [
  { label: "Home", href: "/", icon: Users },
  { label: "About Us", dropdown: true, icon: Users },
  { label: "Live Stream", dropdown: true, icon: Video },
  { label: "Events", href: "/events", icon: Users },
  { label: "Sermons", href: "/sermons", icon: Users },
  { label: "Give", href: "/give", icon: Heart },
  { label: "Contact Us", href: "#contact", icon: Phone },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const navigate = useNavigate();
  const aboutDropdownRef = useRef<HTMLDivElement | null>(null);
  const liveDropdownRef = useRef<HTMLDivElement | null>(null);

  const { isLive } = useLiveStatus();

  const toggleDropdown = (dropdown: "about" | "live") => {
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
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  // useEffect(() => {
  //   if (window.innerWidth < 768) return;
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (openDropdown === null) return;
  //     const target = event.target as Node;
  //     const isInsideAbout = aboutDropdownRef.current?.contains(target);
  //     const isInsideLive = liveDropdownRef.current?.contains(target);
  //     if (!isInsideAbout && !isInsideLive) {
  //       setOpenDropdown(null);
  //     }
  //   };

  //   const handleEscape = (event: KeyboardEvent) => {
  //     if (event.key === "Escape") setOpenDropdown(null);
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   document.addEventListener("keydown", handleEscape);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("keydown", handleEscape);
  //   };
  // }, [openDropdown]);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown === null) return;

      const target = event.target as Node;

      const isInsideAbout = aboutDropdownRef.current?.contains(target);
      const isInsideLive = liveDropdownRef.current?.contains(target);

      if (!isInsideAbout && !isInsideLive) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // ✅ Extracted as separate render functions — no more ternary issues
  const renderDesktopItem = (item: NavItem) => {
    if (item.dropdown) {
      const dropdownType = item.label === "About Us" ? "about" : "live";
      const ref = item.label === "About Us" ? aboutDropdownRef : liveDropdownRef;

      return (
        <div key={item.label} className="relative" ref={ref}>
          {/* <button className="flex items-center space-x-1 text-sm font-normal text-church-text-light transition-colors duration-300 hover:text-church-text" onClick={() => toggleDropdown(dropdownType)}>
            <span>{item.label}</span>
            <ChevronDown className="h-4 w-4" />
          </button> */}
          <button
            className="flex items-center space-x-1 text-sm font-normal text-church-text-light transition-colors duration-300 hover:text-church-text"
            onClick={() => toggleDropdown(dropdownType)}
          >
            <span>{item.label}</span>
            {item.label === "Live Stream" && isLive && (
              <div className="ml-2 flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500"></span>
                  <span className="relative h-2 w-2 rounded-full bg-red-600"></span>
                </span>

                <span className="text-xs font-bold tracking-wider text-red-500">
                  LIVE
                </span>
              </div>
            )}
            <ChevronDown className="h-4 w-4" />
          </button>

          {item.label === "About Us" && openDropdown === "about" && (
            <div className="absolute top-full mt-2 w-56 rounded-lg border border-border bg-popover text-popover-foreground shadow-lg">
              {aboutItems.map((aboutItem) => (
                <a
                  key={aboutItem.label}
                  href={aboutItem.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDropdown(null);

                    const [path, hash] = aboutItem.href.split("#");

                    if (hash) {
                      navigate(aboutItem.href);
                      window.location.href = aboutItem.href;
                    } else {
                      navigate(aboutItem.href);
                    }
                  }}
                  className="flex items-center px-4 py-2 text-sm text-muted-foreground first:rounded-t-lg last:rounded-b-lg hover:bg-muted hover:text-foreground"
                >
                  {aboutItem.label}
                </a>
              ))}
            </div>
          )}

          {item.label === "Live Stream" && openDropdown === "live" && (
            <div className="absolute top-full mt-2 w-40 rounded-lg border border-border bg-popover text-popover-foreground shadow-lg">
              <a href="/listen/video" className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setOpenDropdown(null)}>
                <Video className="mr-2 h-4 w-4" />
                Watch Us Live
              </a>
              <a href="/listen/audio" className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setOpenDropdown(null)}>
                <Mic className="mr-2 h-4 w-4" />
                Listen Live
              </a>
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
          className="font-normal text-church-text-light transition-colors duration-300 hover:text-church-text"
        >
          {item.label}
        </a>
      );
    }

    return null;
  };

  // const renderMobileItem = (item: NavItem) => {
  //   const IconComponent = item.icon;

  //   if (item.dropdown) {
  //     const dropdownType = item.label === "About Us" ? "about" : "live";

  //     return (
  //       <div key={item.label}>
  //         <button onClick={() => toggleDropdown(dropdownType)} className="flex w-full items-center space-x-3 py-2 text-left text-church-text-light transition-colors duration-300 hover:text-church-text">
  //           <IconComponent className="h-5 w-5" />
  //           <span className="font-normal">{item.label}</span>
  //           <ChevronDown className="ml-auto h-4 w-4" />
  //         </button>

  //         {item.label === "About Us" && openDropdown === "about" && (
  //           <div className="ml-8 flex flex-col space-y-2">
  //             {aboutItems.map((aboutItem) => (
  //               <a
  //                 key={aboutItem.label}
  //                 href={aboutItem.href}
  //                 className="flex items-center text-sm text-church-text-light hover:text-church-text"
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   closeAllMenus();

  //                   if (aboutItem.href.includes("#")) {
  //                     window.location.href = aboutItem.href;
  //                   } else {
  //                     navigate(aboutItem.href);
  //                   }
  //                 }}
  //               >
  //                 {aboutItem.label}
  //               </a>
  //             ))}
  //           </div>
  //         )}

  //         {item.label === "Live Stream" && openDropdown === "live" && (
  //           <div className="ml-8 flex flex-col space-y-2">
  //             <a href="/listen/video" className="flex items-center text-sm text-church-text-light hover:text-church-text" onClick={closeAllMenus}>
  //               <Video className="mr-2 h-4 w-4" />
  //               Watch Live
  //             </a>
  //             <a href="/listen/audio" className="flex items-center text-sm text-church-text-light hover:text-church-text" onClick={closeAllMenus}>
  //               <Mic className="mr-2 h-4 w-4" />
  //               Listen Live
  //             </a>
  //           </div>
  //         )}
  //       </div>
  //     );
  //   }

  //   return (
  //     <a
  //       key={item.label}
  //       href={item.href}
  //       className="flex items-center space-x-3 py-2 text-church-text-light transition-colors duration-300 hover:text-church-text"
  //       onClick={(e) => {
  //         if (item.href?.startsWith("#")) {
  //           e.preventDefault();
  //           closeAllMenus();
  //           handleAnchorClick(item.href);
  //         } else {
  //           closeAllMenus();
  //         }
  //       }}
  //     >
  //       <IconComponent className="h-5 w-5" />
  //       <span className="font-normal">{item.label}</span>
  //     </a>
  //   );
  // };

  const renderMobileItem = (item: NavItem) => {
    const IconComponent = item.icon;

    if (item.dropdown) {
      const dropdownType = item.label === "About Us" ? "about" : "live";

      return (
        <div key={item.label}>
          {/* <button
            onClick={() => toggleDropdown(dropdownType)}
            className="flex w-full items-center space-x-3 py-2 text-left text-church-text-light transition-colors duration-300 hover:text-church-text"
          >
            <IconComponent className="h-5 w-5" />
            <span className="font-normal">{item.label}</span>
            <ChevronDown
              className={`ml-auto h-4 w-4 transition-transform ${openDropdown === dropdownType ? "rotate-180" : ""
                }`}
            />
          </button> */}
          <button
            onClick={() => toggleDropdown(dropdownType)}
            className="flex w-full items-center space-x-3 py-2 text-left text-church-text-light transition-colors duration-300 hover:text-church-text"
          >
            <IconComponent className="h-5 w-5" />

            <span className="font-normal">{item.label}</span>

            {item.label === "Live Stream" && isLive && (
              <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500"></span>
                  <span className="relative h-2 w-2 rounded-full bg-red-600"></span>
                </span>

                <span className="text-xs font-bold text-red-500">
                  LIVE
                </span>
              </div>
            )}

            <ChevronDown className="ml-auto h-4 w-4" />
          </button>

          {/* ABOUT US */}
          {dropdownType === "about" && openDropdown === "about" && (
            <div
              className="ml-8 mt-2 flex flex-col space-y-2"
              onClick={(e) => e.stopPropagation()}
            >
              {aboutItems.map((aboutItem) => (
                <Link
                  key={aboutItem.label}
                  to={aboutItem.href}
                  className="text-sm text-church-text-light hover:text-church-text"
                  onClick={() => {
                    setOpenDropdown(null);
                    setIsMenuOpen(false);
                  }}
                >
                  {aboutItem.label}
                </Link>
              ))}
            </div>
          )}

          {/* LIVE STREAM */}
          {dropdownType === "live" && openDropdown === "live" && (
            <div
              className="ml-8 mt-2 flex flex-col space-y-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                to="/listen/video"
                className="flex items-center text-sm text-church-text-light hover:text-church-text"
                onClick={() => {
                  setOpenDropdown(null);
                  setIsMenuOpen(false);
                }}
              >
                <Video className="mr-2 h-4 w-4" />
                Watch Live
              </Link>

              <Link
                to="/listen/audio"
                className="flex items-center text-sm text-church-text-light hover:text-church-text"
                onClick={() => {
                  setOpenDropdown(null);
                  setIsMenuOpen(false);
                }}
              >
                <Mic className="mr-2 h-4 w-4" />
                Listen Live
              </Link>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.label}
        to={item.href || "/"}
        className="flex items-center space-x-3 py-2 text-church-text-light transition-colors duration-300 hover:text-church-text"
        onClick={() => {
          closeAllMenus();
        }}
      >
        <IconComponent className="h-5 w-5" />
        <span className="font-normal">{item.label}</span>
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 shadow-soft backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              closeAllMenus();
              navigate("/");
            }}
            className="flex cursor-pointer items-center space-x-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent shadow-soft">
              <img src={logo} alt="Church Logo" />
            </div>
            <span className="text-xl font-bold text-church-text">Itedo Yiyanju</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="relative flex items-center space-x-8">{navigationItems.map(renderDesktopItem)}</div>
            <ThemeToggle />
          </div>

          {/* Mobile: theme + menu */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsMenuOpen((prev) => {
                  const next = !prev;
                  if (!next) setOpenDropdown(null);
                  return next;
                });
              }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col space-y-4">{navigationItems.map(renderMobileItem)}</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
