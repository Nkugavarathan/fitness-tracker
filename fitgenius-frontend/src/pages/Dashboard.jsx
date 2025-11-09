import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import api from "../api/axios"

export default function Dashboard() {
  const { token } = useContext(AuthContext)
  const [workouts, setWorkouts] = useState([])
  const [form, setForm] = useState({ exerciseName: "", sets: "", reps: "" })

  const getWorkouts = async () => {
    const res = await api.get("/workouts", {
      headers: { Authorization: `Bearer ${token}` },
    })
    setWorkouts(res.data)
  }

  const addWorkout = async (e) => {
    e.preventDefault()
    await api.post("/workouts", form, {
      headers: { Authorization: `Bearer ${token}` },
    })
    getWorkouts()
  }

  useEffect(() => {
    getWorkouts()
  }, [])

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Your Workouts</h1>

      <form
        onSubmit={addWorkout}
        className="flex flex-col bg-white p-6 rounded-lg shadow-md w-96 mb-8"
      >
        <input
          placeholder="Exercise"
          className="border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 mb-4 rounded"
          onChange={(e) => setForm({ ...form, exerciseName: e.target.value })}
        />
        <input
          placeholder="Sets"
          className="border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 mb-4 rounded"
          onChange={(e) => setForm({ ...form, sets: e.target.value })}
        />
        <input
          placeholder="Reps"
          className="border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 mb-6 rounded"
          onChange={(e) => setForm({ ...form, reps: e.target.value })}
        />
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          Add
        </button>
      </form>

      <div className="w-96 bg-white p-6 rounded-lg shadow-md">
        {workouts.length === 0 ? (
          <p className="text-gray-500">No workouts yet. Add one above!</p>
        ) : (
          workouts.map((w) => (
            <p
              key={w.id}
              className="border-b border-gray-200 py-2 text-blue-700 font-medium"
            >
              {w.exerciseName} - {w.sets}x{w.reps}
            </p>
          ))
        )}
      </div>
    </div>
  )
}
