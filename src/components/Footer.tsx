
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/scrollToSection"; // ✅ you'll create this helper below

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { label: "About Us", href: "#about", type: "anchor" },
    { label: "Sermons", href: "/sermons", type: "route" },
    { label: "Events", href: "#events", type: "anchor" },
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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-church-gold rounded-lg flex items-center justify-center">
                <img src={logo} alt="CAC Itedo Yiyanju logo" />
              </div>
              <span className="text-xl font-bold">Itedo Yiyanju</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              A community of believers committed to loving God, loving people,
              and making a difference in our world.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-4 h-4 text-church-gold" />
                <span className="text-sm">
                  CAC Itedo Yiyanju Close, Alagbado, Lagos
                </span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4 text-church-gold" />
                <span className="text-sm">(+234) 8033072838</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-4 h-4 text-church-gold" />
                <span className="text-sm">cacitedoyiyanju@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-white/80 hover:text-church-gold transition-colors duration-300 text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <p className="text-white/80 text-sm mb-4">
              Subscribe to our newsletter for updates on events, sermons, and
              community news.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-church-gold transition-colors duration-300 group"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-4 h-4 text-white/80 group-hover:text-church-text" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Service Times Banner */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="bg-church-gold/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Join Us To Fellowship</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
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
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} CAC Itedo Yiyanju. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-sm">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
