// src/pages/Home.jsx
export default function Home() {
    return (
      <div className="flex flex-col items-center text-center px-4 py-12 bg-green-50 min-h-screen">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Smart Waste Pickup for Nairobi</h2>
        <p className="text-gray-700 mb-6 max-w-md">
          Request, track and manage your waste collection with ease. TakaCare connects residents to certified collectors near them.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/request" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
            🚛 Request Pickup
          </Link>
          <Link to="/track" className="bg-yellow-300 text-green-900 px-6 py-2 rounded-md hover:bg-yellow-400">
            📍 Track Pickup
          </Link>
        </div>
      </div>
    );
  }
  