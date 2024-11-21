import './App.css';
import Navbar from './sections/Header/Navbar';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import { useInView } from 'react-intersection-observer';
import UpArrow from './sections/UpArrow/UpArrow';

function Section({ id, children }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      id={id}
      ref={ref}
      className={`section ${inView ? 'animate' : ''}`}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
      <UpArrow />
    </div>
  );
}

export default App;
