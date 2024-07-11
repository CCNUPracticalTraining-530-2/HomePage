'use client';

import Approach from '@/common/components/Approach';
import Clients from '@/common/components/Clients';
import Experience from '@/common/components/Experience';
import Footer from '@/common/components/Footer';
import Grid from '@/common/components/Grid';
import Hero from '@/common/components/Hero';
import RecentProjects from '@/common/components/RecentProjects';
import { FloatingNav } from '@/common/components/ui/FloatingNavbar';
import { navItems } from '@/common/data';

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
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
