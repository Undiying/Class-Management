import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { AuthProvider, useAuth } from "./lib/AuthContext"
import { Sidebar } from "./components/Sidebar"
import { Dashboard } from "./pages/Dashboard"
import { ClassroomView } from "./pages/ClassroomView"
import { Login } from "./pages/Login"

// Full-screen loading spinner
function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center shadow-premium animate-pulse">
          <div className="w-5 h-5 rounded-full bg-white"></div>
        </div>
        <p className="text-surface-300 font-medium text-sm animate-pulse">Loading ClassFlow...</p>
      </div>
    </div>
  )
}

// Protects routes — redirects to /login if not authenticated
function ProtectedRoute({ children, adminOnly = false }) {
  const { user, profile, loading } = useAuth()

  if (loading) return <LoadingScreen />
  if (!user) return <Navigate to="/login" replace />
  if (adminOnly && profile?.role !== "admin") return <Navigate to="/classroom" replace />

  return children
}

function Layout({ children }) {
  const location = useLocation()
  const { profile } = useAuth()

  return (
    <div className="flex min-h-screen bg-surface-50">
      <Sidebar role={profile?.role ?? "teacher"} />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />

          {/* Admin-only */}
          <Route path="/" element={
            <ProtectedRoute adminOnly>
              <Layout><Dashboard /></Layout>
            </ProtectedRoute>
          } />

          {/* Teacher + Admin */}
          <Route path="/classroom" element={
            <ProtectedRoute>
              <Layout><ClassroomView /></Layout>
            </ProtectedRoute>
          } />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
