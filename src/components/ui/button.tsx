import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-[#0055d4] text-white shadow-sm hover:bg-[#0046b0] focus-visible:ring-blue-500',
        brand:
          'bg-[#031c3f] text-white shadow-sm hover:bg-[#0b2959] focus-visible:ring-slate-800',
        red:
          'bg-[#dc2626] text-white shadow-sm hover:bg-[#b91c1c] focus-visible:ring-red-500',
        outline:
          'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 focus-visible:ring-slate-400',
        ghost:
          'hover:bg-slate-100 text-slate-700',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-11 rounded-md px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
