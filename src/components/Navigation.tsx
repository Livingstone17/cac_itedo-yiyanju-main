import {useEffect, useRef, useState, useCallback} from "react"
import {Link, useNavigate} from "react-router-dom"
import {Button} from "@/components/ui/button"
import {Menu, X, Users, Heart, Phone, ChevronDown, Video, Mic, BookOpen, Music, Library, Play} from "lucide-react"
import logo from "@/assets/logo.png"
import {ThemeToggle} from "@/components/ThemeToggle"
import {useLiveStatus} from "@/contexts/LiveStatusContext"

type DropdownType = "about" | "live" | "resources" | null

interface NavItem {
  label: string
  href?: string
  dropdown?: boolean
  icon: React.ElementType
}

const aboutItems = [
  {label: "History of CAC", href: "/about-cac"},
  {label: "Tenets of CAC", href: "/about-cac/#tenets"},
  {label: "About CAC Itedo Yiyanju", href: "/about-itedo"},
  {label: "The Pastorate", href: "/about-itedo/#pastorate"},
]

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
]

const navigationItems: NavItem[] = [
  {label: "Home", href: "/", icon: Users},
  {label: "About Us", dropdown: true, icon: Users},
  {label: "Live Stream", dropdown: true, icon: Video},
  {label: "Events", href: "/events", icon: Users},
  {label: "Resources", dropdown: true, icon: Library},
  {label: "Give", href: "/give", icon: Heart},
  {label: "Contact Us", href: "#contact", icon: Phone},
]

const goToLivestream = () => {
  window.location.href = "/listen/video"
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLButtonElement>(null)

  const aboutDropdownRef = useRef<HTMLDivElement | null>(null)
  const liveDropdownRef = useRef<HTMLDivElement | null>(null)
  const resourcesDropdownRef = useRef<HTMLDivElement | null>(null)

  const {isLive} = useLiveStatus()

  // ── Scroll state → frosted glass ────────────────────────────────
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true})
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // ── Dropdown helpers ────────────────────────────────────────────
  const getDropdownType = (label: string): DropdownType => {
    if (label === "About Us") return "about"
    if (label === "Live Stream") return "live"
    if (label === "Resources") return "resources"
    return null
  }

  const getDropdownRef = (label: string) => {
    if (label === "About Us") return aboutDropdownRef
    if (label === "Live Stream") return liveDropdownRef
    if (label === "Resources") return resourcesDropdownRef
    return null
  }

  const toggleDropdown = (dropdown: DropdownType) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown))
  }

  const closeAllMenus = () => {
    setOpenDropdown(null)
    setIsMenuOpen(false)
  }

  const handleAnchorClick = (href: string) => {
    if (href.startsWith("#")) {
      navigate("/")
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) element.scrollIntoView({behavior: "smooth"})
      }, 0)
    }
  }

  // ── Click outside to close dropdowns ────────────────────────────
  useEffect(() => {
    if (window.innerWidth < 1024) return
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown === null) return
      const target = event.target as Node
      const isInside = aboutDropdownRef.current?.contains(target) || liveDropdownRef.current?.contains(target) || resourcesDropdownRef.current?.contains(target)
      if (!isInside) setOpenDropdown(null)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [openDropdown])

  // ── Minimal class tokens ────────────────────────────────────────
  const navLinkClass = "nav-link-item group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 " + "text-[#55565c] hover:text-[#17181c] " + "dark:text-stone-400 dark:hover:text-white"

  const linkUnderline = "after:absolute after:inset-x-3.5 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#a16207] after:transition-transform after:duration-300 after:ease-out dark:after:bg-[#d4a843] group-hover:after:scale-x-100"

  const dropdownPanelClass = "absolute left-0 top-full mt-2 overflow-hidden rounded-2xl border bg-white/90 shadow-[0_24px_60px_-20px_rgba(23,24,28,0.25)] backdrop-blur-xl " + "border-[#17181c]/10 dark:border-white/10 dark:bg-[#10141c]/90 " + "p-2 animate-in fade-in slide-in-from-top-2 duration-200"

  const dropdownHeaderClass = "px-3 pb-1.5 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] " + "text-[#a16207]/80 dark:text-[#d4a843]/80"

  const dropdownItemClass = "flex items-center px-3 py-2.5 text-sm transition-all duration-200 rounded-xl " + "text-[#55565c] dark:text-stone-400 " + "hover:bg-[#17181c]/[0.04] hover:text-[#17181c] " + "dark:hover:bg-white/5 dark:hover:text-white"

  const mobileNavLinkClass = "flex items-center gap-3.5 rounded-xl px-3 py-3 text-[15px] font-medium transition-all duration-300 " + "text-[#55565c] dark:text-stone-400 " + "hover:bg-[#17181c]/[0.04] hover:text-[#17181c] " + "dark:hover:bg-white/5 dark:hover:text-white"

  const mobileNavButtonClass = "flex w-full items-center gap-3.5 rounded-xl px-3 py-3 text-left text-[15px] font-medium transition-all duration-300 " + "text-[#55565c] dark:text-stone-400 " + "hover:bg-[#17181c]/[0.04] hover:text-[#17181c] " + "dark:hover:bg-white/5 dark:hover:text-white"

  const mobileSubLinkClass = "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 " + "text-[#6f7076] dark:text-stone-500 " + "hover:bg-[#17181c]/[0.04] hover:text-[#17181c] " + "dark:hover:bg-white/5 dark:hover:text-white"

  // ── Desktop nav item renderer ───────────────────────────────────
  const renderDesktopItem = (item: NavItem) => {
    if (item.dropdown) {
      const dropdownType = getDropdownType(item.label)
      const ref = getDropdownRef(item.label)

      return (
        <div key={item.label} className="relative" ref={ref}>
          <button className={`${navLinkClass} ${linkUnderline} flex items-center gap-1 ${openDropdown === dropdownType ? "text-[#17181c] dark:text-white" : ""}`} onClick={() => toggleDropdown(dropdownType)}>
            <span>{item.label}</span>

            {item.label === "Live Stream" && isLive && (
              <span className="ml-1.5 flex items-center gap-1 rounded-full bg-[#e5484d]/10 px-2 py-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#e5484d] opacity-60" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#e5484d]" />
                </span>
                <span className="text-[9px] font-bold tracking-wider text-[#e5484d]">LIVE</span>
              </span>
            )}

            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${openDropdown === dropdownType ? "rotate-180" : ""}`} />
          </button>

          {/* About Dropdown */}
          {item.label === "About Us" && openDropdown === "about" && (
            <div className={`${dropdownPanelClass} w-64`}>
              <p className={dropdownHeaderClass}>About Us</p>
              {aboutItems.map((aboutItem) => (
                <a
                  key={aboutItem.label}
                  href={aboutItem.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenDropdown(null)
                    const [, hash] = aboutItem.href.split("#")
                    if (hash) {
                      window.location.href = aboutItem.href
                    } else {
                      navigate(aboutItem.href)
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
            <div className={`${dropdownPanelClass} w-52`}>
              <p className={dropdownHeaderClass}>Live Stream</p>
              <a href="/listen/video" className={dropdownItemClass} onClick={() => setOpenDropdown(null)}>
                <Video className="mr-2 h-4 w-4 text-[#a16207] dark:text-[#d4a843]" />
                Watch Live
              </a>
              <a href="/listen/audio" className={dropdownItemClass} onClick={() => setOpenDropdown(null)}>
                <Mic className="mr-2 h-4 w-4 text-[#a16207] dark:text-[#d4a843]" />
                Listen Live
              </a>
            </div>
          )}

          {/* Resources Dropdown */}
          {item.label === "Resources" && openDropdown === "resources" && (
            <div className={`${dropdownPanelClass} w-60`}>
              <p className={dropdownHeaderClass}>Resources</p>
              {resourceItems.map((resourceItem) => {
                const IconComp = resourceItem.icon
                if (resourceItem.external) {
                  return (
                    <a key={resourceItem.label} href={resourceItem.href} target="_blank" rel="noopener noreferrer" className={dropdownItemClass} onClick={() => setOpenDropdown(null)}>
                      <IconComp className="mr-2.5 h-4 w-4 text-[#a16207] dark:text-[#d4a843]" />
                      <span>
                        <span className="block font-medium">{resourceItem.label}</span>
                        <span className="block text-xs text-[#8a8b90] dark:text-stone-500">{resourceItem.description}</span>
                      </span>
                    </a>
                  )
                }
                return (
                  <Link key={resourceItem.label} to={resourceItem.href} className={dropdownItemClass} onClick={() => setOpenDropdown(null)}>
                    <IconComp className="mr-2.5 h-4 w-4 text-[#a16207] dark:text-[#d4a843]" />
                    <span>
                      <span className="block font-medium">{resourceItem.label}</span>
                      <span className="block text-xs text-[#8a8b90] dark:text-stone-500">{resourceItem.description}</span>
                    </span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )
    }

    if (item.href) {
      return (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => {
            setOpenDropdown(null)
            if (item.href!.startsWith("#")) {
              e.preventDefault()
              handleAnchorClick(item.href!)
            }
          }}
          className={`${navLinkClass} ${linkUnderline}`}
        >
          {item.label}
        </a>
      )
    }

    return null
  }

  // ── Mobile nav item renderer ────────────────────────────────────
  const renderMobileItem = (item: NavItem) => {
    const IconComponent = item.icon

    if (item.dropdown) {
      const dropdownType = getDropdownType(item.label)
      return (
        <div key={item.label}>
          <button onClick={() => toggleDropdown(dropdownType)} className={mobileNavButtonClass}>
            <IconComponent className="h-[18px] w-[18px] text-[#a16207] dark:text-[#d4a843]" />
            <span>{item.label}</span>
            {item.label === "Live Stream" && isLive && (
              <span className="flex items-center gap-1 rounded-full bg-[#e5484d]/10 px-2 py-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#e5484d] opacity-60" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#e5484d]" />
                </span>
                <span className="text-[9px] font-bold tracking-wider text-[#e5484d]">LIVE</span>
              </span>
            )}
            <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${openDropdown === dropdownType ? "rotate-180" : ""}`} />
          </button>

          {/* About - Mobile */}
          {dropdownType === "about" && openDropdown === "about" && (
            <div className="mt-1 ml-[30px] flex flex-col gap-0.5 border-l border-[#a16207]/20 pl-3 dark:border-[#d4a843]/20">
              {aboutItems.map((aboutItem) => (
                <Link key={aboutItem.label} to={aboutItem.href} className={mobileSubLinkClass} onClick={closeAllMenus}>
                  {aboutItem.label}
                </Link>
              ))}
            </div>
          )}

          {/* Live - Mobile */}
          {dropdownType === "live" && openDropdown === "live" && (
            <div className="mt-1 ml-[30px] flex flex-col gap-0.5 border-l border-[#a16207]/20 pl-3 dark:border-[#d4a843]/20">
              <Link to="/listen/video" className={mobileSubLinkClass} onClick={closeAllMenus}>
                <Video className="h-4 w-4 text-[#a16207] dark:text-[#d4a843]" /> Watch Live
              </Link>
              <Link to="/listen/audio" className={mobileSubLinkClass} onClick={closeAllMenus}>
                <Mic className="h-4 w-4 text-[#a16207] dark:text-[#d4a843]" /> Listen Live
              </Link>
            </div>
          )}

          {/* Resources - Mobile */}
          {dropdownType === "resources" && openDropdown === "resources" && (
            <div className="mt-1 ml-[30px] flex flex-col gap-0.5 border-l border-[#a16207]/20 pl-3 dark:border-[#d4a843]/20">
              {resourceItems.map((resourceItem) => {
                const IconComp = resourceItem.icon
                if (resourceItem.external) {
                  return (
                    <a key={resourceItem.label} href={resourceItem.href} target="_blank" rel="noopener noreferrer" className={mobileSubLinkClass} onClick={closeAllMenus}>
                      <IconComp className="h-4 w-4 text-[#a16207] dark:text-[#d4a843]" />
                      {resourceItem.label}
                      <span className="ml-1 text-xs text-[#8a8b90]">↗</span>
                    </a>
                  )
                }
                return (
                  <Link key={resourceItem.label} to={resourceItem.href} className={mobileSubLinkClass} onClick={closeAllMenus}>
                    <IconComp className="h-4 w-4 text-[#a16207] dark:text-[#d4a843]" />
                    {resourceItem.label}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link key={item.label} to={item.href || "/"} className={mobileNavLinkClass} onClick={closeAllMenus}>
        <IconComponent className="h-[18px] w-[18px] text-[#a16207] dark:text-[#d4a843]" />
        <span>{item.label}</span>
      </Link>
    )
  }

  // ── RENDER ──────────────────────────────────────────────────────
  return (
    <>
      <nav ref={navRef} className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled ? "border-b border-[#17181c]/[0.06] bg-[#faf9f7]/80 shadow-[0_8px_40px_-16px_rgba(23,24,28,0.15)] backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#0a0d14]/80 dark:shadow-[0_8px_40px_-16px_rgba(0,0,0,0.6)]" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
            {/* Logo */}
            <button
              ref={logoRef}
              onClick={() => {
                closeAllMenus()
                navigate("/")
              }}
              className="group flex cursor-pointer items-center gap-3 transition-opacity duration-300 hover:opacity-80"
            >
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-[#17181c]/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
                <img src={logo} alt="Church Logo" className="h-6 w-6 object-contain" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-display text-[17px] font-semibold tracking-tight text-[#17181c] dark:text-white">Itedo Yiyanju</span>
                <span className="mt-0.5 text-[8.5px] font-semibold tracking-[0.22em] text-[#a16207]/80 uppercase dark:text-[#d4a843]/80">Christ Apostolic Church</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-0.5 lg:flex">{navigationItems.map(renderDesktopItem)}</div>

            {/* Desktop right cluster */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <ThemeToggle />
              <button onClick={goToLivestream} className="group inline-flex items-center gap-2 rounded-full bg-[#17181c] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2b2d33] hover:shadow-[0_12px_30px_-10px_rgba(23,24,28,0.5)] dark:bg-white dark:text-[#17181c] dark:hover:bg-stone-200">
                <Play className="h-3.5 w-3.5" />
                Watch Live
                {isLive && (
                  <span className="flex items-center gap-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-[#e5484d] opacity-70" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-[#e5484d]" />
                    </span>
                  </span>
                )}
              </button>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
                className="relative h-10 w-10 overflow-hidden rounded-xl text-[#17181c] hover:bg-[#17181c]/[0.05] dark:text-white dark:hover:bg-white/5"
                onClick={() => {
                  setIsMenuOpen((prev) => {
                    const next = !prev
                    if (!next) setOpenDropdown(null)
                    return next
                  })
                }}
              >
                <div className="relative h-5 w-5">
                  <Menu className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isMenuOpen ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
                  <X className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isMenuOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`} />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="mx-auto max-w-7xl border-t border-[#17181c]/[0.06] bg-[#faf9f7]/95 px-6 py-4 backdrop-blur-xl sm:px-8 dark:border-white/[0.06] dark:bg-[#0a0d14]/95">
            <div className="flex flex-col gap-0.5">{navigationItems.map(renderMobileItem)}</div>

            {/* Mobile bottom accent */}
            <div className="mt-4 border-t border-[#17181c]/[0.06] pt-4 dark:border-white/[0.06]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs tracking-wide text-[#8a8b90] dark:text-stone-500">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[#a16207] opacity-50 dark:bg-[#d4a843]" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-[#a16207] dark:bg-[#d4a843]" />
                  </span>
                  Join us every Sunday
                </span>
                <button onClick={goToLivestream} className="inline-flex items-center gap-1.5 rounded-full bg-[#17181c] px-4 py-2 text-xs font-semibold text-white transition-colors dark:bg-white dark:text-[#17181c]">
                  <Play className="h-3 w-3" />
                  Watch Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
