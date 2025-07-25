import React from "react";

const reviews = [
  {
    name: "Mwikali N.",
    review: "TakaCare has made waste pickup so easy — no more waiting for days! Asante sana!",
  },
  {
    name: "Brian O.",
    review: "I joined as a collector and it's been a great hustle. Payments are prompt and fair.",
  },
];

export default function ClientReviews() {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-xl">
            <p className="text-lg italic">“{rev.review}”</p>
            <p className="mt-4 font-semibold text-right">— {rev.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
