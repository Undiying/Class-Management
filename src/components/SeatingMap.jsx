import { useState } from "react"
import { cn } from "../lib/utils"
import { BentoCard } from "./BentoCard"

const MOCK_SEATS = Array.from({ length: 24 }).map((_, i) => ({
  id: `seat-${i}`,
  isOccupied: Math.random() > 0.6,
  studentName: Math.random() > 0.6 ? `Student ${i + 1}` : null,
  row: Math.floor(i / 6),
  col: i % 6,
}))

export function SeatingMap() {
  const [seats, setSeats] = useState(MOCK_SEATS)

  const toggleSeat = (id) => {
    setSeats(seats.map(seat => {
      if (seat.id === id) {
        return {
          ...seat,
          isOccupied: !seat.isOccupied,
          studentName: !seat.isOccupied ? "New Check-in" : null
        }
      }
      return seat
    }))
  }

  return (
    <BentoCard title="Interactive Seating Map" className="col-span-1 md:col-span-2">
      <div className="flex-1 flex items-center justify-center bg-surface-50/50 rounded-3xl p-8 border border-surface-200/50">
        <div className="grid grid-cols-6 gap-4 md:gap-6">
          {seats.map((seat) => (
            <div
              key={seat.id}
              onClick={() => toggleSeat(seat.id)}
              className="relative group cursor-pointer"
            >
              <div
                className={cn(
                  "w-12 h-12 md:w-16 md:h-16 rounded-2xl transition-all duration-500 flex items-center justify-center border",
                  seat.isOccupied
                    ? "bg-brand-blue/10 border-brand-blue/30 text-brand-blue shadow-soft"
                    : "bg-white/40 border-surface-200 text-surface-200 hover:bg-white hover:border-brand-blue/20 hover:shadow-soft"
                )}
              >
                <div className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-500",
                  seat.isOccupied ? "bg-brand-blue scale-110 shadow-[0_0_10px_rgba(14,165,233,0.3)]" : "bg-surface-200"
                )} />
              </div>

              {/* Tooltip */}
              {seat.isOccupied && seat.studentName && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-surface-900 text-white text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 whitespace-nowrap pointer-events-none z-10 shadow-premium">
                  {seat.studentName}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-surface-900" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6 mt-6 justify-center text-sm text-surface-300">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white border border-surface-200" />
          Available
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(14,165,233,0.4)]" />
          Occupied / Arrived
        </div>
      </div>
    </BentoCard>
  )
}
