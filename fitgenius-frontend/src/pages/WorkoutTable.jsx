import React, { useEffect, useState } from "react"
import api from "../api/axiosInstane.js"

const WorkoutTable = () => {
  const [workouts, setWorkouts] = useState([])
  const [form, setForm] = useState({ exerciseName: "", sets: "", reps: "" })

  useEffect(() => {
    loadWorkouts()
  }, [])

  const loadWorkouts = () => {
    api.get("/api/workouts").then((res) => setWorkouts(res.data))
  }

  const submitWorkout = (e) => {
    e.preventDefault()
    api.post("/api/workouts", form).then(() => {
      setForm({ exerciseName: "", sets: "", reps: "" })
      loadWorkouts()
    })
  }

  const removeWorkout = (id) => {
    api.delete(`/api/workouts/${id}`).then(loadWorkouts)
  }

  return (
    <div className="workout-page">
      <h2>Workout Tracker</h2>

      <form onSubmit={submitWorkout} className="add-form">
        <input
          placeholder="Exercise Name"
          value={form.exerciseName}
          onChange={(e) => setForm({ ...form, exerciseName: e.target.value })}
        />

        <input
          placeholder="Sets"
          type="number"
          value={form.sets}
          onChange={(e) => setForm({ ...form, sets: e.target.value })}
        />

        <input
          placeholder="Reps"
          type="number"
          value={form.reps}
          onChange={(e) => setForm({ ...form, reps: e.target.value })}
        />

        <button>Add Workout</button>
      </form>

      <table className="workout-table">
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {workouts.map((w) => (
            <tr key={w.id}>
              <td>{w.exerciseName}</td>
              <td>{w.sets}</td>
              <td>{w.reps}</td>
              <td>{w.date}</td>
              <td>
                <button onClick={() => removeWorkout(w.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WorkoutTable
