import styles from "./ProjectsStyles.module.css";
import studio from "../../assets/studio.png";
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
      src: demo,
      link: "#",
      h3: "Commerce Demo",
      p: "Product-style interface concept with clean responsive sections.",
      tags: ["Web app", "Design"],
    },
    {
      src: demo,
      link: "#",
      h3: "Dashboard Demo",
      p: "Operational layout concept focused on structure and scanning.",
      tags: ["Frontend", "UX"],
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
        <h1 className="sectionTitle">Projects</h1>
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
