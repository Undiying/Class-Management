import { useState } from "react"
import { BentoCard } from "./BentoCard"
import { format, addDays, startOfWeek } from "date-fns"

export function CalendarBooking() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 })
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i))

  return (
    <BentoCard title="Free Sessions Calendar" className="col-span-1">
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {weekDays.map((date, i) => {
          const isSelected = date.toDateString() === selectedDate.toDateString()
          return (
            <button
              key={i}
              onClick={() => setSelectedDate(date)}
              className={`flex-shrink-0 w-14 h-20 rounded-2xl flex flex-col items-center justify-center transition-all ${
                isSelected 
                  ? 'bg-neon-green text-slate-950 font-bold shadow-[0_0_15px_rgba(190,243,62,0.4)]' 
                  : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span className="text-xs uppercase mb-1">{format(date, 'EEE')}</span>
              <span className="text-lg">{format(date, 'd')}</span>
            </button>
          )
        })}
      </div>
      
      <div className="space-y-3 mt-auto">
        <div className="text-sm font-medium text-slate-400 mb-2">Available Slots</div>
        {['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'].map((time, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-neon-green/30 transition-colors group cursor-pointer">
            <span className="text-slate-200 font-medium">{time}</span>
            <button className="px-3 py-1 rounded-lg bg-slate-800 text-neon-green text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Book
            </button>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
