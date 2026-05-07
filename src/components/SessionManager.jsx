import { useState } from "react"
import { BentoCard } from "./BentoCard"
import { Clock, Send, CheckCircle2 } from "lucide-react"

export function SessionManager() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const handleNotify = async (type) => {
    setLoading(true)
    setSuccess(null)
    
    // In a real implementation, this would call Supabase Edge Function using Resend
    // e.g. await supabase.functions.invoke('notify-teachers', { body: { type } })
    
    setTimeout(() => {
      setLoading(false)
      setSuccess(`Notification sent for ${type}-hour session!`)
      setTimeout(() => setSuccess(null), 3000)
    }, 1500)
  }

  return (
    <BentoCard title="Session Notifications" className="col-span-1">
      <p className="text-sm text-surface-300 mb-6 font-medium">
        Trigger email notifications based on session duration.
      </p>
      
      <div className="space-y-4 mt-auto">
        <button 
          onClick={() => handleNotify(1)}
          disabled={loading}
          className="w-full flex items-center justify-between p-4 rounded-3xl bg-surface-100/50 border border-surface-200 hover:border-brand-blue/30 hover:bg-white hover:shadow-soft transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-surface-900">1-Hour Session</div>
              <div className="text-xs text-surface-300 font-medium">Notify assigned teacher only</div>
            </div>
          </div>
          <Send className="w-4 h-4 text-surface-200 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </button>

        <button 
          onClick={() => handleNotify(2)}
          disabled={loading}
          className="w-full flex items-center justify-between p-4 rounded-3xl bg-surface-100/50 border border-surface-200 hover:border-brand-green/30 hover:bg-white hover:shadow-soft transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-surface-900">2-Hour Session</div>
              <div className="text-xs text-surface-300 font-medium">Notify ALL teachers</div>
            </div>
          </div>
          <Send className="w-4 h-4 text-surface-200 group-hover:text-brand-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </button>

        {success && (
          <div className="p-4 rounded-2xl bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-bold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle2 className="w-5 h-5" />
            {success}
          </div>
        )}
      </div>
    </BentoCard>
  )
}
