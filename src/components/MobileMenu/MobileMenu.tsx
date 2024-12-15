import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const linkVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    if (!isHomePage) {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/project", label: "project" },
    { path: "/experience", label: "experience" },
  ];

  const menuSosial = [
    { link: "https://linked.com/Chandrawinata", label: "LinkedIn" },
    { link: "https://instagram.com/ditochandra_", label: "Instagram" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed md:hidden inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-full bg-black/95 backdrop-blur-lg z-50 p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="mb-12">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DI
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  GUS
                </span>
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={linkVariants}
                  custom={i}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className="block text-lg text-gray-400 hover:text-white transition-colors capitalize"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              {isHomePage && (
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="relative group cursor-pointer px-1"
                >
                  <p className="text-sm mt-2 uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
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
            </nav>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <Button variant="outline" className="w-full">
                Download CV
              </Button>
              <div className="flex justify-center gap-6 mt-6">
                {menuSosial.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
