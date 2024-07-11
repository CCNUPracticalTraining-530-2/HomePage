"use client";

import { navItems } from "@/common/data";

import Hero from "@/common/components/Hero";
import Grid from "@/common/components/Grid";
import Footer from "@/common/components/Footer";
import Clients from "@/common/components/Clients";
import Approach from "@/common/components/Approach";
import Experience from "@/common/components/Experience";
import RecentProjects from "@/common/components/RecentProjects";
import { FloatingNav } from "@/common/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
