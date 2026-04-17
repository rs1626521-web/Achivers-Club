import React, { useState } from "react";

export default function AchieversClubWebsite() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      age: form.age.value.trim(),
      location: form.location.value.trim(),
      email: form.email.value.trim(),
      reason: form.reason.value.trim(),
    };

    // ✅ Phone validation
    if (!/^(?:\+91|0)?[6-9]\d{9}$/.test(data.phone)) {
      alert("Enter valid Indian mobile number");
      setLoading(false);
      return;
    }

    // ✅ Age validation
    if (Number(data.age) < 18) {
      alert("You must be 18+");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyNbX6U3hYbcRlBvMGoE4VaSKVIS_hRbhJK9sFYBSn7A8qx2AP3FSkA8iQ7EzPy0Vt3bw/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result.result === "success") {
        alert("Application submitted successfully!");
        form.reset();

        // 🎥 Open video after submit
        window.open("https://www.youtube.com/", "_blank");
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (error) {
      alert("Something went wrong while submitting the form.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      
      {/* 🔥 Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 text-red-500">
        Apply Now - Achievers Club
      </h1>

      {/* ✅ FORM */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-5">

        <input
          name="name"
          required
          placeholder="Full Name"
          className="w-full p-4 rounded bg-gray-800"
        />

        <input
          name="phone"
          required
          placeholder="Phone (e.g. 9876543210 or +919876543210)"
          className="w-full p-4 rounded bg-gray-800"
        />

        <input
          name="age"
          type="number"
          min="18"
          required
          placeholder="Age (18+)"
          className="w-full p-4 rounded bg-gray-800"
        />

        <input
          name="location"
          required
          placeholder="City / State"
          className="w-full p-4 rounded bg-gray-800"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="w-full p-4 rounded bg-gray-800"
        />

        <textarea
          name="reason"
          required
          placeholder="Why do you want to join?"
          className="w-full p-4 rounded bg-gray-800"
        />

        <button
          disabled={loading}
          className="w-full bg-red-500 py-4 rounded font-bold hover:bg-red-600 transition"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>

      </form>

      {/* 📲 WhatsApp Button */}
      <a
        href="https://wa.me/919828264432"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white font-bold"
      >
        💬
      </a>

    </div>
  );
}
