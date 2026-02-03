export default function CTA() {
  return (
    <section id="contact" className="animate-fade-up bg-slate-900 py-24 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Book a 1-on-1 Tutoring Session
        </h2>

        <p className="text-lg text-slate-300 mb-10">
          Get personalized guidance in programming, computer science,
          AI, and data science. Book a free consultation or a tutoring
          session directly on my calendar.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://calendar.app.google/8kq1W2Y9NMXjVdP58"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-[1.02]"
          >
            Book a Session
          </a>

          <a
            href="mailto:your-email@gmail.com"
            className="border border-white/30 px-8 py-4 rounded-lg
                      transition transform hover:scale-[1.02]
                      hover:bg-white hover:text-slate-900"
          >
            Contact via Email
          </a>

        </div>

      </div>
    </section>
  );
}
