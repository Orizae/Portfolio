'use client'

import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div id='top'>
      {loading ? <div className='justify-center text-center items-center mx-auto text-2xl relative top-[50vh]'>Cargando...</div> :
        <div className="relative overflow-hidden min-h-screen font-[family-name:var(--font-geist-sans)]">
          <Navbar />

          <main className="flex flex-col relative items-center mx-auto max-w-screen-2xl">
            <Card />
            <About />
            <Experience />
            <Projects />
          </main>
          <Footer />
        </div>
      }
    </div>

  );
}
