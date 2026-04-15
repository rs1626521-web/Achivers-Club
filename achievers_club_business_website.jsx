import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

function InstagramIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-2.63-3.74 4 4 0 0 1 2.63 3.74z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function AchieversClubWebsite() {
  const [showAgeModal, setShowAgeModal] = React.useState(false);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const age = Number(form.age.value);

    if (age < 18) {
      setShowAgeModal(true);
      return;
    }

    window.open('https://wa.me/919828264432', '_blank');
    form.submit();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-zinc-800 px-6 md:px-20 py-4 flex justify-between items-center">
        <a href="#top" className="text-xl font-bold text-red-500">Achievers Club</a>
        <div className="flex gap-6 text-sm md:text-base text-zinc-300">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
          <a href="https://wa.me/919828264432" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
      </nav>

      <section id="top" className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-20 gap-10">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-red-500 mb-4">Achievers Club Community</h1>
          <p className="text-xl text-zinc-300">Empowering People to Build Income From Home.</p>
          <div className="flex gap-4 mt-8">
            <a href="https://wa.me/919828264432" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-red-600 rounded-2xl flex items-center gap-2">
              <MessageCircle size={20}/> Tap to Chat
            </a>
            <a href="https://instagram.com/mr_rahul.creates" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-red-500 rounded-2xl flex items-center gap-2">
              <InstagramIcon size={20}/> Instagram
            </a>
          </div>
        </motion.div>

<div className="flex justify-center">
  <img
    src="/rahul.png"
    alt="Rahul Soni"
    className="w-80 md:w-96 rounded-3xl shadow-2xl border border-red-500/20 object-cover"
  />
</div>
      </section>

      <section id="about" className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-red-500 mb-4">About Achievers Club</h2>
            <p className="text-zinc-300 leading-relaxed">Achievers Club Community helps ambitious individuals create income opportunities from home through mentorship, digital systems, and proven guidance. Our mission is to empower people to build financial freedom using modern online tools.</p>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8">
            <p className="text-red-400 font-semibold text-lg">"Dream Big. Start Smart. Achieve More."</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 md:px-20 bg-zinc-950/60">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['Work From Home Opportunity','Business Mentorship','Digital Marketing Training','Personal Branding','Community Support','Growth Strategies'].map((service, i) => (
            <div key={i} className="bg-zinc-900/60 border border-red-500/10 rounded-2xl p-6 hover:scale-105 transition">
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'I started with zero experience and now earn consistently from home.',
            'The mentorship here helped me build confidence and income online.',
            'This community changed the way I think about financial growth.'
          ].map((quote, i) => (
            <div key={i} className="bg-zinc-900/60 border border-red-500/10 rounded-2xl p-6 italic text-zinc-300">"{quote}"</div>
          ))}
        </div>
      </section>

      <section id="stats" className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {[
            { number: '500+', label: 'Community Members' },
            { number: '100+', label: 'Success Stories' },
            { number: '24/7', label: 'Mentorship Support' }
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-zinc-900/60 border border-red-500/10 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold text-red-400">{stat.number}</h3>
              <p className="text-zinc-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-20 px-6 md:px-20 bg-zinc-950/60">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            ['How do I start?', 'Fill the form below or contact on WhatsApp to begin.'],
            ['Do I need experience?', 'No, full training and mentorship are provided.'],
            ['Can I work from anywhere?', 'Yes, you can work from anywhere with your smartphone.']
          ].map(([q,a], i) => (
            <div key={i} className="bg-zinc-900/60 border border-red-500/10 rounded-2xl p-6">
              <h3 className="font-semibold text-red-400 mb-2">{q}</h3>
              <p className="text-zinc-300">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="lead-form" className="py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto bg-black border border-red-500/20 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-red-500 mb-4 text-center">Get Started Today</h2>
          <form action="https://formsubmit.co/rs1626521@gmail.com" method="POST" onSubmit={handleLeadSubmit} className="grid md:grid-cols-2 gap-4">
            <input type="text" name="name" required placeholder="Your Name" className="bg-zinc-900 rounded-xl px-4 py-3" />
            <input type="tel" name="phone" required placeholder="Phone Number" className="bg-zinc-900 rounded-xl px-4 py-3" />
            <input type="number" name="age" required min="1" placeholder="Your Age" className="bg-zinc-900 rounded-xl px-4 py-3" />
            <input type="text" name="location" placeholder="Your Location" className="bg-zinc-900 rounded-xl px-4 py-3" />
            <input type="email" name="email" placeholder="Email Address (Optional)" className="md:col-span-2 bg-zinc-900 rounded-xl px-4 py-3" />
            <textarea name="message" placeholder="Tell us about your goals" rows="4" className="md:col-span-2 bg-zinc-900 rounded-xl px-4 py-3" />
            <button type="submit" className="md:col-span-2 px-8 py-4 bg-red-600 rounded-2xl font-semibold">Submit Details</button>
          </form>
        </div>
      </section>

      {showAgeModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] px-4">
          <div className="max-w-md w-full bg-zinc-900 border border-red-500/30 rounded-3xl p-8 text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Age Restriction</h3>
            <p className="text-zinc-300 mb-6">Please try again after you get 18. Thank you.</p>
            <button onClick={() => setShowAgeModal(false)} className="px-6 py-3 bg-red-600 rounded-xl font-semibold">Close</button>
          </div>
        </div>
      )}

      <section id="hosting-guide" className="py-20 px-6 md:px-20 bg-zinc-950/40">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-8">Launch Your Website</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            ['Buy Domain', 'Purchase your custom domain from GoDaddy, Namecheap, or Hostinger.'],
            ['Deploy Website', 'Upload your site on Vercel, Netlify, or Hostinger Hosting.'],
            ['Go Live', 'Connect domain and launch your business website publicly.']
          ].map(([title, desc], i) => (
            <div key={i} className="bg-zinc-900/60 border border-red-500/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-2">{title}</h3>
              <p className="text-zinc-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800 mt-10 py-10 px-6 md:px-20 text-center text-zinc-400 text-sm">
        <p>© 2026 Achievers Club Community. All Rights Reserved.</p>
        <p className="mt-2">Privacy Policy • Terms & Conditions • Contact Support</p>
      </footer>

      <a href="https://wa.me/919828264432" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
