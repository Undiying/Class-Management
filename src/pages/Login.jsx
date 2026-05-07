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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-xl bg-neon-green/20 border border-neon-green/50 flex items-center justify-center">
            <div className="w-6 h-6 rounded-md bg-neon-green neon-glow"></div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">ClassFlow</h1>
        </div>

        <BentoCard className="!p-8">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Welcome Back</h2>
          <p className="text-slate-400 text-sm mb-8">Sign in to manage your classes and students.</p>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
                placeholder="teacher@academy.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full mt-4 flex items-center justify-center gap-2 bg-neon-green text-slate-950 font-bold rounded-xl px-4 py-3 hover:bg-neon-hover transition-colors shadow-[0_0_20px_rgba(190,243,62,0.2)] hover:shadow-[0_0_25px_rgba(190,243,62,0.4)]"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-slate-500">
            Hint: Use "admin@..." for admin view, any other for teacher view.
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
