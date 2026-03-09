import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Security } from '@/components/Security';
import { Roadmap } from '@/components/Roadmap';
import { Feasibility } from '@/components/Feasibility';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Security />
        <Roadmap />
        <Feasibility />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
