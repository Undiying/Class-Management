import { cn } from "../lib/utils"

export function BentoCard({ className, children, title, ...props }) {
  return (
    <div
      className={cn(
        "glass-card rounded-3xl p-6 flex flex-col",
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="text-xl font-bold mb-4 text-slate-100">{title}</h3>
      )}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  )
}
