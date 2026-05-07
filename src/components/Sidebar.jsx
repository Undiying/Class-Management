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
    <div className="w-64 glass-panel border-r border-slate-800/50 flex flex-col justify-between h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-neon-green/20 border border-neon-green/50 flex items-center justify-center">
            <div className="w-5 h-5 rounded-md bg-neon-green neon-glow"></div>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">ClassFlow</h1>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200",
                  isActive
                    ? "bg-neon-green/10 text-neon-green font-medium"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
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
        <div className="bg-slate-900/50 rounded-2xl p-4 mb-4 border border-slate-800/50">
          <div className="text-sm font-medium text-slate-200">Sarah Jenkins</div>
          <div className="text-xs text-slate-500 capitalize">{role}</div>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 transition-all duration-200">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
