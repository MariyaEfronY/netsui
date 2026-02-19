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
import ScrollProvider from '@/components/ScrollProvider';
import ScrollHUD from '@/components/ScrollHUD';

export default function Home() {
  return (
    <ScrollProvider>
      {/* Remove any horizontal padding from main to allow edge-to-edge content */}
      <main className="relative w-full min-h-screen bg-[#020617] overflow-x-hidden">
        <Navbar />
        <ScrollHUD />

        <section id="home" className="w-full">
          <Hero />
        </section>

        <BackgroundWrapper>
          {/* Ensure the flex container doesn't have a max-width */}
          <div className="flex flex-col w-full">
            <section id="manifesto" className="w-full">
              <Manifesto />
            </section>

            <section id="leadership" className="w-full">
              <Leadership />
            </section>

            <section id="philosophy" className="w-full">
              <Philosophy />
            </section>

            <section id="services" className="w-full">
              <Services />
            </section>

            <OperatingSystem />
          </div>

          <div className="w-full">
            <Contact />
          </div>
        </BackgroundWrapper>

        <Footer />
        <ViewCounter />
      </main>
    </ScrollProvider>
  );
}