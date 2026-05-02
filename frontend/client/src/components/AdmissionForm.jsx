import React, { useState } from "react";
import axios from "axios";

function AdmissionForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interestedClass: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/admission", form);
      setSuccess(res.data.message);
      setForm({
        name: "",
        email: "",
        phone: "",
        interestedClass: "",
        message: ""
      });
    } catch (err) {
      setSuccess("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Admission Enquiry</h2>

      {success && (
        <p className="text-green-600 text-center mb-3">{success}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          name="interestedClass"
          value={form.interestedClass}
          onChange={handleChange}
          placeholder="Class Interested"
          className="w-full p-2 border rounded-lg"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AdmissionForm;