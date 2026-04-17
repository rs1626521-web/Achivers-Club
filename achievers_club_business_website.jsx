import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

function InstagramIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function AchieversClubWebsite() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const age = Number(form.age.value);
    const phone = form.phone.value.trim();

    if (!/^[6789]\d{9}$/.test(phone)) {
      alert('The Mobile Number is not correct');
      return;
    }

    if (age < 18) {
      alert('Please try again after you get 18. Thank you.');
      return;
    }

    const formData = {
      name: form.name.value,
      phone,
      age,
      location: form.location.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyNbX6U3hYbcRlBvMGoE4VaSKVIS_hRbhJK9sFYBSn7A8qx2AP3FSkA8iQ7EzPy0Vt3bw/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      form.reset();
      alert('Application submitted successfully!');
      setShowVideoModal(true);
    } catch (error) {
      alert('Something went wrong while submitting the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[35rem] h-[35rem] bg-red-700/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-red-500/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 py-16 gap-14">
        <div className="flex-1 max-w-3xl">
          <p className="text-red-400 uppercase tracking-[0.35em] text-sm mb-4 font-semibold">Welcome To Achievers Club</p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-red-500">Achievers Club</span><br />
            <span className="text-white">Community</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-2xl mb-8 leading-relaxed">
            Empowering People To Build Income From Home With Digital Skills, Mentorship & Proven Systems.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#apply" className="px-8 py-4 bg-red-600 rounded-2xl font-semibold hover:bg-red-500 transition shadow-lg shadow-red-500/30">Tap To Grow</a>
            <a href="https://instagram.com/mr_rahul.creates" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-red-500 rounded-2xl font-semibold flex items-center gap-3 hover:bg-red-500/10 transition">
              <InstagramIcon size={20} /> Instagram
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {['15K+ Members', '8K+ Success Stories', '24/7 Support'].map((item) => (
              <div key={item} className="bg-zinc-900/80 border border-red-500/20 rounded-2xl px-5 py-4 flex items-center gap-3">
                <CheckCircle className="text-red-400" size={18} />
                <span className="text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img src="/rahul.jpg" alt="Rahul Kumar Soni" className="rounded-3xl w-[340px] md:w-[450px] object-cover border border-red-500/20 shadow-2xl" />
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="/rahul.jpg" alt="Rahul Kumar Soni" className="rounded-3xl w-full max-w-md mx-auto border border-red-500/20" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">Meet Rahul Kumar Soni</h2>
            <p className="text-zinc-300 text-lg mb-4">I am Rahul Kumar Soni from Sikar, Rajasthan. I started my journey at 19 with one mission — to become financially independent.</p>
            <p className="text-zinc-300 text-lg mb-4">Through Achievers Club, I learned digital skills and built a life of growth and freedom.</p>
            <p className="text-red-400 text-xl font-semibold">Today I help others do the same.</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ['15K+','Community Members'],
              ['8K+','Success Stories'],
              ['24/7','Mentor Support'],
              ['100+','Training Sessions']
            ].map(([num,label]) => (
              <div key={label} className="bg-zinc-900 border border-red-500/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-red-500">{num}</div>
                <div className="text-zinc-400 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Students earning their first online income within weeks.',
              'Members building side income while studying.',
              'Beginners learning digital skills from zero.'
            ].map((story) => (
              <div key={story} className="bg-zinc-900 border border-red-500/20 rounded-2xl p-6 text-zinc-300">{story}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-12">Other Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Personal Mentorship','Brand Building','Digital Skill Training','Income Strategy','Networking Access','Growth Coaching'].map((service) => (
              <div key={service} className="bg-zinc-900 border border-red-500/20 rounded-2xl p-6 text-center font-semibold">{service}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ['Do I need experience?', 'No. We train complete beginners from scratch.'],
              ['How much time is needed?', '1–2 focused hours daily is enough for most starters.'],
              ['Will I get mentorship?', 'Yes, direct support and guidance is provided.'],
              ['Is this mobile friendly?', 'Yes, you can learn and work using your smartphone.']
            ].map(([q,a]) => (
              <div key={q} className="bg-zinc-900 border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">{q}</h3>
                <p className="text-zinc-400">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto bg-zinc-900/80 border border-red-500/20 rounded-3xl p-8 md:p-10">
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6 text-center">Apply To Join Achievers Club</h2>
          <form onSubmit={handleLeadSubmit} className="grid md:grid-cols-2 gap-4">
            <input type="text" name="name" required placeholder="Full Name" className="bg-black border border-zinc-700 rounded-xl px-4 py-3" />
            <input type="tel" name="phone" required placeholder="Phone Number" className="bg-black border border-zinc-700 rounded-xl px-4 py-3" />
            <input type="number" name="age" required min="1" placeholder="Age" className="bg-black border border-zinc-700 rounded-xl px-4 py-3" />
            <input type="text" name="location" required placeholder="Location" className="bg-black border border-zinc-700 rounded-xl px-4 py-3" />
            <input type="email" name="email" required placeholder="Email Address" className="md:col-span-2 bg-black border border-zinc-700 rounded-xl px-4 py-3" />
            <textarea name="message" rows="4" placeholder="Why do you want to join?" className="md:col-span-2 bg-black border border-zinc-700 rounded-xl px-4 py-3" />
            <button type="submit" className="md:col-span-2 bg-red-600 hover:bg-red-500 rounded-2xl py-4 font-semibold text-lg">Submit Application</button>
          </form>
        </div>
      </section>

      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-zinc-900 border border-red-500/20 rounded-3xl max-w-4xl w-full overflow-hidden relative">
            <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-10 bg-black/70 px-3 py-1 rounded-full">✕</button>
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Welcome Video" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
}
