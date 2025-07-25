import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function RequestPickup() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    wasteType: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, address, phone, wasteType } = formData;

    if (!name || !address || !phone || !wasteType) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/pickup", formData);
      toast.success("Pickup request submitted successfully!");
      setFormData({ name: "", address: "", phone: "", wasteType: "" });
    } catch (err) {
      toast.error("Error submitting request. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Request a Pickup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Full Name" className="input" value={formData.name} onChange={handleChange} />
        <input name="address" placeholder="Pickup Address" className="input" value={formData.address} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" className="input" value={formData.phone} onChange={handleChange} />
        <select name="wasteType" className="input" value={formData.wasteType} onChange={handleChange}>
          <option value="">Select Waste Type</option>
          <option value="plastic">Plastic</option>
          <option value="organic">Organic</option>
          <option value="e-waste">E-Waste</option>
          <option value="All">All</option>
        </select>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
      </form>
    </div>
  );
}
