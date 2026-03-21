import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">

          <h2 className="text-xl font-semibold">Get in Touch</h2>

          <p className="text-gray-600">
            If you have any questions about our products, orders,
            or shipping, feel free to contact us.
          </p>

          <div className="space-y-3">

            <p>
              <strong>Email:</strong> support@yourstore.com
            </p>

            <p>
              <strong>Phone:</strong> +44 1234 567890
            </p>

            <p>
              <strong>Address:</strong> London, United Kingdom
            </p>

          </div>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-xl p-6 space-y-4"
        >

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="bg-black text-white w-full cursor-pointer p-3 rounded-lg hover:bg-indigo-600 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}