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
      <p className="text-sm text-slate-400 mb-6">
        Trigger email notifications based on session duration.
      </p>
      
      <div className="space-y-4 mt-auto">
        <button 
          onClick={() => handleNotify(1)}
          disabled={loading}
          className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-medium text-slate-200">1-Hour Session</div>
              <div className="text-xs text-slate-500">Notify assigned teacher only</div>
            </div>
          </div>
          <Send className="w-4 h-4 text-slate-600 group-hover:text-blue-400" />
        </button>

        <button 
          onClick={() => handleNotify(2)}
          disabled={loading}
          className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-neon-green/50 hover:bg-neon-green/5 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-medium text-slate-200">2-Hour Session</div>
              <div className="text-xs text-slate-500">Notify ALL teachers</div>
            </div>
          </div>
          <Send className="w-4 h-4 text-slate-600 group-hover:text-neon-green" />
        </button>

        {success && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle2 className="w-4 h-4" />
            {success}
          </div>
        )}
      </div>
    </BentoCard>
  )
}
