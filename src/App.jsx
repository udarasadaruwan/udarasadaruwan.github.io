import "./App.css";
import Navbar from "./sections/Header/Navbar";
import Hero from "./sections/Hero/Hero";
import Milestones from "./sections/Milestones/Milestones";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import UpArrow from "./sections/UpArrow/UpArrow";
import ReactGA from "react-ga4";
import PropTypes from "prop-types";
import { useEffect } from "react";

ReactGA.initialize("G-2CHEKCEGQV");
ReactGA.send("pageview");

function Section({ id, children }) {
  const { ref, inView } = useInView({
    threshold: 0.04,
    rootMargin: "120px 0px 80px 0px",
  });

  useEffect(() => {
    if (inView) {
      ReactGA.event({
        category: "Section",
        action: "Viewed",
        label: id,
      });
    }
  }, [id, inView]);

  return (
    <motion.div
      id={id}
      ref={ref}
      className={`section ${inView ? "animate" : ""}`}
      initial={{ opacity: 0, y: 72, scale: 0.97, filter: "blur(10px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 72, scale: 0.97, filter: "blur(10px)" }
      }
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <div className="siteFrame">
      <Navbar />
      <main className="appShell">
        <Section id="hero">
          <Hero />
        </Section>
        <Section id="milestones">
          <Milestones />
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
      </main>
      <Footer />
      <UpArrow />
    </div>
  );
}

export default App;
