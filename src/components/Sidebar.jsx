import { NavLink } from "react-router-dom"
import { Home, Users, Calendar, LogOut, Settings } from "lucide-react"
import { cn } from "../lib/utils"

export function Sidebar({ role = "teacher" }) {
  const isAdmin = role === "admin"

  const navItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Classroom", href: "/classroom", icon: Users },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    ...(isAdmin ? [{ name: "Settings", href: "/settings", icon: Settings }] : []),
  ]

  return (
    <div className="w-64 glass-panel border-r border-sky-100 flex flex-col justify-between h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10 group cursor-pointer">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-4 h-4 rounded-full bg-white shadow-inner"></div>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-surface-900">ClassFlow</h1>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300",
                  isActive
                    ? "bg-brand-violet/10 text-brand-violet font-semibold shadow-soft"
                    : "text-surface-300 hover:text-brand-violet hover:bg-brand-violet/5"
                )
              }
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-6">
        <div className="bg-sky-100/50 rounded-2xl p-4 mb-4 border border-sky-200/50">
          <div className="text-sm font-semibold text-surface-900">Sarah Jenkins</div>
          <div className="text-xs text-surface-300 capitalize">{role}</div>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-surface-300 hover:text-red-600 hover:bg-red-50 transition-all duration-300">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
