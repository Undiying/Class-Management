import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import { Dashboard } from "./pages/Dashboard"
import { ClassroomView } from "./pages/ClassroomView"
import { Login } from "./pages/Login"

function Layout({ children }) {
  const location = useLocation()
  const isLogin = location.pathname === "/login"

  if (isLogin) {
    return <main>{children}</main>
  }

  // Determine role simply based on route for demo purposes
  // In a real app, this would be from Auth Context
  const isClassroom = location.pathname.includes("classroom")
  const role = isClassroom ? "teacher" : "admin"

  return (
    <div className="flex min-h-screen bg-surface-50">
      <Sidebar role={role} />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/classroom" element={<ClassroomView />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
