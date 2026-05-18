import React from 'react';
import { cn } from '../../../shared/utils/cn';

export const Card = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] shadow-sm transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
