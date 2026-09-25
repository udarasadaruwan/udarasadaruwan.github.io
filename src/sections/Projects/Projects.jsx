import styles from "./ProjectsStyles.module.css";
import studio from "../../assets/studio.png";
import helaeats from "../../assets/helaeats.png";
import zovex from "../../assets/zovex.png";
import dadukata from "../../assets/dadukata.png";
// import demo from "../../assets/demo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  const projects = [
    {
      src: studio,
      liveLink: "https://udarasadaruwan.github.io/studio/",
      codeLink: "https://github.com/udarasadaruwan/studio",
      h3: "Studio",
      p: "A polished demo website with a modern frontend flow.",
      tags: ["HTML", "CSS", "Bootstrap"],
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
