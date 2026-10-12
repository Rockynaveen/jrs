import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            'flex h-10 w-full appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 pr-8 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 focus-visible:border-blue-600 disabled:cursor-not-allowed disabled:opacity-50 transition-all cursor-pointer',
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none stroke-[2]" />
      </div>
    )
  }
)
Select.displayName = 'Select'

export { Select }
