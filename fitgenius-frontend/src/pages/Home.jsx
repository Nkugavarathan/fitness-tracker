export default function Home() {
  return (
    <div className="text-center py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">
        Track Your Fitness Progress 💪
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        FitGenius helps you log workouts, monitor improvements, and stay
        motivated.
      </p>

      <div className="mt-8">
        <a
          href="/workouts"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Manage Workouts
        </a>
      </div>
    </div>
  )
}
