import React from "react";

export default function Hero() {
  return (
    <section className="bg-green-600 text-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Clean Nairobi. Smarter Waste. Greener Future.
      </h1>
      <p className="text-lg md:text-2xl mb-6">
        Request pickups, track collectors, and keep your neighborhood clean — all from your phone.
      </p>
      <a
        href="#request"
        className="inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
      >
        Request Pickup Now
      </a>
    </section>
  );
}
