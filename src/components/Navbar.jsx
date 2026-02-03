export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <a
          href="#home"
          className="text-white font-bold text-lg"
        >
          Dr. Kaur
        </a>

        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-200">
          <a href="#subjects" className="hover:text-white">Subjects</a>
          <a href="#services" className="hover:text-white">Why Choose Me</a>
          <a href="#contact" className="hover:text-white">Book Session</a>
        </div>

      </nav>
    </header>
  );
}
