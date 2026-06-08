import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import IconCloud from '../../common/iconCloud';
import { motion } from 'framer-motion';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const iconSlugs = [
    'html5',
    'css3',
    'javascript',
    'typescript',
    'nodejs',
    'java',
    'mysql',
    'react',
    'angular',
    'tailwindcss',
    'mongodb',
    'firebase',
    'springboot',
    'express',
    'vitejs',
    'git',
    'github',
    'jest',
    'bootstrap',
    'sass',
    'python',
    'intellijidea',
    'visualstudiocode',
  ];

  return (
    <section className={styles.container}>
      <div className={styles.headingBlock}>
        <p className={styles.eyebrow}>Technical toolkit</p>
        <h2 className="sectionTitle">Skills</h2>
        <p className={styles.intro}>
          A practical stack for designing interfaces, building APIs, and
          shipping responsive web experiences.
        </p>
      </div>

      <div className={styles.skillCategories}>
        <motion.div className={styles.category} whileHover={{ y: -8 }}>
          <h2 className={styles.categoryTitle}>Frontend</h2>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="TypeScript" />
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="React Native" />
            <SkillList src={checkMarkIcon} skill="Angular" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
          </div>
        </motion.div>

        <motion.div className={styles.category} whileHover={{ y: -8 }}>
          <h2 className={styles.categoryTitle}>Backend</h2>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Node.js" />
            <SkillList src={checkMarkIcon} skill="Java" />
            <SkillList src={checkMarkIcon} skill="Spring Boot" />
            <SkillList src={checkMarkIcon} skill="Express.js" />
            <SkillList src={checkMarkIcon} skill="Firebase" />
            <SkillList src={checkMarkIcon} skill="MongoDB" />
            <SkillList src={checkMarkIcon} skill="MySQL" />
          </div>
        </motion.div>

        <motion.div className={styles.category} whileHover={{ y: -8 }}>
          <h2 className={styles.categoryTitle}>Tools & Others</h2>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="GitHub" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
            <SkillList src={checkMarkIcon} skill="SASS" />
            <SkillList src={checkMarkIcon} skill="IntelliJ IDEA Ultimate" />
            <SkillList src={checkMarkIcon} skill="VS Code" />
          </div>
        </motion.div>
      </div>

      <div className={styles.iconCloud}>
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </section>
  );
}

export default Skills;
