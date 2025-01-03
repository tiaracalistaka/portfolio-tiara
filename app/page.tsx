"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Awards from "@/components/Awards";
import About from "@/components/About";

const Home = () => {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <ProjectsSection />
        <Awards />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
