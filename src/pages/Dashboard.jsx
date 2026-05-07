import { useState, useEffect, useCallback } from "react"
import { CalendarBooking } from "../components/CalendarBooking"
import { SessionManager } from "../components/SessionManager"
import { BentoCard } from "../components/BentoCard"
import { supabase } from "../lib/supabase"
import { useAuth } from "../lib/AuthContext"
import {
  Users, BookOpen, Clock, Plus, X,
  GraduationCap, Building2, Mail, Lock, Trash2, RefreshCw
} from "lucide-react"

// ─── Teacher Modal ──────────────────────────────────────────────────────────
function TeacherModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // signUp with teacher role injected into user_metadata
      // (the DB trigger reads this to set role = 'teacher' in profiles)
      const { error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: { full_name: form.name, role: "teacher" }
        }
      })
      if (signUpError) throw signUpError
      onSuccess?.()
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-surface-900/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-premium p-8 border border-sky-100 animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-violet/10 flex items-center justify-center text-brand-violet">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-surface-900">New Teacher Account</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-xl bg-sky-50 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors duration-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Full Name</label>
            <input type="text" required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all"
              placeholder="e.g. Sarah Jenkins" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-300" />
              <input type="email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-sky-50 border border-sky-100 rounded-2xl pl-11 pr-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all"
                placeholder="teacher@academy.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Temporary Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-300" />
              <input type="password" required minLength={6} value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-sky-50 border border-sky-100 rounded-2xl pl-11 pr-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all"
                placeholder="Min. 6 characters" />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 py-3 rounded-2xl bg-sky-50 text-surface-900 font-semibold border border-sky-100 hover:bg-sky-100 transition-all duration-200">
              Cancel
            </button>
            <button type="submit" disabled={loading}
              className="flex-1 py-3 rounded-2xl bg-brand-violet text-white font-bold hover:bg-brand-violet-dark transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2">
              {loading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {loading ? "Creating..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ─── Classroom Modal ─────────────────────────────────────────────────────────
function ClassroomModal({ onClose, onSuccess }) {
  const { profile } = useAuth()
  const [form, setForm] = useState({ name: "", room: "", capacity: "", type: "1hr" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error: insertError } = await supabase.from("classrooms").insert({
      name: form.name,
      room_number: form.room,
      capacity: parseInt(form.capacity),
      session_type: form.type,
      created_by: profile?.id,
    })

    if (insertError) {
      setError(insertError.message)
      setLoading(false)
    } else {
      onSuccess?.()
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-surface-900/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-premium p-8 border border-sky-100 animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-surface-900">New Classroom</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-xl bg-sky-50 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors duration-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Classroom Name</label>
            <input type="text" required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all"
              placeholder="e.g. Intro to Robotics" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Room Number</label>
            <input type="text" required value={form.room}
              onChange={(e) => setForm({ ...form, room: e.target.value })}
              className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all"
              placeholder="e.g. Room 104" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Student Capacity</label>
            <input type="number" required min="1" value={form.capacity}
              onChange={(e) => setForm({ ...form, capacity: e.target.value })}
              className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all"
              placeholder="e.g. 24" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Session Type</label>
            <div className="flex gap-3">
              {["1hr", "2hr"].map((t) => (
                <button key={t} type="button" onClick={() => setForm({ ...form, type: t })}
                  className={`flex-1 py-3 rounded-2xl font-bold border-2 transition-all duration-200 ${
                    form.type === t
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-sky-50 text-surface-300 border-sky-100 hover:border-brand-blue/40 hover:text-brand-blue"
                  }`}>
                  {t === "1hr" ? "1 Hour" : "2 Hours"}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 py-3 rounded-2xl bg-sky-50 text-surface-900 font-semibold border border-sky-100 hover:bg-sky-100 transition-all duration-200">
              Cancel
            </button>
            <button type="submit" disabled={loading}
              className="flex-1 py-3 rounded-2xl bg-brand-blue text-white font-bold hover:bg-brand-blue-dark transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2">
              {loading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {loading ? "Creating..." : "Create Classroom"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export function Dashboard() {
  const [showTeacherModal, setShowTeacherModal] = useState(false)
  const [showClassroomModal, setShowClassroomModal] = useState(false)
  const [teachers, setTeachers] = useState([])
  const [classrooms, setClassrooms] = useState([])
  const [stats, setStats] = useState({ students: 0, sessions: 0 })
  const [dataLoading, setDataLoading] = useState(true)

  const loadData = useCallback(async () => {
    setDataLoading(true)
    const [teachersRes, classroomsRes, studentsRes, sessionsRes] = await Promise.all([
      supabase.from("profiles").select("*").eq("role", "teacher").order("full_name"),
      supabase.from("classrooms").select("*").order("name"),
      supabase.from("students").select("id", { count: "exact", head: true }),
      supabase.from("sessions").select("id", { count: "exact", head: true })
        .gte("started_at", new Date(new Date().setHours(0,0,0,0)).toISOString()),
    ])
    setTeachers(teachersRes.data ?? [])
    setClassrooms(classroomsRes.data ?? [])
    setStats({
      students: studentsRes.count ?? 0,
      sessions: sessionsRes.count ?? 0,
    })
    setDataLoading(false)
  }, [])

  useEffect(() => { loadData() }, [loadData])

  const deleteTeacher = async (id) => {
    // Soft-delete: remove from profiles (auth user stays, can be cleaned up in Supabase dashboard)
    await supabase.from("profiles").delete().eq("id", id)
    setTeachers(t => t.filter(x => x.id !== id))
  }

  const deleteClassroom = async (id) => {
    await supabase.from("classrooms").delete().eq("id", id)
    setClassrooms(c => c.filter(x => x.id !== id))
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {showTeacherModal && <TeacherModal onClose={() => setShowTeacherModal(false)} onSuccess={loadData} />}
      {showClassroomModal && <ClassroomModal onClose={() => setShowClassroomModal(false)} onSuccess={loadData} />}

      <header className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-surface-900">Admin Dashboard</h1>
          <p className="text-surface-300 mt-2 font-medium">Manage sessions, classrooms, and teacher accounts.</p>
        </div>
        <button onClick={loadData} disabled={dataLoading}
          className="flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-100 text-surface-300 rounded-2xl hover:bg-sky-100 hover:text-brand-blue transition-all duration-200 disabled:opacity-50">
          <RefreshCw className={`w-4 h-4 ${dataLoading ? "animate-spin" : ""}`} />
          <span className="text-sm font-semibold">Refresh</span>
        </button>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard className="!p-5 flex-row items-center gap-4 group cursor-default">
          <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform duration-300">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-surface-900">{dataLoading ? "—" : stats.students}</div>
            <div className="text-sm text-surface-300 font-medium">Active Students</div>
          </div>
        </BentoCard>

        <BentoCard className="!p-5 flex-row items-center gap-4 group cursor-default">
          <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-surface-900">{dataLoading ? "—" : classrooms.length}</div>
            <div className="text-sm text-surface-300 font-medium">Active Classes</div>
          </div>
        </BentoCard>

        <BentoCard className="!p-5 flex-row items-center gap-4 group cursor-default">
          <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 flex items-center justify-center text-brand-violet group-hover:scale-110 transition-transform duration-300">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-surface-900">{dataLoading ? "—" : stats.sessions}</div>
            <div className="text-sm text-surface-300 font-medium">Sessions Today</div>
          </div>
        </BentoCard>
      </div>

      {/* Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Teachers */}
        <BentoCard className="col-span-1">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-brand-violet/10 flex items-center justify-center text-brand-violet">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-surface-900">Teachers</h3>
              <span className="px-2 py-0.5 rounded-full bg-brand-violet/10 text-brand-violet text-xs font-bold">{teachers.length}</span>
            </div>
            <button onClick={() => setShowTeacherModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-brand-violet text-white text-sm font-bold rounded-2xl hover:bg-brand-violet-dark transition-all duration-200">
              <Plus className="w-4 h-4" /> Add Teacher
            </button>
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto">
            {dataLoading ? (
              <div className="py-8 text-center text-surface-300 text-sm">Loading...</div>
            ) : teachers.length === 0 ? (
              <div className="py-10 text-center text-surface-300 text-sm font-medium">
                No teacher accounts yet. Add one above!
              </div>
            ) : teachers.map((t) => (
              <div key={t.id} className="flex items-center justify-between p-4 rounded-2xl bg-sky-50 border border-sky-100 hover:border-brand-violet/30 hover:bg-violet-50/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-violet/15 text-brand-violet flex items-center justify-center text-xs font-bold">
                    {t.full_name?.split(" ").map(n => n[0]).join("").slice(0, 2) ?? "?"}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-surface-900">{t.full_name}</div>
                    <div className="text-xs text-surface-300">Teacher</div>
                  </div>
                </div>
                <button onClick={() => deleteTeacher(t.id)}
                  className="w-8 h-8 rounded-xl text-surface-300 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors duration-200">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Classrooms */}
        <BentoCard className="col-span-1">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-surface-900">Classrooms</h3>
              <span className="px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">{classrooms.length}</span>
            </div>
            <button onClick={() => setShowClassroomModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white text-sm font-bold rounded-2xl hover:bg-brand-blue-dark transition-all duration-200">
              <Plus className="w-4 h-4" /> Add Classroom
            </button>
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto">
            {dataLoading ? (
              <div className="py-8 text-center text-surface-300 text-sm">Loading...</div>
            ) : classrooms.length === 0 ? (
              <div className="py-10 text-center text-surface-300 text-sm font-medium">
                No classrooms yet. Add one above!
              </div>
            ) : classrooms.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-4 rounded-2xl bg-sky-50 border border-sky-100 hover:border-brand-blue/30 hover:bg-blue-50/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-surface-900">{c.name}</div>
                    <div className="text-xs text-surface-300">{c.room_number} · Cap: {c.capacity} · {c.session_type === "2hr" ? "2-Hour" : "1-Hour"}</div>
                  </div>
                </div>
                <button onClick={() => deleteClassroom(c.id)}
                  className="w-8 h-8 rounded-xl text-surface-300 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors duration-200">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>

      {/* Calendar & Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CalendarBooking />
        <SessionManager />
      </div>
    </div>
  )
}
