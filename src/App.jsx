import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subjects from "./components/Subjects";
import Services from "./components/Services";
import CTA from "./components/CTA";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="h-px bg-slate-200 my-20 max-w-5xl mx-auto" />

      <Subjects />

      <div className="h-px bg-slate-200 my-20 max-w-5xl mx-auto" />

      <Services />

      <div className="h-px bg-slate-200 my-20 max-w-5xl mx-auto" />

      <CTA />

    </>
  );
}
