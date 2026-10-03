import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
import ElegantDarkPattern from "../components/ui/ElegantDarkPattern";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <ElegantDarkPattern />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />

          {/* Divider */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-white/[0.05]" />
          </div>

          <About />

          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-white/[0.05]" />
          </div>

          <Skills />

          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-white/[0.05]" />
          </div>

          <Certifications />

          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-white/[0.05]" />
          </div>

          <Projects />

          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-white/[0.05]" />
          </div>

          <Experience />

          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-white/[0.05]" />
          </div>

          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
