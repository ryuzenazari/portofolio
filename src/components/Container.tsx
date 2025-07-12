import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
};

const Container = ({ 
  children, 
  className = '', 
  id,
  animate = true 
}: ContainerProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      id={id} 
      className={`py-16 md:py-24 ${className}`}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  );
};

export default Container;