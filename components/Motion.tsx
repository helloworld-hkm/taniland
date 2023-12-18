import { useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MotionProps {
  children: ReactNode;
  direction: any; // Update with your actual type
  transition: any; // Update with your actual type
}

export const Motion: React.FC<MotionProps> = ({ children, direction, transition }) => {
  // Motion Bottom to Top
  const ref = useRef(null);
  const isInView = useInView(ref);

  const elementVariants = {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={elementVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};