import React from "react";

export default function Benefits() {
  const items = [
    "On-demand waste pickup at your fingertips",
    "Track your collector in real time",
    "Eco-conscious and community-driven",
    "Empowers youth through green jobs",
  ];

  return (
    <section className="py-10 px-4 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose TakaCare?</h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {items.map((benefit, i) => (
          <div key={i} className="bg-white p-5 shadow rounded text-gray-800">
            ✅ {benefit}
          </div>
        ))}
      </div>
    </section>
  );
}
