import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  children?: ReactNode
  size?:  'sm' | 'md' | 'lg',
  asChild?: boolean,
  className?: string
}

export function Text({children, size = 'md', asChild, className}:TextProps) {
  const Comp = asChild ? Slot : 'span';

  return(
    <Comp className={clsx(
      "text-gray-100 font-sans",
      {
        "text-xs": size === 'sm',
        "text-sm": size === 'md',
        "text-md": size === 'lg'
      },
      className
    )}>
      {children}
    </Comp>
  )
}