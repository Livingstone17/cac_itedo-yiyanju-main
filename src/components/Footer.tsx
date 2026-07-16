import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/scrollToSection";

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

  const handleLinkClick = (link: { label: string; href: string; type: string }) => {
    if (link.type === "route") {
      navigate(link.href);
    } else {
      const sectionId = link.href.replace("#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 0);
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  return (
    <footer className="bg-church-blue-700 text-light dark:bg-church-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center space-x-2">
              <div className="bg-church-gold-400 flex h-10 w-10 items-center justify-center rounded-lg">
                <img src={logo} alt="CAC Itedo Yiyanju logo" />
              </div>
              <span className="text-light text-xl font-bold">Itedo Yiyanju</span>
            </div>

            <p className="text-light/80 mb-6 leading-relaxed">A community of believers committed to loving God, loving people, and making a difference in our world.</p>

            <div className="space-y-3">
              <div className="text-light/80 flex items-center space-x-3">
                <MapPin className="text-church-gold-400 h-4 w-4" />
                <span className="text-sm">5, Matanmi Close, Oko-filling, Alagbado, Lagos</span>
              </div>
              <div className="text-light/80 flex items-center space-x-3">
                <Phone className="text-church-gold-400 h-4 w-4" />
                <span className="text-sm">(+234) 8033072838</span>
              </div>
              <div className="text-light/80 flex items-center space-x-3">
                <Mail className="text-church-gold-400 h-4 w-4" />
                <span className="text-sm">cacitedoyiyanju@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-light mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={() => handleLinkClick(link)} className="text-light/80 hover:text-church-gold-400 text-left text-sm transition-colors duration-300">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-light mb-6 text-lg font-semibold">Stay Connected</h3>
            <p className="text-light/80 mb-4 text-sm">Subscribe to our newsletter for updates on events, sermons, and community news.</p>
            <div className="space-y-3">
              <Input type="email" placeholder="Your email address" className="border-light/20 bg-light/10 text-light placeholder:text-light/60" />
              <Button className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300 hover:shadow-glow w-full">Subscribe</Button>
            </div>

            <div className="mt-6">
              <h4 className="text-light mb-3 text-sm font-semibold">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index} href={social.href} className="group bg-light/10 hover:bg-church-gold-400 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300" aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <Icon className="text-light/80 group-hover:text-church-blue-900 h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Service Times Banner */}
        <div className="border-light/20 mt-12 border-t pt-8">
          <div className="bg-church-gold-400/20 rounded-lg p-6 text-center">
            <h3 className="text-light mb-4 text-xl font-bold">Join Us To Fellowship</h3>
            <div className="grid gap-4 text-sm md:grid-cols-3">
              <div>
                <div className="text-light font-semibold">Sunday Morning</div>
                <div className="text-light/80">7:00 AM - Worship Service</div>
              </div>
              <div>
                <div className="text-light font-semibold">Tuesday Evening</div>
                <div className="text-light/80">5:00 PM - Bible Study</div>
              </div>
              <div>
                <div className="text-light font-semibold">Thursday</div>
                <div className="text-light/80">8:00 AM - Prayer Meeting</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-light/20 mt-8 border-t pt-8 text-center">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-light/60 text-sm">&copy; {new Date().getFullYear()} CAC Itedo Yiyanju. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
