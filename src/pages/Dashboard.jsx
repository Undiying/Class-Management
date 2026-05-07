import { CalendarBooking } from "../components/CalendarBooking"
import { SessionManager } from "../components/SessionManager"
import { BentoCard } from "../components/BentoCard"
import { Users, BookOpen, Clock } from "lucide-react"

export function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-surface-900">Admin Dashboard</h1>
        <p className="text-surface-300 mt-2">Manage sessions, classrooms, and teacher accounts.</p>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard className="!p-5 flex-row items-center gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform duration-300">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-surface-900">142</div>
            <div className="text-sm text-surface-300">Active Students</div>
          </div>
        </BentoCard>
        
        <BentoCard className="!p-5 flex-row items-center gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-surface-900">8</div>
            <div className="text-sm text-surface-300">Active Classes</div>
          </div>
        </BentoCard>

        <BentoCard className="!p-5 flex-row items-center gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 flex items-center justify-center text-brand-violet group-hover:scale-110 transition-transform duration-300">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-surface-900">12</div>
            <div className="text-sm text-surface-300">Sessions Today</div>
          </div>
        </BentoCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CalendarBooking />
        <SessionManager />
      </div>
      
      {/* Recent Activity */}
      <BentoCard title="Recent Activity">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-100/50 hover:bg-surface-100 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-violet/10 text-brand-violet flex items-center justify-center text-xs font-bold">SJ</div>
              <div>
                <div className="text-sm font-semibold text-surface-900">Sarah Jenkins</div>
                <div className="text-xs text-surface-300">Started 2-hour session</div>
              </div>
            </div>
            <div className="text-xs text-surface-300">10 mins ago</div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-100/50 hover:bg-surface-100 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-xs font-bold">MR</div>
              <div>
                <div className="text-sm font-semibold text-surface-900">Mike Ross</div>
                <div className="text-xs text-surface-300">Marked attendance</div>
              </div>
            </div>
            <div className="text-xs text-surface-300">1 hour ago</div>
          </div>
        </div>
      </BentoCard>
    </div>
  )
}
