import Hero from '../components/Hero';
import About from '../components/About';
import Bots from '../components/Bots';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  return (
    <>
      <Navigation />
      <LanguageSwitcher />
      <div className="min-h-screen">
        <Hero />
        <About />
        <Bots />
        <Contact />
      </div>
    </>
  );
} 