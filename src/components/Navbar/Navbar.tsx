import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-black/80 backdrop-blur-lg" : "py-6 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 z-50 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DI
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                GUS
              </span>
            </span>
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
            className="hidden md:flex items-center space-x-12"
          >
            {["home", "about", "projects", "experience"].map(
              (item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="relative group cursor-pointer px-1"
                >
                  <span className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
                    {item}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1px] bg-highlight origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              )
            )}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="relative group cursor-pointer px-1"
            >
              <p className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
                contact
              </p>
            </Link>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center space-x-2 px-8 py-2.5 rounded-full bg-highlight/10 border border-highlight/20 hover:bg-highlight/20 transition-colors"
          >
            <span className="text-sm text-highlight">Download CV</span>
            <svg
              className="w-4 h-4 text-highlight"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 