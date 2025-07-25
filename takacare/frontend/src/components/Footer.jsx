import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-white mb-2">TakaCare</h4>
          <p>Smart waste solutions for a cleaner Nairobi.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Contact</h4>
          <p>📞 +254 712 345 678</p>
          <p>✉️ support@takacare.africa</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Quick Links</h4>
          <ul>
            <li><a href="#request" className="hover:text-white">Request Pickup</a></li>
            <li><a href="#join" className="hover:text-white">Join as Collector</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} TakaCare. Built in Nairobi with ❤️
      </p>
    </footer>
  );
}
