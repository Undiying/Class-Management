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
      <div className="flex-1 flex items-center justify-center bg-slate-950/50 rounded-2xl p-8 border border-slate-800/50">
        <div className="grid grid-cols-6 gap-4 md:gap-6">
          {seats.map((seat) => (
            <div
              key={seat.id}
              onClick={() => toggleSeat(seat.id)}
              className="relative group cursor-pointer"
            >
              <div
                className={cn(
                  "w-12 h-12 md:w-16 md:h-16 rounded-xl transition-all duration-300 flex items-center justify-center border",
                  seat.isOccupied
                    ? "bg-neon-green/20 border-neon-green neon-glow text-neon-green"
                    : "bg-slate-800/50 border-slate-700/50 text-slate-500 hover:bg-slate-700/50 hover:border-slate-600"
                )}
              >
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  seat.isOccupied ? "bg-neon-green" : "bg-slate-600"
                )} />
              </div>

              {/* Tooltip */}
              {seat.isOccupied && seat.studentName && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-slate-800 text-slate-100 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-xl border border-slate-700">
                  {seat.studentName}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6 mt-6 justify-center text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-slate-800/50 border border-slate-700/50" />
          Available
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-neon-green/20 border border-neon-green neon-glow" />
          Occupied / Arrived
        </div>
      </div>
    </BentoCard>
  )
}
