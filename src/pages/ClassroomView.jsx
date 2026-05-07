import { SeatingMap } from "../components/SeatingMap"
import { BentoCard } from "../components/BentoCard"
import { Play, Square } from "lucide-react"

export function ClassroomView() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-surface-900">Room 104</h1>
          <p className="text-surface-300 mt-2">Current Session: Intro to Robotics</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-bold rounded-2xl hover:shadow-premium hover:scale-105 active:scale-95 transition-all duration-300">
            <Play className="w-4 h-4 fill-current" />
            Start Session
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-surface-200 text-surface-900 font-semibold rounded-2xl hover:bg-surface-300 transition-all duration-300">
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
              <div className="flex justify-between items-center p-4 rounded-2xl bg-surface-100/50">
                <span className="text-surface-300 font-medium">Total Enrolled</span>
                <span className="text-xl font-bold text-surface-900">24</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl bg-brand-green/10 border border-brand-green/20">
                <span className="text-brand-green font-semibold">Present</span>
                <span className="text-xl font-bold text-brand-green">18</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl bg-rose-50 border border-rose-100">
                <span className="text-rose-500 font-semibold">Absent</span>
                <span className="text-xl font-bold text-rose-500">6</span>
              </div>
            </div>
            
            <button className="w-full mt-6 py-4 rounded-2xl bg-surface-900 text-white font-bold hover:shadow-premium transition-all duration-300">
              Submit Final Attendance
            </button>
          </BentoCard>

          <BentoCard title="Session Notes">
            <textarea 
              className="w-full h-32 bg-surface-50/50 border border-surface-200 rounded-2xl p-4 text-sm text-surface-900 placeholder:text-surface-200 focus:outline-none focus:border-brand-violet focus:ring-4 focus:ring-brand-violet/5 resize-none transition-all duration-300"
              placeholder="Add any notes about today's session..."
            ></textarea>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
