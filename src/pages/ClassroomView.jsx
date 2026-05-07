import { SeatingMap } from "../components/SeatingMap"
import { BentoCard } from "../components/BentoCard"
import { Play, Square } from "lucide-react"

export function ClassroomView() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Room 104</h1>
          <p className="text-slate-400 mt-2">Current Session: Intro to Robotics</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-neon-green text-slate-950 font-bold rounded-xl hover:bg-neon-hover transition-colors shadow-[0_0_15px_rgba(190,243,62,0.3)]">
            <Play className="w-4 h-4 fill-current" />
            Start Session
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 font-medium rounded-xl hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
            <Square className="w-4 h-4 fill-current" />
            End Session
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Seating Map takes up 2/3 */}
        <SeatingMap />
        
        {/* Sidebar Info takes up 1/3 */}
        <div className="space-y-6">
          <BentoCard title="Attendance Summary">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-900/50">
                <span className="text-slate-400">Total Enrolled</span>
                <span className="text-xl font-bold text-slate-200">24</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-neon-green/10 border border-neon-green/20">
                <span className="text-neon-green">Present</span>
                <span className="text-xl font-bold text-neon-green text-glow">18</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <span className="text-rose-400">Absent</span>
                <span className="text-xl font-bold text-rose-400">6</span>
              </div>
            </div>
            
            <button className="w-full mt-6 py-3 rounded-xl bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition-colors border border-slate-700">
              Submit Final Attendance
            </button>
          </BentoCard>

          <BentoCard title="Session Notes">
            <textarea 
              className="w-full h-32 bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 resize-none"
              placeholder="Add any notes about today's session..."
            ></textarea>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
