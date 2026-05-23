import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/scrollToSection"; // ✅ you'll create this helper below

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { label: "About Us", href: "#about", type: "anchor" },
    { label: "Sermons", href: "/sermons", type: "route" },
    { label: "Give", href: "/give", type: "route" },
    { label: "Contact", href: "#contact", type: "anchor" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/cacitedoyiyanju",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/cacitedoyiyanju",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@cacitedoyiyanju",
      label: "YouTube",
    },
  ];

  const handleLinkClick = (link: any) => {
    // If it's a route link (like /sermons)
    if (link.type === "route") {
      navigate(link.href);
    } else {
      // If it's an anchor link (like #contact)
      const sectionId = link.href.replace("#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 0);
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  return (
    <footer className="bg-church-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-church-gold">
                <img src={logo} alt="CAC Itedo Yiyanju logo" />
              </div>
              <span className="text-xl font-bold">Itedo Yiyanju</span>
            </div>
            <p className="mb-6 leading-relaxed text-white/80">A community of believers committed to loving God, loving people, and making a difference in our world.</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="h-4 w-4 text-church-gold" />
                <span className="text-sm">CAC Itedo Yiyanju Close, Alagbado, Lagos</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-4 w-4 text-church-gold" />
                <span className="text-sm">(+234) 8033072838</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-4 w-4 text-church-gold" />
                <span className="text-sm">cacitedoyiyanju@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={() => handleLinkClick(link)} className="text-left text-sm text-white/80 transition-colors duration-300 hover:text-church-gold">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Stay Connected</h3>
            <p className="mb-4 text-sm text-white/80">Subscribe to our newsletter for updates on events, sermons, and community news.</p>
            <div className="space-y-3">
              <Input type="email" placeholder="Your email address" className="border-white/20 bg-white/10 text-white placeholder:text-white/60" />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index} href={social.href} className="group flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-church-gold" aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4 text-white/80 group-hover:text-church-text" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Service Times Banner */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="rounded-lg bg-church-gold/20 p-6 text-center">
            <h3 className="mb-4 text-xl font-bold">Join Us To Fellowship</h3>
            <div className="grid gap-4 text-sm md:grid-cols-3">
              <div>
                <div className="font-semibold">Sunday Morning</div>
                <div className="text-white/80">7:00 AM - Worship Service</div>
              </div>
              <div>
                <div className="font-semibold">Tuesday Evening</div>
                <div className="text-white/80">5:00 PM - Bible Study</div>
              </div>
              <div>
                <div className="font-semibold">Thursday</div>
                <div className="text-white/80">8:00 AM - Prayer Meeting</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} CAC Itedo Yiyanju. All rights reserved.</p>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-white/60 hover:text-church-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/60 hover:text-church-gold transition-colors"
              >
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
