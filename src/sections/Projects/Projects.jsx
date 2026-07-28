import styles from "./ProjectsStyles.module.css";
import studio from "../../assets/studio.png";
import helaeats from "../../assets/helaeats.png";
import zovex from "../../assets/zovex.png";
import demo from "../../assets/demo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  const projects = [
    {
      src: studio,
      link: "https://github.com/udarasadaruwan/studio",
      h3: "Studio",
      p: "A polished demo website with a modern frontend flow.",
      tags: ["HTML", "CSS", "Bootstrap"],
    },
    {
      src: helaeats,
      link: "https://github.com/udarasadaruwan/hela-eats-frontend",
      h3: "Hela Eats",
      p: "Hela Eats is a personalized Recipe-to-Cart Platform , I contribute as the Frontend Developer for this project",
      tags: ["React", "Typescript", "Tailwind Css",],
    },
    {
      src: zovex,
      link: "https://github.com/udarasadaruwan/zovex-frontend",
      h3: "Zovex",
      p: "Zovex is a full-stack ecommerce marketplace with Stripe payments, Google OAuth, and role-based dashboards for customers, sellers, and admins.",
      tags: ["React", "Typescript", "Express", "Node.js", "MongoDB", "stripe", "cloudinary"],
    },
    {
      src: demo,
      link: "#",
      h3: "API Demo",
      p: "Backend-ready project concept for scalable service workflows.",
      tags: ["Node.js", "API"],
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
