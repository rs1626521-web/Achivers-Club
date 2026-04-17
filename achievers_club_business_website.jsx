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

    if (!/^(?:\+91|0)?[6-9]\d{9}$/.test(phone)) {
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
      await fetch("https://script.google.com/macros/s/AKfycbyNbX6U3hYbcRlBvMGoE4VaSKVIS_hRbhJK9sFYBSn7A8qx2AP3FSkA8iQ7EzPy0Vt3bw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

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
          Build Income. Build Freedom. Join a community of 15K+ members.
        </p>
        <p className="mt-4 text-green-400 font-semibold text-lg">
          100% FREE TO JOIN
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#apply"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            Apply Now
          </a>

          <a
            href="https://www.instagram.com/mr_rahul.creates/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-gray-800 to-black border border-gray-600 shadow-xl hover:from-pink-600 hover:to-red-600 hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">📸</span> Instagram
          </a>
        </div>

      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img src="/rahul.jpg" alt="Rahul" className="rounded-2xl shadow-2xl w-full" />
        <div>
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            Rahul Kumar Soni (Sikar, Rajasthan)
          </h2>
          <p className="text-gray-300 text-lg">
            I started my journey at 19 with a goal to become financially independent.
            Today, I help students and individuals build income using digital skills,
            mentorship, and proven systems.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 md:px-20 py-16 text-center">
        <h2 className="text-4xl text-red-500 font-bold mb-12">WE PROVIDES</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">🚀 15K+ Members</div>
          <div className="bg-gray-900 p-6 rounded-xl">📈 8K+ Success Stories</div>
          <div className="bg-gray-900 p-6 rounded-xl">💼 Digital Skills</div>
          <div className="bg-gray-900 p-6 rounded-xl">🧑‍💻 24/7 Support</div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-10">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">"I started at 19 and now I earn monthly online."</div>
          <div className="bg-gray-900 p-6 rounded-xl">"I support my family using digital skills."</div>
          <div className="bg-gray-900 p-6 rounded-xl">"Best decision of my life joining Achievers Club."</div>
          <div className="bg-gray-900 p-6 rounded-xl">"Within 3 months I started earning ₹25,000/month."</div>
          <div className="bg-gray-900 p-6 rounded-xl">"I learned skills that changed my mindset and income."</div>
          <div className="bg-gray-900 p-6 rounded-xl">"From zero to financial independence journey started here."</div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="px-6 md:px-20 py-20 text-center">
        <h2 className="text-4xl text-red-500 font-bold mb-10">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">💰 10M+ Earnings Generated</div>
          <div className="bg-gray-900 p-6 rounded-xl">🎓 5000+ Students Trained</div>
          <div className="bg-gray-900 p-6 rounded-xl">🌍 PAN India Reach</div>
          <div className="bg-gray-900 p-6 rounded-xl">📊 Proven Growth System</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-10">Other Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">Digital Marketing Training</div>
          <div className="bg-gray-900 p-6 rounded-xl">Personal Mentorship</div>
          <div className="bg-gray-900 p-6 rounded-xl">Online Income Systems</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-10">FAQ</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="bg-gray-900 p-4 rounded">Is it free? → Yes, 100% free to join.</div>
          <div className="bg-gray-900 p-4 rounded">Do I need experience? → No, beginners welcome.</div>
          <div className="bg-gray-900 p-4 rounded">How much can I earn? → Depends on your effort.</div>
          <div className="bg-gray-900 p-4 rounded">Is support available? → Yes, 24/7 guidance.</div>
        </div>
      </section>

      {/* FORM (RESTORED AT END) */}
      <section id="apply" className="px-6 md:px-20 py-20">
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
              title="YouTube video"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="mt-4 bg-red-500 px-6 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919828264432"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 24 24"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.42 0 .06 5.36.06 12c0 2.12.56 4.19 1.62 6.01L0 24l6.17-1.62A11.94 11.94 0 0 0 12.05 24c6.63 0 12-5.36 12-12 0-3.2-1.25-6.2-3.53-8.52zM12.05 22c-1.86 0-3.67-.5-5.26-1.45l-.38-.22-3.66.96.98-3.57-.25-.37A9.94 9.94 0 0 1 2.06 12c0-5.51 4.48-10 10-10s10 4.49 10 10-4.49 10-10 10zm5.5-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
      </a>

    </div>
  );
}
