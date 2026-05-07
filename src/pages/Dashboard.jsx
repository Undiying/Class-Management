import { useState } from "react"
import { CalendarBooking } from "../components/CalendarBooking"
import { SessionManager } from "../components/SessionManager"
import { BentoCard } from "../components/BentoCard"
import { Users, BookOpen, Clock, Plus, X, GraduationCap, Building2, Mail, Lock, Trash2 } from "lucide-react"

// --- Teacher Modal ---
function TeacherModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire to Supabase admin.createUser()
    alert(`Teacher account created for ${form.name}!`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-surface-900/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-premium p-8 border border-sky-100 animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-violet/10 flex items-center justify-center text-brand-violet">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-surface-900">New Teacher Account</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-xl bg-surface-50 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors duration-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Full Name</label>
            <input
              type="text" required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300"
              placeholder="e.g. Sarah Jenkins"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-300" />
              <input
                type="email" required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-sky-50 border border-sky-100 rounded-2xl pl-11 pr-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300"
                placeholder="teacher@academy.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Temporary Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-300" />
              <input
                type="password" required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-sky-50 border border-sky-100 rounded-2xl pl-11 pr-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 py-3 rounded-2xl bg-surface-50 text-surface-900 font-semibold border border-sky-100 hover:bg-sky-50 hover:border-sky-200 transition-all duration-200">
              Cancel
            </button>
            <button type="submit"
              className="flex-1 py-3 rounded-2xl bg-brand-violet text-white font-bold hover:bg-brand-violet-dark hover:shadow-premium transition-all duration-200">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// --- Classroom Modal ---
function ClassroomModal({ onClose }) {
  const [form, setForm] = useState({ name: "", room: "", capacity: "", type: "1hr" })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire to Supabase classrooms table insert
    alert(`Classroom "${form.name}" created!`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-surface-900/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-premium p-8 border border-sky-100 animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-surface-900">New Classroom</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-xl bg-surface-50 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors duration-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Classroom Name</label>
            <input
              type="text" required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300"
              placeholder="e.g. Intro to Robotics"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Room Number</label>
            <input
              type="text" required
              value={form.room}
              onChange={(e) => setForm({ ...form, room: e.target.value })}
              className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300"
              placeholder="e.g. Room 104"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Student Capacity</label>
            <input
              type="number" required min="1"
              value={form.capacity}
              onChange={(e) => setForm({ ...form, capacity: e.target.value })}
              className="w-full bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 text-surface-900 placeholder:text-surface-300 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300"
              placeholder="e.g. 24"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-900 mb-2">Session Type</label>
            <div className="flex gap-3">
              {["1hr", "2hr"].map((t) => (
                <button
                  key={t} type="button"
                  onClick={() => setForm({ ...form, type: t })}
                  className={`flex-1 py-3 rounded-2xl font-bold border-2 transition-all duration-200 ${
                    form.type === t
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-sky-50 text-surface-300 border-sky-100 hover:border-brand-blue/40 hover:text-brand-blue"
                  }`}
                >
                  {t === "1hr" ? "1 Hour" : "2 Hours"}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 py-3 rounded-2xl bg-surface-50 text-surface-900 font-semibold border border-sky-100 hover:bg-sky-50 hover:border-sky-200 transition-all duration-200">
              Cancel
            </button>
            <button type="submit"
              className="flex-1 py-3 rounded-2xl bg-brand-blue text-white font-bold hover:bg-brand-blue-dark hover:shadow-premium transition-all duration-200">
              Create Classroom
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// --- Mock data for the management lists ---
const MOCK_TEACHERS = [
  { id: 1, name: "Sarah Jenkins", email: "sarah@academy.com", classes: 3 },
  { id: 2, name: "Mike Ross", email: "mike@academy.com", classes: 2 },
]
const MOCK_CLASSROOMS = [
  { id: 1, name: "Intro to Robotics", room: "Room 104", capacity: 24, type: "2hr" },
  { id: 2, name: "Advanced Coding", room: "Room 201", capacity: 18, type: "1hr" },
]

// --- Main Dashboard ---
export function Dashboard() {
  const [showTeacherModal, setShowTeacherModal] = useState(false)
  const [showClassroomModal, setShowClassroomModal] = useState(false)
  const [teachers, setTeachers] = useState(MOCK_TEACHERS)
  const [classrooms, setClassrooms] = useState(MOCK_CLASSROOMS)

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {showTeacherModal && <TeacherModal onClose={() => setShowTeacherModal(false)} />}
      {showClassroomModal && <ClassroomModal onClose={() => setShowClassroomModal(false)} />}

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-surface-900">Admin Dashboard</h1>
        <p className="text-surface-300 mt-2 font-medium">Manage sessions, classrooms, and teacher accounts.</p>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard className="!p-5 flex-row items-center gap-4 group cursor-default">
          <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform duration-300">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-surface-900">142</div>
            <div className="text-sm text-surface-300 font-medium">Active Students</div>
          </div>
        </BentoCard>

        <BentoCard className="!p-5 flex-row items-center gap-4 group cursor-default">
          <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-surface-900">{classrooms.length}</div>
            <div className="text-sm text-surface-300 font-medium">Active Classes</div>
          </div>
        </BentoCard>

        <BentoCard className="!p-5 flex-row items-center gap-4 group cursor-default">
          <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 flex items-center justify-center text-brand-violet group-hover:scale-110 transition-transform duration-300">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-surface-900">12</div>
            <div className="text-sm text-surface-300 font-medium">Sessions Today</div>
          </div>
        </BentoCard>
      </div>

      {/* Management Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Teacher Management */}
        <BentoCard className="col-span-1">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-brand-violet/10 flex items-center justify-center text-brand-violet">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-surface-900">Teachers</h3>
            </div>
            <button
              onClick={() => setShowTeacherModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-brand-violet text-white text-sm font-bold rounded-2xl hover:bg-brand-violet-dark transition-all duration-200"
            >
              <Plus className="w-4 h-4" /> Add Teacher
            </button>
          </div>
          <div className="space-y-3">
            {teachers.map((t) => (
              <div key={t.id} className="flex items-center justify-between p-4 rounded-2xl bg-sky-50 border border-sky-100 hover:border-brand-violet/30 hover:bg-violet-50/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-violet/15 text-brand-violet flex items-center justify-center text-xs font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-surface-900">{t.name}</div>
                    <div className="text-xs text-surface-300">{t.email} · {t.classes} class{t.classes !== 1 ? "es" : ""}</div>
                  </div>
                </div>
                <button
                  onClick={() => setTeachers(teachers.filter(x => x.id !== t.id))}
                  className="w-8 h-8 rounded-xl text-surface-300 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {teachers.length === 0 && (
              <div className="py-10 text-center text-surface-300 text-sm font-medium">
                No teacher accounts yet. Add one above!
              </div>
            )}
          </div>
        </BentoCard>

        {/* Classroom Management */}
        <BentoCard className="col-span-1">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-surface-900">Classrooms</h3>
            </div>
            <button
              onClick={() => setShowClassroomModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white text-sm font-bold rounded-2xl hover:bg-brand-blue-dark transition-all duration-200"
            >
              <Plus className="w-4 h-4" /> Add Classroom
            </button>
          </div>
          <div className="space-y-3">
            {classrooms.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-4 rounded-2xl bg-sky-50 border border-sky-100 hover:border-brand-blue/30 hover:bg-blue-50/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-surface-900">{c.name}</div>
                    <div className="text-xs text-surface-300">{c.room} · Cap: {c.capacity} · {c.type === "2hr" ? "2-Hour" : "1-Hour"}</div>
                  </div>
                </div>
                <button
                  onClick={() => setClassrooms(classrooms.filter(x => x.id !== c.id))}
                  className="w-8 h-8 rounded-xl text-surface-300 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {classrooms.length === 0 && (
              <div className="py-10 text-center text-surface-300 text-sm font-medium">
                No classrooms yet. Add one above!
              </div>
            )}
          </div>
        </BentoCard>
      </div>

      {/* Calendar & Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CalendarBooking />
        <SessionManager />
      </div>

      {/* Recent Activity */}
      <BentoCard title="Recent Activity">
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-sky-50 border border-sky-100 hover:border-brand-violet/20 hover:bg-violet-50/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-violet/15 text-brand-violet font-bold flex items-center justify-center text-xs">SJ</div>
              <div>
                <div className="text-sm font-bold text-surface-900">Sarah Jenkins</div>
                <div className="text-xs text-surface-300 font-medium">Started 2-hour session</div>
              </div>
            </div>
            <div className="text-xs text-surface-300 font-medium">10 mins ago</div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-sky-50 border border-sky-100 hover:border-brand-green/20 hover:bg-emerald-50/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-green/15 text-brand-green font-bold flex items-center justify-center text-xs">MR</div>
              <div>
                <div className="text-sm font-bold text-surface-900">Mike Ross</div>
                <div className="text-xs text-surface-300 font-medium">Marked attendance</div>
              </div>
            </div>
            <div className="text-xs text-surface-300 font-medium">1 hour ago</div>
          </div>
        </div>
      </BentoCard>
    </div>
  )
}
