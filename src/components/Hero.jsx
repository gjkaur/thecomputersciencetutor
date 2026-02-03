export default function Hero() {
  return (
      <section
        id="home"
        className="animate-fade-up min-h-screen pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center"
      >
      <div className="max-w-4xl text-center px-6">
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Computer Science Tutor in Canada
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10">
          Dr. Gurinderjeet Kaur — PhD in Computer Science <br />
          Programming • AI • Data Science • Job-Ready Training
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold transition">
            Programming Tutoring
          </button>

          <button className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition">
            AI & Data Science
          </button>
        </div>

      </div>
    </section>
  );
}
