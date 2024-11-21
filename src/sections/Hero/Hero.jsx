import styles from './HeroStyles.module.css';
import heroImg from '../../assets/picofme (2).png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import stackOverflowLight from '../../assets/stack-overflow-light.svg';
import stackOverflowDark from '../../assets/stack-overflow-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [text] = useTypewriter({
    words: ['Full-stack developer', 'tech enthusiast', 'crypto trader'],
    loop: {},
    delaySpeed: 2000,
    cursorBlink: true,
  })

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const stackOverflowIcon = theme === 'light' ? stackOverflowLight : stackOverflowDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Udara Sandaruwan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Udara
          <br />
          Sandaruwan
        </h1>


        <h2><span style={{ fontWeight: 'bold' }}>I&apos;am</span>
          <span>
            <span style={{ color: '#00FF2C', margin: '0 -30px' }}>
              {text}
              <span className={styles.cursor} style={{ margin: '0 -30px' }}>
                <Cursor />
              </span>
            </span>
          </span>
        </h2>

        <span>
          <a href="https://x.com/sadaruvan_udara" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/udarasadaruwan" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/udara-sandaruwan-ug0002/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://stackoverflow.com/users/24668489/udara-sandaruwan" target="_blank">
            <img src={stackOverflowIcon} alt="stackOverflow icon" />
          </a>
        </span>
        <p className={styles.description}>
          Building scalable web solutions with expertise in both front-end and back-end development.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
