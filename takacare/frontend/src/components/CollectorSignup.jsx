import React, { useState } from "react";
import axios from "../api/axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function CollectorSignup() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/collectors", { name }); // 🔗 Adjust endpoint
      toast.success("You’ve successfully signed up!");
      setName("");
    } catch (err) {
      toast.error("Signup failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="join"
      className="py-10 px-4 bg-white"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">Join as a Collector</h2>
      <form onSubmit={handleSignup} className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </motion.section>
  );
}
