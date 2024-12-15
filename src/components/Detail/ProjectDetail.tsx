import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    name: "Graphics Design",
    description: "lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    background:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    route: "/project/graphics"
  },
  {
    id: 2,
    name: "University Projects",
    description: "lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    background:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    route: "/university"
  },
  {
    id: 3,
    name: "Residential Projects",
    description: "lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    background:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    route: "/project/residential"
  },
]; 

const ProjectDetail: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Page transition animation
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  const handleCardClick = (card: typeof cards[0]) => {
    if (activeCard === card.id) {
      setActiveCard(null);
    } else {
      setActiveCard(card.id);
      setSelectedCard(card);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="relative w-full bg-black"
    >
      {/* Background Image dengan fade transition */}
      <AnimatePresence mode="wait">
        <motion.img
          key={selectedCard.id}
          src={selectedCard.background}
          alt={selectedCard.name}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover blur-sm brightness-[0.3]"
        />
      </AnimatePresence>

      {/* Overlay dengan fade */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
      />

      {/* Content dengan stagger children */}
      <motion.div 
        variants={pageVariants}
        className="relative z-10"
      >
        <Navbar />
        
        <div className="relative z-10 text-white px-10 h-full flex flex-col justify-between pt-28">
          {/* Title Section */}
          <div className="pl-32 pb-8">
            <h1 className="text-6xl font-bold mb-4">My Projects</h1>
            <p className="text-gray-300 max-w-md leading-relaxed">
              This list includes Iceland's active and extinct volcanoes, which
              have erupted since the human settlement of Iceland.
            </p>
          </div>

          {/* Cards Section */}
          <div className="relative mt-auto">
            <div className="flex gap-8 overflow-hidden h-[300px] mb-6 justify-end no-scrollbar">
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  whileHover={{ scale: 1.02 }}
                  className={`relative w-[320px] rounded-xl overflow-hidden cursor-pointer flex-shrink-0 group ${
                    selectedCard.id === card.id ? "" : ""
                  }`}
                >
                  {/* Card Image */}
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                    {/* Content Container */}
                    <div className="absolute inset-x-0 bottom-0">
                      <div className={`p-6 transition-transform duration-300 ${
                        activeCard === card.id ? 'translate-y-0' : 'translate-y-12 group-hover:translate-y-0'
                      }`}>
                        {/* Title Section */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-highlight rounded-full" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-white mb-2">
                              {card.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {card.description}
                            </p>
                          </div>
                        </div>

                        {/* See Project Button */}
                        <div className={`mt-4 transition-all duration-300 ${
                          activeCard === card.id 
                            ? 'opacity-100' 
                            : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          <button className="bg-highlight/20 hover:bg-highlight/30 text-highlight px-4 py-2 rounded-lg text-sm transition-colors duration-300">
                            <Link to={card.route}>See Project</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="flex justify-between items-center pb-20 pt-10 pl-32">
            <div>
              <h2 className="text-4xl font-bold">5+</h2>
              <p className="text-gray-300 text-sm">Task</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">2</h2>
              <p className="text-gray-300 text-sm">Projects</p>
            </div>
            <div className="cursor-pointer hover:underline">
              <p className="text-gray-300 uppercase tracking-widest">View All</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
  