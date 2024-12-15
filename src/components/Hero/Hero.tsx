import React from 'react';
import { motion } from 'framer-motion';
import Dito from '../../assets/HeroUserDito.png';
import HeroImage from '../../assets/HeroImage.png';

const Hero: React.FC = () => {
  return (
    <section className="h-screen relative overflow-hidden" id="home">
      {/* Background dengan efek parallax */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HeroImage}
          alt="background"
          className="w-full h-full object-cover filter brightness-[0.4]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center justify-center container mx-auto px-6 lg:px-8 xl:px-24">
        <div className="w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-8 relative z-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              We Create
              <span className="block font-bold bg-gradient-to-r from-accent via-primary to-light bg-clip-text text-transparent">
                Future Spaces
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-md">
              Menciptakan ruang yang memadukan estetika kontemporer dengan
              teknologi masa depan.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <button className="px-6 sm:px-8 py-3 bg-highlight rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Explore Projects
              </button>
              <button className="px-6 sm:px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* Founder Image - Updated */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute right-0 bottom-0 xl:w-[68%] md:w-[65%] h-[100vh] hidden md:block"
          >
            <div>
              <img
                src={Dito}
                alt="Company Founder"
                className="h-full flex justify-end absolute xl:w-[80%] md:w-[65%] right-0 bottom-0 object-cover object-top opacity-85"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;