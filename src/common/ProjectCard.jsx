import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function ProjectCard({ src, link, h3, p, tags = [] }) {
  const isExternalLink = link.startsWith('http');

  return (
    <motion.a
      href={link}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noreferrer' : undefined}
      aria-label={`View ${h3} project`}
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
    </motion.a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
