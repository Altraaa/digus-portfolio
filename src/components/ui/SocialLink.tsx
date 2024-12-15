import { motion } from "framer-motion";

interface SocialLinkProps {
  icon: React.ComponentType;
  title: string;
  value: string;
  link: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon: Icon,
  title,
  value,
  link,
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex items-center p-6 bg-white/5 border border-white/10 rounded-lg 
        hover:bg-white/10 transition-colors group"
    >
      <div
        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center 
        text-highlight group-hover:text-white transition-colors"
      >
        <Icon />
      </div>
      <div className="ml-6">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <p className="text-white mt-1">{value}</p>
      </div>
      <svg
        className="w-5 h-5 text-gray-400 ml-auto transform group-hover:translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </motion.a>
  );
};

export default SocialLink;
