import styles from "./ProjectsStyles.module.css";
import helaeats from "../../assets/helaeats.png";
import zovex from "../../assets/zovex.png";
import dadukata from "../../assets/dadukata.png";
import zerovastecafe from "../../assets/zerowastecafe.png";
// import demo from "../../assets/demo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  const projects = [
    {
      src: zerovastecafe,
      liveLink: "https://udarasadaruwan.github.io/zero-waste-cafe/",
      codeLink: "https://github.com/udarasadaruwan/zero-waste-cafe",
      h3: "Zero waste cafe",
      p: "Zero Waste Cafe is a responsive restaurant website built for a low-budget startup cafe to showcase its brand, menu, and WhatsApp-based table reservation flow. I designed and developed the frontend with a clean eco-friendly UI, reusable CSS color variables, and mobile-friendly layouts.",
      tags: [
        "HTML",
        "CSS",
        "javascript",
        "Responsive Design",
        "UI/UX Design",
        "Media Queries",
        "whatsapp integration",
      ],
    },
    {
      src: helaeats,
      liveLink: "https://udarasadaruwan.github.io/hela-eats-frontend/#/",
      codeLink: "https://github.com/udarasadaruwan/hela-eats-frontend",
      h3: "Hela Eats",
      p: "Hela Eats is a personalized Recipe-to-Cart Platform , I contribute as the Frontend Developer for this project",
      tags: [
        "React",
        "Typescript",
        "Tailwind Css",
        "Express",
        "Node.js",
        "MongoDB",
        "stripe",
        "cloudinary",
      ],
    },
    {
      src: zovex,
      liveLink: "https://udarasadaruwan.github.io/zovex-frontend/",
      codeLink: "https://github.com/udarasadaruwan/zovex-frontend",
      h3: "Zovex",
      p: "Zovex is a full-stack ecommerce marketplace with Stripe payments, Google OAuth, and role-based dashboards for customers, sellers, and admins.",
      tags: [
        "React",
        "Typescript",
        "Express",
        "Node.js",
        "MongoDB",
        "stripe",
        "cloudinary",
      ],
    },
    {
      src: dadukata,
      liveLink: "https://udarasadaruwan.github.io/dadukata-game/",
      codeLink: "https://github.com/udarasadaruwan/dadukata-game",
      h3: "Dadukata",
      p: "Dadukata is a realtime multiplayer Snakes & Ladders game built with React, TypeScript, and Firebase.",
      tags: [
        "Node.js",
        "React",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "Motion",
      ],
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.headingBlock}>
        <p className={styles.eyebrow}>Selected work</p>
        <h2 className="sectionTitle">Projects</h2>
        <p className={styles.intro}>
          A focused collection of practical builds and interface experiments.
        </p>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard key={project.h3} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
