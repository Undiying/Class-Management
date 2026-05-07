import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogIn, AlertCircle } from "lucide-react"
import { BentoCard } from "../components/BentoCard"
import { useAuth } from "../lib/AuthContext"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { signIn, profile } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await signIn(email, password)
      // Route based on role — profile is loaded by AuthContext after sign-in
      // We briefly wait for the profile to be set, then redirect
      setTimeout(() => {
        const role = profile?.role
        navigate(role === "admin" ? "/" : "/classroom")
      }, 300)
    } catch (err) {
      setError(err.message || "Invalid email or password. Please try again.")
      setLoading(false)
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
          <p className="text-surface-300 text-sm font-medium mb-10">Sign in to manage your classes and students.</p>

          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-surface-900 mb-2 ml-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-5 py-4 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300 disabled:opacity-60"
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
                disabled={loading}
                className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-5 py-4 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300 disabled:opacity-60"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-violet text-white font-bold rounded-2xl px-5 py-4 hover:shadow-premium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <LogIn className="w-5 h-5" />
              )}
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-surface-300 bg-sky-50 py-3 rounded-xl border border-sky-100">
            Admin accounts get the full dashboard. Teachers go straight to their classroom.
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
