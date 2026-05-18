import React from 'react';
import { cn } from '../../../shared/utils/cn';

const variants = {
  primary: 'bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-hover)] text-white',
  secondary: 'bg-[var(--color-accent-secondary)] hover:bg-[var(--color-accent-secondary-hover)] text-white',
  outline: 'border-2 border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)] hover:text-white',
  ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-4 text-lg font-semibold'
};

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent-primary)] dark:focus:ring-offset-gray-900',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
