// import { useContext, useEffect, useState } from "react"
// import { AuthContext } from "../context/AuthContext"
// import api from "../api/axios.js"

// export default function Dashboard() {
//   const { token } = useContext(AuthContext)
//   console.log("token ", token)
//   const [workouts, setWorkouts] = useState([])
//   const [form, setForm] = useState({ exerciseName: "", sets: "", reps: "" })

//   const getWorkouts = async () => {
//     const res = await api.get("/workouts", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     setWorkouts(res.data)
//   }
//   const addWorkout = async (e) => {
//     e.preventDefault()
//     try {
//       await api.post("/workouts", form, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       getWorkouts()
//     } catch (err) {
//       console.error("Error adding workout:", err.response?.data || err.message)
//     }
//   }

//   useEffect(() => {
//     getWorkouts()
//   }, [])

//   return (
//     <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
//       <h1 className="text-3xl font-bold text-blue-600 mb-6">Your Workouts</h1>

//       <form
//         onSubmit={addWorkout}
//         className="flex flex-col bg-white p-6 rounded-lg shadow-md w-96 mb-8"
//       >
//         <input
//           placeholder="Exercise"
//           className="border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 mb-4 rounded"
//           onChange={(e) => setForm({ ...form, exerciseName: e.target.value })}
//         />
//         <input
//           placeholder="Sets"
//           className="border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 mb-4 rounded"
//           onChange={(e) => setForm({ ...form, sets: Number(e.target.value) })}
//         />
//         <input
//           placeholder="Reps"
//           className="border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 mb-6 rounded"
//           onChange={(e) => setForm({ ...form, reps: Number(e.target.value) })}
//         />
//         <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
//           Add
//         </button>
//       </form>

//       <div className="w-96 bg-white p-6 rounded-lg shadow-md">
//         {workouts.length === 0 ? (
//           <p className="text-gray-500">No workouts yet. Add one above!</p>
//         ) : (
//           workouts.map((w) => (
//             <p
//               key={w.id}
//               className="border-b border-gray-200 py-2 text-blue-700 font-medium"
//             >
//               {w.exerciseName} - {w.sets}x{w.reps}
//             </p>
//           ))
//         )}
//       </div>
//     </div>
//   )
// }
import React, { useEffect, useState } from "react"
import api from "../api/axiosInstance.js"

const Dashboard = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    api
      .get("/api/user/me")
      .then((res) => setUser(res.data))
      .catch(() => console.log("Not logged in"))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center p-8">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
        {user ? `Welcome, ${user.full_name}!` : "Welcome to FitGenius 💪"}
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl p-6 transition transform hover:-translate-y-1 border border-blue-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Workout Tracker
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Log your exercises and monitor your daily routines with ease.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl p-6 transition transform hover:-translate-y-1 border border-blue-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Progress Charts
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Visualize your growth and see improvements over time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl p-6 transition transform hover:-translate-y-1 border border-blue-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            AI Fitness Coach
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Get personalized AI-powered workout suggestions for your goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
