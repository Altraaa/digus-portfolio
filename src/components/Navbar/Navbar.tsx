import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import Button from "../ui/Button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-black/80 backdrop-blur-lg"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 lg:px-8 xl:px-24">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Link to="/" className="block">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  DI
                  <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    GUS
                  </span>
                </span>
              </Link>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-highlight"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12"
            >
              {[
                { path: "/", label: "home" },
                { path: "/about", label: "about" },
                { path: "/project", label: "project" },
                { path: "/experience", label: "experience" }
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="relative group cursor-pointer px-1"
                >
                  <span className={`text-sm uppercase tracking-wider ${
                    location.pathname === item.path ? "text-white" : "text-gray-300"
                  } hover:text-white transition-colors`}>
                    {item.label}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1px] bg-highlight origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
              {isHomePage && (
                <a
                href="#contact"
                onClick={handleContactClick}
                className="relative group cursor-pointer px-1"
              >
                <p className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
                  contact
                </p>
                <motion.div
                  className="absolute -bottom-1 left-0 h-[1px] bg-highlight origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex items-center space-x-12"
            >
              <Button variant="outline-white" className="text-sm">
                <a href="https://drive.google.com/file/d/1ZXwBJvOMhd9hmhixDxmHYD8KbKPP3Nim/view" target="_blank" >Download CV {">"}</a>
              </Button>
            </motion.div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
