import { CalendarBooking } from "../components/CalendarBooking"
import { SessionManager } from "../components/SessionManager"
import { BentoCard } from "../components/BentoCard"
import { Users, BookOpen, Clock } from "lucide-react"

export function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Admin Dashboard</h1>
        <p className="text-slate-400 mt-2">Manage sessions, classrooms, and teacher accounts.</p>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard className="!p-5 flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center text-neon-green">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-100">142</div>
            <div className="text-sm text-slate-500">Active Students</div>
          </div>
        </BentoCard>
        
        <BentoCard className="!p-5 flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-100">8</div>
            <div className="text-sm text-slate-500">Active Classes</div>
          </div>
        </BentoCard>

        <BentoCard className="!p-5 flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-100">12</div>
            <div className="text-sm text-slate-500">Sessions Today</div>
          </div>
        </BentoCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CalendarBooking />
        <SessionManager />
      </div>
      
      {/* Recent Activity or Quick Links could go here */}
      <BentoCard title="Recent Teacher Activity">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs">SJ</div>
              <div>
                <div className="text-sm font-medium text-slate-200">Sarah Jenkins</div>
                <div className="text-xs text-slate-500">Started 2-hour session</div>
              </div>
            </div>
            <div className="text-xs text-slate-500">10 mins ago</div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs">MR</div>
              <div>
                <div className="text-sm font-medium text-slate-200">Mike Ross</div>
                <div className="text-xs text-slate-500">Marked attendance</div>
              </div>
            </div>
            <div className="text-xs text-slate-500">1 hour ago</div>
          </div>
        </div>
      </BentoCard>
    </div>
  )
}
