import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, keyof ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: 'primary' | 'outline' | 'outline-white';
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  fullWidth,
  className = '',
  ...props 
}) => {
  const baseStyle = "py-3 px-8 rounded-full transition-all duration-300";
  const variants = {
    primary: "bg-highlight hover:bg-white hover:text-black",
    outline: "bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border border-white/10 transition-all ease-in-out duration-300",
    "outline-white": "border-white/60 border-2"

  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      type="button"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;