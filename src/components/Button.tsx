import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
  asChild?: boolean
}

export function Button({children, asChild, className, ...rest}:ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp 
      {...rest}
      className={clsx(
        "py-3 bg-cyan-500 hover:bg-cyan-300 w-full max-w-[400px] rounded text-black text-sm font-semibold transition-colors focus:ring-2 ring-white",
        className
      )}>
      {children}
    </Comp>
  )
}