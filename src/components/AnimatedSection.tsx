import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  threshold?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  variants,
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) => {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: 'easeOut',
        delay 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
