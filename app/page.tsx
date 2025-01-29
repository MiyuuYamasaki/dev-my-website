import Hero from '../components/main/Hero';
import Projects from '../components/main/Projects';
import AboutMe from '../components/main/AboutMe';
import SampleHP from '../components/main/SampleHP';
import Contact from '../components/main/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Projects />
      <AboutMe />
      <SampleHP />
      <Contact />
    </main>
  );
}
