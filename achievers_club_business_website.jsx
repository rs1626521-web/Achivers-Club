import React, { useState } from "react";

export default function AchieversClubWebsite() {
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const phone = form.phone.value.trim();
    const age = Number(form.age.value);

    if (!/^[6789]\d{9}$/.test(phone)) {
      alert("Enter valid Indian mobile number");
      setLoading(false);
      return;
    }

    if (age < 18) {
      alert("You must be 18+");
      setLoading(false);
      return;
    }

    const data = {
      name: form.name.value,
      phone,
      age,
      location: form.location.value,
      email: form.email.value,
      reason: form.reason.value,
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyNbX6U3hYbcRlBvMGoE4VaSKVIS_hRbhJK9sFYBSn7A8qx2AP3FSkA8iQ7EzPy0Vt3bw/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.result !== "success") throw new Error("Submission failed");

      alert("Application Submitted Successfully!");
      form.reset();

      window.open(`https://wa.me/919828264432?text=Hi Rahul, I just applied. My name is ${data.name}`, "_blank");
      setShowVideo(true);
    } catch (err) {
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold text-red-500">
          Achievers Club
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Build Income. Build Freedom. Join a community of 15K+ members learning digital skills.
        </p>
        <p className="mt-4 text-green-400 font-semibold text-lg">
          100% FREE TO JOIN
        </p>
      </section>

      {/* HIGHLIGHT IMPACT (Premium) */}
      <section className="px-6 md:px-20 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-10">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["15K+", "Active Members"],
            ["8K+", "Success Stories"],
            ["24/7", "Mentor Support"],
            ["100+", "Live Trainings"]
          ].map(([num, label]) => (
            <div key={label} className="bg-gradient-to-br from-red-500/20 to-black border border-red-500/20 p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-red-400">{num}</div>
              <div className="text-gray-400 mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img src="/rahul.jpg" className="rounded-2xl shadow-2xl w-full" />
        <div>
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            Rahul Kumar Soni (Sikar, Rajasthan)
          </h2>
          <p className="text-gray-300 text-lg">
            I started at 19 with zero income. Today, I help students build income using digital skills.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl text-red-500 font-bold text-center mb-10">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">"Earned my first ₹5000 online"</div>
          <div className="bg-gray-900 p-6 rounded-xl">"Now I support my parents"</div>
          <div className="bg-gray-900 p-6 rounded-xl">"Changed my life completely"</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl text-red-500 font-bold text-center mb-10">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Digital Skills Training",
            "Personal Mentorship",
            "Income System",
            "Daily Guidance",
            "Community Access",
            "Live Sessions",
            "Mindset Training",
            "Brand Building",
            "Networking Opportunities"
          ].map((item) => (
            <div key={item} className="bg-gray-900 p-6 rounded-xl">{item}</div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl text-red-500 font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            ["Is this really free?", "Yes, 100% free to join."],
            ["Can beginners join?", "Yes, complete beginners are welcome."],
            ["How much time is required?", "1–2 hours daily is enough."],
            ["Will I get support?", "Yes, 24/7 mentorship is available."],
            ["Do I need a laptop?", "No, mobile is enough."],
            ["Is income guaranteed?", "Results depend on your effort."],
            ["What will I learn?", "Digital skills, marketing & earning methods."],
            ["How do I start?", "Fill the form and follow guidance."],
            ["Is there any hidden charge?", "No hidden charges at all."],
          ].map(([q, a]) => (
            <div key={q} className="bg-gray-900 p-4 rounded-xl">
              <p className="font-semibold text-white">{q}</p>
              <p className="text-gray-400 mt-1">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-12">Apply Now</h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-5">
          <input name="name" required placeholder="Full Name" className="w-full p-4 rounded bg-gray-800" />
          <input name="phone" required placeholder="Phone Number" className="w-full p-4 rounded bg-gray-800" />
          <input name="age" required placeholder="Age" className="w-full p-4 rounded bg-gray-800" />
          <input name="location" required placeholder="Location" className="w-full p-4 rounded bg-gray-800" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-4 rounded bg-gray-800" />
          <textarea name="reason" required placeholder="Why do you want to join?" className="w-full p-4 rounded bg-gray-800" />

          <button disabled={loading} className="w-full bg-red-500 py-4 rounded font-bold">
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>

      {/* VIDEO */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-black p-4 rounded-xl w-[95%] md:w-[800px]">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/Yz_iY_Wo3y0"
              allowFullScreen
            />
            <button onClick={() => setShowVideo(false)} className="mt-4 bg-red-500 px-6 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {/* WHATSAPP */}
      <a href="https://wa.me/919828264432" target="_blank" className="fixed bottom-6 right-6 bg-green-500 px-6 py-3 rounded-full shadow-xl">
        Chat on WhatsApp
      </a>

    </div>
  );
}
