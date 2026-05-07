import { useState } from "react"
import { BentoCard } from "../components/BentoCard"
import { useNavigate } from "react-router-dom"
import { LogIn } from "lucide-react"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Mock login routing based on email domain for demo purposes
    if (email.includes("admin")) {
      navigate("/") // Dashboard for Admin
    } else {
      navigate("/classroom") // Classroom for Teacher
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 friendly-gradient">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-4 mb-12 group cursor-pointer">
          <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center shadow-premium group-hover:scale-105 transition-transform duration-500">
            <div className="w-5 h-5 rounded-full bg-white shadow-inner"></div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-surface-900">ClassFlow</h1>
        </div>

        <BentoCard className="!p-10 shadow-premium border-white/60">
          <h2 className="text-2xl font-bold text-surface-900 mb-2">Welcome Back</h2>
          <p className="text-surface-300 text-sm mb-10">Sign in to manage your classes and students.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-surface-900 mb-2 ml-1">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-50/50 border border-surface-200 rounded-2xl px-5 py-4 text-surface-900 focus:outline-none focus:border-brand-violet focus:ring-4 focus:ring-brand-violet/10 transition-all duration-300"
                placeholder="teacher@academy.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-surface-900 mb-2 ml-1">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface-50/50 border border-surface-200 rounded-2xl px-5 py-4 text-surface-900 focus:outline-none focus:border-brand-violet focus:ring-4 focus:ring-brand-violet/10 transition-all duration-300"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-violet to-brand-blue text-white font-bold rounded-2xl px-5 py-4 hover:shadow-premium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>
          
          <div className="mt-8 text-center text-xs text-surface-300 bg-surface-50 py-3 rounded-xl border border-surface-200/50">
            Hint: Use <span className="font-bold text-surface-900">"admin@..."</span> for admin view, any other for teacher view.
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
