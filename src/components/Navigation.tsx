// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Church, Play, Heart, Users, Phone } from "lucide-react";
// import logo from "@/assets/logo.png";


// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigationItems = [
//     { label: "Home", href: "#home", icon: Church },
//     { label: "Live Stream", href: "#live", icon: Play },
//     { label: "Sermons", href: "#sermons", icon: Users },
//     { label: "About", href: "#about", icon: Users },
//     // { label: "Give", href: "#give", icon: Heart },
//     { label: "Contact", href: "#contact", icon: Phone },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-soft">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-soft">
//               {/* <Church className="w-6 h-6 text-church-text" /> */}
//               <img src={logo} alt="" />
//             </div>
//             <span className="text-xl font-bold text-church-text">Itedo Yiyanju</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigationItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-church-text-light hover:text-church-text transition-colors duration-300 font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//             {/* <Button variant="hero" size="sm">
//               Give Now
//             </Button> */}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navigationItems.map((item) => {
//                 const IconComponent = item.icon;
//                 return (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     className="flex items-center space-x-3 text-church-text-light hover:text-church-text transition-colors duration-300 py-2"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <IconComponent className="w-5 h-5" />
//                     <span className="font-medium">{item.label}</span>
//                   </a>
//                 );
//               })}
//               <Button variant="hero" size="sm" className="w-full mt-4">
//                 Give Now
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   Menu,
//   X,
//   Church,
//   Play,
//   Heart,
//   Users,
//   Phone,
//   ChevronDown,
//   Video,
//   Mic,
// } from "lucide-react";
// import logo from "@/assets/logo.png";

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLiveDropdownOpen, setIsLiveDropdownOpen] = useState(false);

//   const navigationItems = [
//     { label: "Home", to: "/", icon: Church },
//     { label: "Live Stream", to: "/listen", icon: Play, dropdown: true },
//     { label: "Sermons", to: "/sermons", icon: Users },
//     { label: "About", to: "/about", icon: Users },
//     // { label: "Give", to: "/give", icon: Heart },
//     { label: "Contact", to: "/contact", icon: Phone },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-soft">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-soft">
//               <img src={logo} alt="" />
//             </div>
//             <span className="text-xl font-bold text-church-text">
//               Itedo Yiyanju
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8 relative">
//             {navigationItems.map((item) =>
//               item.dropdown ? (
//                 <div key={item.label} className="relative">
//                   <button
//                     className="flex items-center space-x-1 text-church-text-light hover:text-church-text transition-colors duration-300 font-medium"
//                     onClick={() => setIsLiveDropdownOpen(!isLiveDropdownOpen)}
//                   >
//                     <span>{item.label}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </button>
//                   {isLiveDropdownOpen && (
//                     <div className="absolute top-full mt-2 bg-white border border-border rounded-lg shadow-lg w-40">
//                       <NavLink
//                         to="/listen/video"
//                         className={({ isActive }) =>
//                           `flex items-center px-4 py-2 text-sm ${
//                             isActive
//                               ? "text-church-text font-semibold"
//                               : "text-church-text-light"
//                           } hover:bg-gray-100 hover:text-church-text`
//                         }
//                       >
//                         <Video className="w-4 h-4 mr-2" />
//                         Video
//                       </NavLink>
//                       <NavLink
//                         to="/listen/audio"
//                         className={({ isActive }) =>
//                           `flex items-center px-4 py-2 text-sm ${
//                             isActive
//                               ? "text-church-text font-semibold"
//                               : "text-church-text-light"
//                           } hover:bg-gray-100 hover:text-church-text`
//                         }
//                       >
//                         <Mic className="w-4 h-4 mr-2" />
//                         Audio
//                       </NavLink>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <NavLink
//                   key={item.label}
//                   to={item.to}
//                   className={({ isActive }) =>
//                     `text-church-text-light hover:text-church-text transition-colors duration-300 font-medium ${
//                       isActive ? "text-church-text font-semibold" : ""
//                     }`
//                   }
//                 >
//                   {item.label}
//                 </NavLink>
//               )
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navigationItems.map((item) => {
//                 const IconComponent = item.icon;
//                 if (item.dropdown) {
//                   return (
//                     <div key={item.label}>
//                       <button
//                         onClick={() => setIsLiveDropdownOpen(!isLiveDropdownOpen)}
//                         className="flex items-center space-x-3 text-church-text-light hover:text-church-text transition-colors duration-300 py-2 w-full text-left"
//                       >
//                         <IconComponent className="w-5 h-5" />
//                         <span className="font-medium">{item.label}</span>
//                         <ChevronDown className="w-4 h-4 ml-auto" />
//                       </button>
//                       {isLiveDropdownOpen && (
//                         <div className="ml-8 flex flex-col space-y-2">
//                           <NavLink
//                             to="/listen/video"
//                             className={({ isActive }) =>
//                               `flex items-center text-sm ${
//                                 isActive
//                                   ? "text-church-text font-semibold"
//                                   : "text-church-text-light"
//                               } hover:text-church-text`
//                             }
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Video className="w-4 h-4 mr-2" />
//                             Video
//                           </NavLink>
//                           <NavLink
//                             to="/listen/audio"
//                             className={({ isActive }) =>
//                               `flex items-center text-sm ${
//                                 isActive
//                                   ? "text-church-text font-semibold"
//                                   : "text-church-text-light"
//                               } hover:text-church-text`
//                             }
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Mic className="w-4 h-4 mr-2" />
//                             Audio
//                           </NavLink>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 }
//                 return (
//                   <NavLink
//                     key={item.label}
//                     to={item.to}
//                     className={({ isActive }) =>
//                       `flex items-center space-x-3 text-church-text-light hover:text-church-text transition-colors duration-300 py-2 ${
//                         isActive ? "text-church-text font-semibold" : ""
//                       }`
//                     }
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <IconComponent className="w-5 h-5" />
//                     <span className="font-medium">{item.label}</span>
//                   </NavLink>
//                 );
//               })}
//               {/* <Button variant="hero" size="sm" className="w-full mt-4">
//                 Give Now
//               </Button> */}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Church,
  Users,
  Heart,
  Phone,
  ChevronDown,
  Video,
  Mic,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiveDropdownOpen, setIsLiveDropdownOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/", icon: Church },
    { label: "Live Stream", dropdown: true, icon: Video },
    { label: "Sermons", href: "/sermons", icon: Users },
    { label: "About Us", href: "#about", icon: Users },
    { label: "Give Online", href: "#give", icon: Heart },
    { label: "Contact Us", href: "#contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-soft">
              <img src={logo} alt="Church Logo" />
            </div>
            <span className="text-xl font-bold text-church-text">
              Itedo Yiyanju
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navigationItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    className="flex items-center space-x-1 text-church-text-light hover:text-church-text transition-colors duration-300 font-regular"
                    onClick={() => setIsLiveDropdownOpen(!isLiveDropdownOpen)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isLiveDropdownOpen && (
                    <div className="absolute top-full mt-2 bg-white border border-border rounded-lg shadow-lg w-40">
                      <a
                        href="/listen/video"
                        className="flex items-center px-4 py-2 text-sm text-church-text-light hover:bg-gray-100 hover:text-church-text"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Watch Us Live
                      </a>
                      <a
                        href="/listen/audio"
                        className="flex items-center px-4 py-2 text-sm text-church-text-light hover:bg-gray-100 hover:text-church-text"
                      >
                        <Mic className="w-4 h-4 mr-2" />
                        Listen Live
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-church-text-light hover:text-church-text transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                if (item.dropdown) {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setIsLiveDropdownOpen(!isLiveDropdownOpen)}
                        className="flex items-center space-x-3 text-church-text-light hover:text-church-text transition-colors duration-300 py-2 w-full text-left"
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown className="w-4 h-4 ml-auto" />
                      </button>
                      {isLiveDropdownOpen && (
                        <div className="ml-8 flex flex-col space-y-2">
                          <a
                            href="/listen/video" 
                            className="flex items-center text-sm text-church-text-light hover:text-church-text"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Video className="w-4 h-4 mr-2" />
                            Watch Live
                          </a>
                          <a
                            href="/listen/audio"
                            className="flex items-center text-sm text-church-text-light hover:text-church-text"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Mic className="w-4 h-4 mr-2" />
                            Listen Live
                          </a>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 text-church-text-light hover:text-church-text transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
