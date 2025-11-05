import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:+14073667766"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, hsl(174, 55%, 42%), hsl(174, 52%, 50%))',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      whileHover={{
        boxShadow: '0 0 30px hsla(174, 55%, 42%, 0.6)',
      }}
      aria-label="Call Oviedo Hearing Center"
    >
      <Phone className="w-6 h-6 text-white" />
      
      {/* Pulse animation ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  );
};

export default FloatingCallButton;
