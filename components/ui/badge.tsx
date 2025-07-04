import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-red-600 text-white hover:bg-red-700",
        secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50",
        premium: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
        success: "border-transparent bg-green-600 text-white hover:bg-green-700",
        info: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        danger: "border-transparent bg-rose-600 text-white hover:bg-rose-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }