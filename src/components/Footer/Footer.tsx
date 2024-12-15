import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-20 overflow-hidden bg-gradient-to-b from-black/50 to-black/90">
      <div className="container mx-auto px-6 lg:px-8 xl:px-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DI
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  GUS
                </span>
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-highlight/50"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Creating innovative spaces that blend contemporary aesthetics with
              future technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400 group">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-highlight transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm group-hover:text-white transition-colors">
                  Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 group">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-highlight transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm group-hover:text-white transition-colors">
                  contact@digus.com
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 group">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-highlight transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm group-hover:text-white transition-colors">
                  +62 123 456 789
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z",
                  name: "LinkedIn",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="https://www.linkedin.com/in/chandrawinata"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center group transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-highlight transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={social.icon}
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <span className="text-xs text-gray-500">
              © 2024 DIGUS. All rights reserved.
            </span>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
