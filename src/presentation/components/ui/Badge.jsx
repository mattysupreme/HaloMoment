import React from 'react';
import { cn } from '../../../shared/utils/cn';

export const Badge = ({ className, children, ...props }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
