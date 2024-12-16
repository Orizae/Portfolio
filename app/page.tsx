import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id='top' className="relative overflow-hidden min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="flex flex-col relative items-center mx-auto max-w-screen-2xl">
        <Card />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
