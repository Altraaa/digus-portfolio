import React from 'react';
import { motion } from 'framer-motion';
import Dito from '../../assets/HeroUser.jpg';
import HeroImage from '../../assets/HeroImage.png';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen" id="home">
      <div>
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
        <div className="relative z-10 h-screen flex items-center">
          <div className="px-6 md:px-24 w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-7xl font-light mb-8 leading-tight">
                We Create
                <span className="block font-bold bg-gradient-to-r from-accent via-primary to-light bg-clip-text text-transparent">
                  Future Spaces
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-12 max-w-md">
                Menciptakan ruang yang memadukan estetika kontemporer dengan
                teknologi masa depan.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-6"
              >
                <button className="px-8 py-3 bg-highlight rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  Explore Projects
                </button>
                <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>

            {/* Founder Image - Simplified */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-full hidden md:flex md:justify-center"
            >
              <div className="w-96 relative rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                <img
                  src={Dito}
                  alt="Company Founder"
                  className="w-full aspect-[4/5] object-cover opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
                  <h3 className="text-lg font-medium text-white">Dito Bagus Chandrawinata</h3>
                  <p className="text-sm text-gray-300">Founder & Chief Architect</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute z-50 bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>
    </section>
  );
};

export default Hero;