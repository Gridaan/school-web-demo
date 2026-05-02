import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      setSuccess(res.data.message);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setSuccess("Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

      {success && (
        <p className="text-green-600 text-center mb-3">{success}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
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

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-2 border rounded-lg"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;