import React, { useState } from "react";
import axios from "../api/axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

export default function RequestPickup() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => { ... };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location.trim()) {
      toast.error("Please enter a valid location.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/pickup", { location }); // 🔗 Adjust endpoint to match backend
      toast.success("Pickup request submitted!");
      setLocation("");
    } catch (err) {
      toast.error("Failed to submit pickup request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="request"
      className="py-10 px-4 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">Request a Pickup</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your pickup location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 rounded border border-gray-300"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit Request"}
          {...register("location", { required: "Location is required" })}
  className="p-3 border rounded"
/>
{errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </button>
      </form>
    </motion.section>
  );
}
