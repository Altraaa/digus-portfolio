import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import UniversityHero from "../../assets/UniversityHero.jpg";
import picture1 from "../../assets/Nirmana Black and White.jpg"
import picture2 from "../../assets/Nirmana Black and White 2.jpg"
import NirmanaColor from "../../assets/Nirmana Color.jpg"
import ColorTheory from "../../assets/Color Theory.jpg"
import NirmanaArchipelago from "../../assets/Nirmana Achipelago.jpg"
import NirmanaTransformation from "../../assets/Nirmana Transformation.jpg"
import Navbar from "../Navbar/Navbar";

interface ProjectDescription {
  paragraphs: string[];
  designPrinciple?: string;
  toolsUsed: string[];
}


interface ProjectData {
  id: number;
  title: string;
  category: string;
  images: string;
  projects: {
    project1: {
      title: string;
      description: {
        picture1: ProjectDescription;
        picture2: ProjectDescription;
      };
      image: string[];
    };
    project2: {
      title: string;
      description: ProjectDescription;
      images: string;
    };
    project3: {
      title: string;
      description: ProjectDescription;
      image: string;
    };
    project4: {
      title: string;
      description: ProjectDescription;
      images: string;
    };
    project5: {
      title: string;
      description: ProjectDescription;
      image: string;
    };
  };
  stats: {
    campus: string;
    name: string;
    role: string;
    lecturer: string;
  };
}

const projectData: ProjectData = {
  id: 1,
  title: "Basic Design Principles",
  category: "University Project",
  images: UniversityHero,
  projects: {
    project1: {
      title: "Project 1: 2 Dimensional (Line or) Dots",
      description: {
        picture1: {
          paragraphs: [
            "This project was completed on October 14th, 2024, highlighting the art of freehand drawing. Created entirely by hand, it emphasizes the expressive potential of lines and dots as tools to convey emotions and moods in a design.",
            "The concept focuses on the relationship between the artist and the medium, where every line and dot reflects intentionality and emotion. This approach gives the design depth and meaning, blending technical precision with artistic expression.",
          ],
          designPrinciple: "Balance",
          toolsUsed: [
            "Concorde paper",
            "pencil",
            "paint poster",
            "drawing pen",
          ],
        },
        picture2: {
          paragraphs: [
            "This project, completed on October 14th, 2024, demonstrates the use of freehand techniques to create a dynamic and visually striking nirmana composition. The design utilizes bold black and white contrasts, creating an optical illusion that draws the viewer’s attention toward the center point.",
            "Radiating lines are carefully arranged to produce a sense of movement and rhythm, while the repetition of shapes enhances balance and harmony. The play between positive (black) and negative (white) space adds depth, creating a powerful visual impact that evokes energy and focus.",
            "The project highlights the potential of lines as a tool for expression, transforming simple elements into a captivating piece of art. It reflects precision, creativity, and the ability to convey emotions through geometric abstraction.",
          ],
          designPrinciple: "Emphasize",
          toolsUsed: [
            "Concorde paper",
            "marker",
            "pencil",
            "drawing pen",
            "paint poster",
          ],
        },
      },
      image: [picture1, picture2],
    },
    project2: {
      title: "Project 2: 2 Dimensional Color",
      description: {
        paragraphs: [
          "This project explores nirmana warna (color composition) using a grid-based arrangement of squares and circles. The artwork showcases a harmonious balance between warm and cool colors, predominantly featuring shades of red, blue, and pink.",
          "Each square contains a smaller circular form, creating a rhythmic repetition that guides the viewer’s eye across the composition. The deliberate use of contrasting colors—such as deep reds against vibrant blues—adds depth, while the variation in tones and saturation builds visual interest and energy.",
          "The gradual transitions between colors and the interplay of light and dark hues evoke a sense of movement, as though the colors are pulsating within the grid. This approach highlights the expressive potential of color theory and how relationships between hues can influence mood, harmony, and visual dynamics.",
        ],
        designPrinciple: "Rhythm and Harmony",
        toolsUsed: ["Concorde paper", "Poster paint", "Fine brush"],
      },
      images: NirmanaColor,
    },
    project3: {
      title: "Project 3: Color Theory",
      description: {
        paragraphs: [
          "This project marks my first exploration into the fundamentals of color theory, providing essential insights into the process of color mixing and harmony. The objective was to blend various pigments to achieve accurate representations of colors found on the standard color wheel. Through this process, I gained a deeper understanding of hue, value, and saturation, as well as the relationships between warm and cool tones.",
        ],
        toolsUsed: ["Concorde paper", "pencil", "paint poster", "drawing pen"],
      },
      image: ColorTheory,
    },
    project4: {
      title: "Project 4: Nirmana Archipelago",
      description: {
        paragraphs: [
          "In this project, I recreated one of the traditional carving designs from the Indonesian archipelago, specifically the 'Pa'kapu' Baka' motif, a typical Toraja carving. The purpose of this project is to promote a deeper appreciation and understanding of Indonesia's rich cultural heritage. By reconstructing this design, I aim to highlight the importance of preserving and celebrating our traditional art forms.",
        ],
        toolsUsed: ["Concorde paper", "pencil", "poster paint"],
      },
      images: NirmanaArchipelago,
    },
    project5: {
      title: "Project 5: Nirmana Transformation",
      description: {
        paragraphs: [
          "This image showcases the combination of two traditional Toraja carving designs to create a new, modern design. The first design, Pa’ Kapu’ Baka’, features bold, symmetrical patterns, while the second design, Toraja Wood Carving, highlights elongated shapes with intricate details. By merging these two elements, a new composition, Design 2, is created, which is visually rich and suitable for applications like Wall Panels or Partitions. The project highlights the beauty of Indonesian cultural heritage while introducing a fresh interpretation for contemporary use.",
        ],
        toolsUsed: ["Concorde paper", "pencil", "paint poster"],
      },
      image: NirmanaTransformation,
    },
  },
  stats: {
    campus: "President University",
    name: "Dito Bagus Chandrawinata",
    role: "College Student",
    lecturer: "Mrs. Afina Nisa Aulia, S.Ds, M.Ds",
  },
};

const ProjectDescriptionSection: React.FC<{ 
  description: ProjectDescription;
  pictureNumber?: number;
}> = ({ description, pictureNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {pictureNumber && (
        <span className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4 block font-light">
          Picture {pictureNumber}
        </span>
      )}
      
      <div className="space-y-6">
        {description.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-300 leading-relaxed text-lg font-light tracking-wide">
            {paragraph}
          </p>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
        {description.designPrinciple && (
          <div>
            <span className="text-blue-400 text-sm tracking-[0.2em] block mb-2 font-light">
              DESIGN PRINCIPLE
            </span>
            <span className="text-white text-lg font-extralight tracking-wider">
              {description.designPrinciple}
            </span>
          </div>
        )}

        <div>
          <span className="text-blue-400 text-sm tracking-[0.2em] block mb-2 font-light">
            TOOLS USED
          </span>
          <span className="text-white text-lg font-extralight tracking-wider">
            {description.toolsUsed.join(" · ")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const UniversityProject: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const projectAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageAnimation = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (  
    <div className="relative min-h-screen bg-gradient-to-b from-black via-background-darker to-black">
    <Navbar />
      {/* Hero Section */}
      <motion.div 
        className="relative h-[70vh] overflow-hidden"
        style={{ opacity, scale }}
      >
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          src={projectData.images}
          alt="Project Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 mb-4"
            >
              {projectData.category}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-7xl font-extralight text-white mb-6 tracking-wider"
            >
              {projectData.title}
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-20 py-14">
        {/* Project Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={projectAnimation}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-b border-purple-900/30 py-8 backdrop-blur-sm bg-black/10"
        >
          <div>
            <h3 className="text-blue-400 text-sm tracking-[0.2em] mb-2 font-light">UNIVERSITY</h3>
            <p className="text-white font-extralight tracking-wider">{projectData.stats.campus}</p>
          </div>
          <div>
            <h3 className="text-blue-400 text-sm tracking-[0.2em] mb-2 font-light">NAME</h3>
            <p className="text-white font-extralight tracking-wider">{projectData.stats.name}</p>
          </div>
          <div>
            <h3 className="text-blue-400 text-sm tracking-[0.2em] mb-2 font-light">ROLE</h3>
            <p className="text-white font-extralight tracking-wider">{projectData.stats.role}</p>
          </div>
          <div>
            <h3 className="text-blue-400 text-sm tracking-[0.2em] mb-2 font-light">LECTURER</h3>
            <p className="text-white font-extralight tracking-wider">{projectData.stats.lecturer}</p>
          </div>
        </motion.div>

        {/* Project 1 - Split Layout with Two Pictures */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="mb-32"
        >
          <motion.h2 
            variants={projectAnimation}
            className="text-6xl font-extralight text-white mb-16 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            {projectData.projects.project1.title}
          </motion.h2>

          {/* Picture 1 */}
          <motion.div 
            variants={projectAnimation}
            className="grid md:grid-cols-2 gap-16 mb-24"
          >
            <motion.div
              variants={imageAnimation}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/5] overflow-hidden rounded-lg relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={projectData.projects.project1.image[0]}
                alt="Project 1 - Picture 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
            <div className="flex items-center">
              <ProjectDescriptionSection
                description={projectData.projects.project1.description.picture1}
                pictureNumber={1}
              />
            </div>
          </motion.div>

          {/* Picture 2 */}
          <div className="grid md:grid-cols-2 gap-16">
            <div className="order-2 md:order-1 flex items-center">
              <ProjectDescriptionSection
                description={projectData.projects.project1.description.picture2}
                pictureNumber={2}
              />
            </div>
            <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden rounded-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={projectData.projects.project1.image[1]}
                alt="Project 1 - Picture 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Centered Layout */}
        <div className="max-w-5xl mx-auto mb-32">
          <h2 className="text-6xl font-extralight text-white mb-16 text-center tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {projectData.projects.project2.title}
          </h2>
          <div className="flex justify-center items-center">
            <div className="aspect-[16/9] overflow-hidden rounded-lg w-96 h-[420px] mb-16 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={projectData.projects.project2.images}
                alt="Project 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <ProjectDescriptionSection
            description={projectData.projects.project2.description}
          />
        </div>

        {/* Project 3 - Full Width Layout */}
        <div className="mb-32">
          <h2 className="text-6xl font-extralight text-white mb-16 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {projectData.projects.project3.title}
          </h2>

          <div className="grid md:grid-cols-2">
            <div className="aspect-[3/4] overflow-hidden rounded-lg w-80 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={projectData.projects.project3.image}
                alt="Project 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center">
              <ProjectDescriptionSection
                description={projectData.projects.project3.description}
              />
            </div>
          </div>
        </div>

        {/* Project 4 - Offset Layout */}
        <div className="mb-32 relative">
          <h2 className="text-6xl font-extralight text-white mb-16 text-right tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {projectData.projects.project4.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="md:pt-32">
              <ProjectDescriptionSection
                description={projectData.projects.project4.description}
              />
            </div>
            <div className="overflow-hidden rounded-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={projectData.projects.project4.images}
                alt="Project 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Project 5 - Full Bleed Layout */}
        <div className="-mx-4 md:-mx-8 lg:-mx-20 mb-32">
          <div className="px-4 md:px-8 lg:px-20 mb-16">
            <h2 className="text-6xl font-extralight text-white mb-16 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {projectData.projects.project5.title}
            </h2>
            <ProjectDescriptionSection
              description={projectData.projects.project5.description}
            />
          </div>

          <div className="flex justify-center items-center">
            <div className="aspect-[16/9] overflow-hidden rounded-lg w-[480px] h-[480px] mb-16 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={projectData.projects.project5.image}
                alt="Project 5"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Next Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-32"
        >
          <Link 
            to="/project" 
            className="group inline-flex flex-col items-center gap-4 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <span className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-2 block transition-transform duration-300 group-hover:-translate-y-full">
                Previous Project
              </span>
              <span className="text-purple-400 text-sm tracking-[0.3em] uppercase absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                Previous Project
              </span>
            </div>
            <motion.div
              className="w-12 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 mt-2 group-hover:scale-x-150 transition-transform duration-300"
            />
          </Link>
        </motion.div>

        <motion.div
          className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </div>
  );
};

export default UniversityProject;
