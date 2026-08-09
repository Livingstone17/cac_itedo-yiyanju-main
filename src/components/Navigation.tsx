import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Heart, Phone, ChevronDown, Video, Mic, BookOpen, Music, Library } from "lucide-react";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLiveStatus } from "@/contexts/LiveStatusContext";

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
  {
    label: "Sermons",
    href: "/sermons",
    icon: Mic,
    external: false,
    description: "Listen to past sermons",
  },
  {
    label: "Hymnal",
    href: "https://cac-hymnal-pwa.vercel.app",
    icon: Music,
    external: true,
    description: "CAC Hymn book",
  },
  {
    label: "Books",
    href: "/books",
    icon: BookOpen,
    external: false,
    description: "Browse our book collection",
  },
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
  const navigate = useNavigate();
  const aboutDropdownRef = useRef<HTMLDivElement | null>(null);
  const liveDropdownRef = useRef<HTMLDivElement | null>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement | null>(null);

  const { isLive } = useLiveStatus();

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
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown === null) return;

      const target = event.target as Node;
      const isInsideAbout = aboutDropdownRef.current?.contains(target);
      const isInsideLive = liveDropdownRef.current?.contains(target);
      const isInsideResources = resourcesDropdownRef.current?.contains(target);

      if (!isInsideAbout && !isInsideLive && !isInsideResources) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  /* ── Dropdown wrapper classes ── */
  const dropdownPanelClass = "absolute top-full mt-[22px] rounded-lg border shadow-lg " + "bg-light dark:bg-dark-400 " + "border-light-400 dark:border-dark-500";

  const dropdownItemClass = "flex items-center px-4 py-2 text-sm transition-colors duration-200 " + "text-text-200 dark:text-text-400 " + "hover:bg-light-300 dark:hover:bg-dark-500 " + "hover:text-text dark:hover:text-light " + "first:rounded-t-lg last:rounded-b-lg";

  const dropdownItemRichClass = "flex items-center px-4 py-2.5 text-sm transition-colors duration-200 " + "text-text-200 dark:text-text-400 " + "hover:bg-light-300 dark:hover:bg-dark-500 " + "hover:text-text dark:hover:text-light " + "first:rounded-t-lg last:rounded-b-lg";

  /* ── Nav link classes ── */
  const navLinkClass = "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light " + "font-normal transition-colors duration-300";

  const navButtonClass = "flex items-center space-x-1 text-sm font-normal transition-colors duration-300 " + "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light";

  /* ── Mobile nav link classes ── */
  const mobileNavLinkClass = "flex items-center space-x-3 py-2 transition-colors duration-300 " + "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light";

  const mobileNavButtonClass = "flex w-full items-center space-x-3 py-2 text-left transition-colors duration-300 " + "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light";

  const mobileSubLinkClass = "text-sm transition-colors duration-200 " + "text-text-300 dark:text-text-400 " + "hover:text-text dark:hover:text-light";

  /* ════════════════════════════════════════════
     DESKTOP ITEMS
     ════════════════════════════════════════════ */
  const renderDesktopItem = (item: NavItem) => {
    if (item.dropdown) {
      const dropdownType = getDropdownType(item.label);
      const ref = getDropdownRef(item.label);

      return (
        <div key={item.label} className="relative" ref={ref}>
          <button className={navButtonClass} onClick={() => toggleDropdown(dropdownType)}>
            <span>{item.label}</span>

            {item.label === "Live Stream" && isLive && (
              <div className="ml-2 flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500" />
                  <span className="relative h-2 w-2 rounded-full bg-red-600" />
                </span>
                <span className="text-xs font-bold tracking-wider text-red-500">LIVE</span>
              </div>
            )}

            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === dropdownType ? "rotate-180" : ""}`} />
          </button>

          {/* ABOUT US DROPDOWN */}
          {item.label === "About Us" && openDropdown === "about" && (
            <div className={`${dropdownPanelClass} w-56`}>
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

          {/* LIVE STREAM DROPDOWN */}
          {item.label === "Live Stream" && openDropdown === "live" && (
            <div className={`${dropdownPanelClass} w-40`}>
              <a href="/listen/video" className={dropdownItemClass} onClick={() => setOpenDropdown(null)}>
                <Video className="mr-2 h-4 w-4" />
                Watch Us Live
              </a>
              <a href="/listen/audio" className={dropdownItemClass} onClick={() => setOpenDropdown(null)}>
                <Mic className="mr-2 h-4 w-4" />
                Listen Live
              </a>
            </div>
          )}

          {/* RESOURCES DROPDOWN */}
          {item.label === "Resources" && openDropdown === "resources" && (
            <div className={`${dropdownPanelClass} w-52`}>
              {resourceItems.map((resourceItem) => {
                const IconComp = resourceItem.icon;

                if (resourceItem.external) {
                  return (
                    <a key={resourceItem.label} href={resourceItem.href} target="_blank" rel="noopener noreferrer" className={dropdownItemRichClass} onClick={() => setOpenDropdown(null)}>
                      <IconComp className="mr-3 h-4 w-4" />
                      <div>
                        <div className="font-medium">{resourceItem.label}</div>
                        <div className="text-text-400 dark:text-text-500 text-xs">{resourceItem.description}</div>
                      </div>
                    </a>
                  );
                }

                return (
                  <Link key={resourceItem.label} to={resourceItem.href} className={dropdownItemRichClass} onClick={() => setOpenDropdown(null)}>
                    <IconComp className="mr-3 h-4 w-4" />
                    <div>
                      <div className="font-medium">{resourceItem.label}</div>
                      <div className="text-text-400 dark:text-text-500 text-xs">{resourceItem.description}</div>
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
          className={navLinkClass}
        >
          {item.label}
        </a>
      );
    }

    return null;
  };

  /* ════════════════════════════════════════════
     MOBILE ITEMS
     ════════════════════════════════════════════ */
  const renderMobileItem = (item: NavItem) => {
    const IconComponent = item.icon;

    if (item.dropdown) {
      const dropdownType = getDropdownType(item.label);

      return (
        <div key={item.label}>
          <button onClick={() => toggleDropdown(dropdownType)} className={mobileNavButtonClass}>
            <IconComponent className="h-5 w-5" />
            <span className="font-normal">{item.label}</span>

            {item.label === "Live Stream" && isLive && (
              <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500" />
                  <span className="relative h-2 w-2 rounded-full bg-red-600" />
                </span>
                <span className="text-xs font-bold text-red-500">LIVE</span>
              </div>
            )}

            <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${openDropdown === dropdownType ? "rotate-180" : ""}`} />
          </button>

          {/* ABOUT US - Mobile */}
          {dropdownType === "about" && openDropdown === "about" && (
            <div className="mt-2 ml-8 flex flex-col space-y-2" onClick={(e) => e.stopPropagation()}>
              {aboutItems.map((aboutItem) => (
                <Link
                  key={aboutItem.label}
                  to={aboutItem.href}
                  className={mobileSubLinkClass}
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

          {/* LIVE STREAM - Mobile */}
          {dropdownType === "live" && openDropdown === "live" && (
            <div className="mt-2 ml-8 flex flex-col space-y-2" onClick={(e) => e.stopPropagation()}>
              <Link
                to="/listen/video"
                className={`flex items-center ${mobileSubLinkClass}`}
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
                className={`flex items-center ${mobileSubLinkClass}`}
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

          {/* RESOURCES - Mobile */}
          {dropdownType === "resources" && openDropdown === "resources" && (
            <div className="mt-2 ml-8 flex flex-col space-y-2" onClick={(e) => e.stopPropagation()}>
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
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      <IconComp className="mr-2 h-4 w-4" />
                      {resourceItem.label}
                      <span className="text-text-400/60 ml-1 text-xs">↗</span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={resourceItem.label}
                    to={resourceItem.href}
                    className={`flex items-center ${mobileSubLinkClass}`}
                    onClick={() => {
                      setOpenDropdown(null);
                      setIsMenuOpen(false);
                    }}
                  >
                    <IconComp className="mr-2 h-4 w-4" />
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
      <Link key={item.label} to={item.href || "/"} className={mobileNavLinkClass} onClick={() => closeAllMenus()}>
        <IconComponent className="h-5 w-5" />
        <span className="font-normal">{item.label}</span>
      </Link>
    );
  };

  /* ════════════════════════════════════════════
     RENDER
     ════════════════════════════════════════════ */
  return (
    <nav className={"fixed top-0 z-50 w-full backdrop-blur-sm " + "bg-light/90 dark:bg-dark-300/90 " + "border-light-400 dark:border-dark-500 border-b " + "shadow-soft"}>
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
            <div className="from-church-gold-400 to-church-gold-300 shadow-soft flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br">
              <img src={logo} alt="Church Logo" />
            </div>
            <span className="text-text dark:text-light text-xl font-bold">Itedo Yiyanju</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 lg:flex">
            <div className="relative flex items-center space-x-8">{navigationItems.map(renderDesktopItem)}</div>
            <ThemeToggle />
          </div>

          {/* Mobile: theme + menu */}
          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-text dark:text-light hover:bg-light-300 dark:hover:bg-dark-400"
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

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className={"border-t py-4 md:hidden " + "border-light-400 dark:border-dark-500"}>
            <div className="flex flex-col space-y-4">{navigationItems.map(renderMobileItem)}</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;



