import { clsx } from 'clsx';

interface Props {
  children?: string
  size?:  'sm' | 'md' | 'lg'
}

export function Text({children, size = 'md'}:Props) {
  return(
    <span className={clsx(
      "text-gray-100 font-sans",
      {
        "text-xs": size === 'sm',
        "text-sm": size === 'md',
        "text-md": size === 'lg'
      }
    )}>
      {children || 'hello world'}
    </span>
  )
}