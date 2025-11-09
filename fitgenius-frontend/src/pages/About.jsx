export default function About() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-12 px-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">About FitGenius</h1>

      {/* Mission Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl text-center">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-700">
          FitGenius empowers individuals to take control of their health and
          fitness by combining technology, simplicity, and motivation. We
          believe fitness should be accessible, personalized, and inspiring for
          everyone.
        </p>
      </div>

      {/* AI Support Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl text-center">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">
          AI-Powered Tracking
        </h2>
        <p className="text-gray-700">
          FitGenius uses AI to analyze your workouts, suggest improvements, and
          build routines that fit your lifestyle. Think of it as having a
          personal coach in your pocket.
        </p>
      </div>

      {/* Features Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl text-center">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">
          Key Features
        </h2>
        <ul className="text-gray-700 space-y-2">
          <li>📊 Track exercises, sets, and reps</li>
          <li>📅 Log workouts by date</li>
          <li>📈 Visualize progress over time</li>
          <li>🤖 Get AI-driven insights and suggestions</li>
        </ul>
      </div>
    </div>
  )
}
