import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-green-800 text-white flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">TakaCare ♻️</h1>
      <ul className="hidden md:flex gap-6 text-sm">
        <li className="hover:text-yellow-300 cursor-pointer">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer">About</li>
        <li className="hover:text-yellow-300 cursor-pointer">Services</li>
        <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-3">
      <div className="flex gap-3">
      <Link to="/request-pickup">
  <button className="bg-yellow-300 text-green-900 px-4 py-1 rounded font-medium hover:bg-yellow-400 transition">
    Request Pickup
  </button>
</Link>

<Link to="/join-collector">
  <button className="bg-yellow-300 text-green-900 px-4 py-1 rounded font-medium hover:bg-yellow-400 transition">
    Join as Collector
  </button>
</Link>
</div>

</div>
    </nav>
  );
}
