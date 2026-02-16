import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Leadership from '@/components/Leadership';
import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';
import OperatingSystem from '@/components/OperatingSystem';
import BackgroundWrapper from '@/components/BackgroundWrapper';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import ViewCounter from '@/components/ViewCounter';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 1. Navigation remains fixed at the top */}
      <Navbar />

      {/* 2. Hero Section: Entry Point */}
      <section id="home">
        <Hero />
      </section>

      {/* 3. The Animated Content Core */}
      <BackgroundWrapper>
        <div className="flex flex-col">

          <section id="manifesto">
            <Manifesto />
          </section>

          <section id="leadership">
            <Leadership />
          </section>

          <section id="philosophy">
            <Philosophy />
          </section>

          <section id="services">
            <Services />
          </section>

          {/* The Operating System acts as the closing verification */}
          <OperatingSystem />

        </div>
        <div>
          <Contact />
        </div>
      </BackgroundWrapper>

      {/* 4. Deep Blue Foundation Footer */}
      <Footer />
      <ViewCounter />
    </main>
  );
}