import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from '../sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, liveLink, codeLink, h3, p, tags = [] }) {
  const hasLiveLink = liveLink && liveLink !== '#';
  const hasCodeLink = codeLink && codeLink !== '#';

  return (
    <motion.article
      className={styles.projectCard}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.22 }}
    >
      <img className="hover" src={src} alt={`${h3} project preview`} />
      <div>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
      <span>
        {tags.map((tag) => (
          <small key={tag}>{tag}</small>
        ))}
      </span>
      <div className={styles.projectActions}>
        <a
          href={hasLiveLink ? liveLink : undefined}
          target={hasLiveLink ? '_blank' : undefined}
          rel={hasLiveLink ? 'noreferrer' : undefined}
          aria-label={
            hasLiveLink
              ? `Open live ${h3} project`
              : `${h3} live project link unavailable`
          }
          aria-disabled={!hasLiveLink}
          className={!hasLiveLink ? styles.disabledAction : undefined}
        >
          Live
        </a>
        <a
          href={hasCodeLink ? codeLink : undefined}
          target={hasCodeLink ? '_blank' : undefined}
          rel={hasCodeLink ? 'noreferrer' : undefined}
          aria-label={
            hasCodeLink
              ? `Open ${h3} codebase`
              : `${h3} codebase link unavailable`
          }
          aria-disabled={!hasCodeLink}
          className={!hasCodeLink ? styles.disabledAction : undefined}
        >
          Codebase
        </a>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  codeLink: PropTypes.string,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
