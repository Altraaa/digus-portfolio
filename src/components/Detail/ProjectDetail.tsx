import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import UniversityHero from "../../assets/UniversityHero.jpg";
import { Link } from "react-router-dom";
import Graphic from "../../assets/Graphic.png";
import Render from "../../assets/Render.png";
import Resident from "../../assets/Resident.png";
import School from "../../assets/School.png";

const cards = [
  {
    id: 1,
    name: "Rendering Projects",
    description:
      "High-quality interior and exterior visualizations that bring designs to life with precision, detail, and stunning realism.",
    image: Render,
    background: Render,
    route: "/project/rendering",
  },
  {
    id: 2,
    name: "Residential Projects",
    description:
      "Designing dream homes with a perfect balance of comfort, elegance, and modern architectural touches for everyday living.",
    image: Resident,
    background: Resident,
    route: "/project/school",
  },
  {
    id: 3,
    name: "School Projects",
    description:
      "Projects completed during my time at SMK Negeri 1 Denpasar, focusing on Building Modeling and Information Design, showcasing foundational skills in construction and design visualization.",
    image: School,
    background: School,
    route: "/project/school",
  },
  {
    id: 4,
    name: "University Projects",
    description:
      "A showcase of my interior design projects from President University, reflecting creativity, technical skills, and innovative solutions developed throughout my academic journey.",
    image: UniversityHero,
    background: UniversityHero,
    route: "/university",
  },
  {
    id: 5,
    name: "Graphics Design",
    description:
      "A curated showcase of visually captivating designs that blend creativity and functionality to tell compelling stories.",
    image: Graphic,
    background: Graphic,
    route: "/project/graphics",
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
      className="relative w-full min-h-screen bg-black"
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
      <motion.div variants={pageVariants} className="relative z-10">
        <Navbar />
        
        <div className="relative z-10 text-white px-4 md:px-10 h-full flex flex-col justify-between pt-20 md:pt-28">
          {/* Title Section */}
          <div className="xl:pl-32 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">My Projects</h1>
            <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed">
              This list includes Iceland's active and extinct volcanoes, which
              have erupted since the human settlement of Iceland.
            </p>
          </div>

          {/* Cards Section - Slideshow untuk semua ukuran layar */}
          <div className="relative mt-auto">
            <div className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-6 px-4 md:px-32 no-scrollbar">
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  whileHover={{ scale: 1.02 }}
                  className={`relative w-[280px] md:w-[320px] flex-shrink-0 snap-center rounded-xl overflow-hidden cursor-pointer group ${
                    selectedCard.id === card.id ? "" : ""
                  }`}
                >
                  {/* Card Image */}
                  <div className="relative h-[250px] md:h-[300px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.7]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                    {/* Content Container */}
                    <div className="absolute inset-x-0 bottom-0">
                      <div className={`p-4 md:p-6 transition-transform duration-300 ${
                        activeCard === card.id ? 'translate-y-0' : 'translate-y-12 group-hover:translate-y-0'
                      }`}>
                        {/* Title Section */}
                        <div className="space-y-2 md:space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-highlight rounded-full" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 md:mb-2">
                              {card.name}
                            </h3>
                            <p className="text-gray-200 text-xs md:text-sm">
                              {card.description}
                            </p>
                          </div>
                        </div>

                        {/* See Project Button */}
                        <div className={`mt-3 md:mt-4 transition-all duration-300 ${
                          activeCard === card.id 
                            ? 'opacity-100' 
                            : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          <button className="bg-highlight/20 hover:bg-highlight/30 text-highlight px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm transition-colors duration-300">
                            <Link to={card.route}>See Project</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Indicator untuk semua ukuran layar */}
            <div className="flex justify-center gap-2 mt-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    selectedCard.id === card.id 
                      ? 'bg-highlight' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="flex justify-between items-center pb-10 md:pb-20 pt-8 md:pt-10 px-4 md:pl-32">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">5+</h2>
              <p className="text-gray-300 text-xs md:text-sm">Task</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">2</h2>
              <p className="text-gray-300 text-xs md:text-sm">Projects</p>
            </div>
            <div className="cursor-pointer hover:underline">
              <p className="text-gray-300 uppercase tracking-widest text-xs md:text-sm">View All</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
