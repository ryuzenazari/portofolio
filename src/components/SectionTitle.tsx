import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  subtitle?: string | ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mb-12 ${alignmentClasses[align]} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-primary">{title.split(' ')[0]}</span>
        {title.split(' ').length > 1 && (
          <span> {title.split(' ').slice(1).join(' ')}</span>
        )}
      </h2>
      
      {subtitle && (
        <p className="text-light-foreground/70 dark:text-dark-foreground/70 text-lg">
          {subtitle}
        </p>
      )}
      
      <div className={`h-1 w-20 bg-secondary mt-4 mb-2 rounded-full ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;