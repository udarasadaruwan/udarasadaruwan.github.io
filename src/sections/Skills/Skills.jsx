import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import IconCloud from '../../common/iconCloud';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const iconSlugs = [
    'html5',
    'css3',
    'javascript',
    'typescript',
    'nodedotjs',
    'java',
    'mysql',
    'react',
    'angular',
    'tailwindcss',
    'mongodb',
    'mysql',
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
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillCategories}>
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Frontend</h2>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="TypeScript" />
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Angular" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
          </div>
        </div>

        <div className={styles.category}>
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
        </div>

        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Tools & Others</h2>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="GitHub" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
            <SkillList src={checkMarkIcon} skill="SASS" />
          </div>
        </div>
      </div>

      <div className={styles.iconCloud}>
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </section>
  );
}

export default Skills;
