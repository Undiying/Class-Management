import { useState } from "react"
import { BentoCard } from "./BentoCard"
import { format, addDays, startOfWeek } from "date-fns"

export function CalendarBooking() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 })
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i))

  return (
    <BentoCard title="Session Calendar" className="col-span-1">
      <div className="flex gap-3 mb-8 overflow-x-auto pb-4 scrollbar-hide">
        {weekDays.map((date, i) => {
          const isSelected = date.toDateString() === selectedDate.toDateString()
          return (
            <button
              key={i}
              onClick={() => setSelectedDate(date)}
              className={`flex-shrink-0 w-16 h-24 rounded-3xl flex flex-col items-center justify-center transition-all duration-300 border ${
                isSelected 
                  ? 'bg-brand-violet text-white font-bold shadow-premium border-brand-violet scale-105' 
                  : 'bg-surface-100/50 text-surface-300 hover:bg-white hover:border-brand-violet/20 border-surface-200'
              }`}
            >
              <span className={`text-[10px] uppercase mb-2 tracking-wider ${isSelected ? 'text-white/80' : 'text-surface-300'}`}>
                {format(date, 'EEE')}
              </span>
              <span className="text-xl">{format(date, 'd')}</span>
            </button>
          )
        })}
      </div>
      
      <div className="space-y-3 mt-auto">
        <div className="text-xs font-bold text-surface-300 uppercase tracking-widest mb-4 ml-1">Available Slots</div>
        {['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'].map((time, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-surface-50/50 border border-surface-200 hover:border-brand-violet/30 hover:bg-white hover:shadow-soft transition-all duration-300 group cursor-pointer">
            <span className="text-surface-900 font-bold">{time}</span>
            <button className="px-4 py-1.5 rounded-xl bg-brand-violet/10 text-brand-violet text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-violet hover:text-white">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
