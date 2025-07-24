import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function JoinAsCollector() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, area, experience } = formData;

    if (!name || !phone || !area || !experience) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/collectors", formData);
      toast.success("Collector application submitted!");
      setFormData({ name: "", phone: "", area: "", experience: "" });
    } catch (err) {
      toast.error("Error submitting form. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Join as a Collector</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Full Name" className="input" value={formData.name} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" className="input" value={formData.phone} onChange={handleChange} />
        <input name="area" placeholder="Preferred Collection Area" className="input" value={formData.area} onChange={handleChange} />
        <textarea name="experience" placeholder="Experience Details" className="input" value={formData.experience} onChange={handleChange}></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Apply</button>
      </form>
    </div>
  );
}
