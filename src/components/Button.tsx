import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
};

const Button = ({
  children,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  external = false,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-dark-background';
  
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-600 active:bg-primary-700 text-white focus:ring-primary-500/50',
    secondary: 'bg-secondary hover:bg-secondary-600 active:bg-secondary-700 text-white focus:ring-secondary-500/50',
    outline: 'border border-light-border dark:border-dark-border bg-transparent hover:bg-light-muted dark:hover:bg-dark-muted text-light-foreground dark:text-dark-foreground focus:ring-primary-500/50',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 gap-1.5',
    md: 'text-base px-4 py-2 gap-2',
    lg: 'text-lg px-6 py-3 gap-2.5',
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;
  
  const buttonMotion = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          className={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
          {...buttonMotion}
        >
          {children}
        </motion.a>
      );
    }
    
    return (
      <Link href={href} passHref>
        <motion.span
          className={buttonStyles}
          {...buttonMotion}
        >
          {children}
        </motion.span>
      </Link>
    );
  }
  
  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...buttonMotion}
    >
      {children}
    </motion.button>
  );
};

export default Button;