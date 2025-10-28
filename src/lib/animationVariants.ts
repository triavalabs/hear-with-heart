import { Variants } from 'framer-motion';

// Detect if user prefers reduced motion
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

// Mobile-optimized animation distances
const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
const yDistance = isMobile ? 20 : 40;
const xDistance = isMobile ? 20 : 40;
const duration = isMobile ? 0.4 : 0.6;

export const fadeInUp: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    y: prefersReducedMotion ? 0 : yDistance 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: prefersReducedMotion ? 0.01 : duration, ease: 'easeOut' }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    x: prefersReducedMotion ? 0 : -xDistance 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: prefersReducedMotion ? 0.01 : duration, ease: 'easeOut' }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    x: prefersReducedMotion ? 0 : xDistance 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: prefersReducedMotion ? 0.01 : duration, ease: 'easeOut' }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    scale: prefersReducedMotion ? 1 : 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: prefersReducedMotion ? 0.01 : 0.5, ease: 'easeOut' }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: prefersReducedMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.1,
      delayChildren: prefersReducedMotion ? 0 : 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    y: prefersReducedMotion ? 0 : 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: prefersReducedMotion ? 0.01 : 0.5, ease: 'easeOut' }
  }
};

export const slideInUp: Variants = {
  hidden: { 
    y: prefersReducedMotion ? 0 : '100%' 
  },
  visible: { 
    y: 0,
    transition: { duration: prefersReducedMotion ? 0.01 : 0.5, ease: 'easeOut' }
  }
};

export const rotate3D: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0,
    rotateY: prefersReducedMotion ? 0 : -15 
  },
  visible: { 
    opacity: 1,
    rotateY: 0,
    transition: { duration: prefersReducedMotion ? 0.01 : 0.8, ease: 'easeOut' }
  }
};
