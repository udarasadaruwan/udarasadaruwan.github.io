import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/picofme (2).png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import stackOverflowLight from "../../assets/stack-overflow-light.svg";
import stackOverflowDark from "../../assets/stack-overflow-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [text] = useTypewriter({
    words: [
      "Full-stack developer",
      "tech enthusiast",
      "Mobile photographer",
      "Devops Enthusiast",
    ],
    loop: {},
    delaySpeed: 2000,
    cursorBlink: true,
  });

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const stackOverflowIcon =
    theme === "light" ? stackOverflowLight : stackOverflowDark;

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.colorModeContainer}
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.imageFrame}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Udara Sandaruwan"
          />
        </div>
        <button
          className={styles.colorMode}
          onClick={toggleTheme}
          aria-label="Toggle color mode"
        >
          <img src={themeIcon} alt="" />
        </button>
      </motion.div>
      <motion.div
        className={styles.info}
        initial={{ opacity: 0, x: -48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.kicker}>Available for modern web projects</p>
        <h1>
          Udara
          <br />
          Sandaruwan
        </h1>

        <h2 className={styles.roleLine}>
          <span>I am</span>
          <strong>
            {text}
            <span className={styles.cursor}>
              <Cursor />
            </span>
          </strong>
        </h2>

        <div className={styles.socials}>
          <a
            href="https://x.com/sadaruvan_udara"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="https://github.com/udarasadaruwan"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/udara-sandaruwan-ug0002/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a
            href="https://stackoverflow.com/users/24668489/udara-sandaruwan"
            target="_blank"
            rel="noreferrer"
          >
            <img src={stackOverflowIcon} alt="stackOverflow icon" />
          </a>
        </div>
        <p className={styles.description}>
          Building scalable, elegant web solutions with care for smooth
          interfaces, reliable backends, and the small details that make digital
          products feel alive.
        </p>
        <div className={styles.actions}>
          <a href={CV} download className={styles.primaryAction}>
            Resume
          </a>
          <a href="#projects" className={styles.secondaryAction}>
            View work
          </a>
        </div>
        <div className={styles.stats}>
          <span>
            <strong>15+</strong> Skills
          </span>
          <span>
            <strong>4</strong> Featured works
          </span>
          <span>
            <strong>Full-stack</strong> Focus
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
