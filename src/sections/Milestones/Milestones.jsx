import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaSchool,
} from "react-icons/fa";
import styles from "./MilestonesStyles.module.css";

const milestones = [
  {
    date: "Now",
    title: "Building Scalable Web Solutions",
    status: "Self Study + Production Mindset",
    organization: "Full-stack development path",
    description:
      "Focused on polished user experiences, clean APIs, automation, modern web tooling, and continuous improvement through hands-on projects.",
    icon: FaLaptopCode,
  },
  {
    date: "January, 2023",
    title: "Bachelor of Applied Information Technology",
    status: "Undergraduate",
    organization: "SLTC Research University",
    description:
      "Studying applied information technology with a focus on software development, cloud computing, cybersecurity, and practical product-building skills.",
    icon: FaGraduationCap,
  },
  {
    date: "October, 2020",
    title: "G.C.E. (A/L) Examination",
    status: "Passed",
    organization: "V/Agrabodhi M.V",
    description:
      "Completed the Sri Lankan Advanced Level qualification, a key entry requirement for Sri Lankan state universities and comparable to the British Advanced Level.",
    icon: FaGraduationCap,
  },
  {
    date: "December, 2017",
    title: "G.C.E. (O/L) Examination",
    status: "Passed",
    organization: "V/Agrabodhi M.V",
    description:
      "Completed the Sri Lankan Ordinary Level examination, a GCE qualification under the Ministry of Education Sri Lanka and proof of secondary education completion.",
    icon: FaSchool,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

function Milestones() {
  return (
    <section className={styles.container}>
      <div className={styles.headingBlock}>
        <p className={styles.eyebrow}>Progress timeline</p>
        <h2 className="sectionTitle">Milestones</h2>
        <p className={styles.intro}>
          Education, degree progress, and the current path toward polished
          full-stack product building.
        </p>
      </div>

      <motion.div
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          const sideClass = index % 2 === 0 ? styles.right : styles.left;

          return (
            <motion.article
              className={`${styles.timelineItem} ${sideClass}`}
              variants={itemVariants}
              key={milestone.title}
            >
              <div className={styles.marker}></div>
              <div className={styles.date}>
                <FaCalendarAlt />
                <span>{milestone.date}</span>
              </div>
              <motion.div
                className={styles.card}
                whileHover={{ y: -6, transition: { duration: 0.24 } }}
              >
                <h2>
                  <Icon />
                  <span>{milestone.title}</span>
                </h2>
                <h3>{milestone.status}</h3>
                <p className={styles.organization}>
                  <FaSchool />
                  <span>{milestone.organization}</span>
                </p>
                <p>{milestone.description}</p>
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Milestones;
