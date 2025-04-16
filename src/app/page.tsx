import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Vizitka from '@/components/Vizitka';
import Showreel from '@/components/Showreel';
import Interview from '@/components/Interview';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Vizitka />
      <Showreel />
      <Interview />
      <Contact />
    </main>
  );
}
