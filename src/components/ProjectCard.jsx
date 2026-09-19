import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FeaturedImage({ project }) {
  return (
    <div className="pc-image">
      {project.image ? (
        <img src={project.image} alt={project.imageAlt} />
      ) : (
        <div className="pc-image-placeholder">{project.placeholder}</div>
      )}
      <span className="pc-image-tag">{project.imageTag}</span>
      <span className="pc-number">{project.number}</span>
    </div>
  );
}

function SmallImage({ project }) {
  return (
    <div className="pc-image-sm">
      <div
        className="pc-image-placeholder"
        style={{ fontSize: project.placeholderSize }}
      >
        {project.placeholder}
      </div>
      <span className="pc-image-tag">{project.imageTag}</span>
      <span className="pc-number">{project.number}</span>
    </div>
  );
}

function CardBody({ project, featured = false, metrics }) {
  const tagsAndArrow = (
    <div className="pc-footer">
      <div className="pc-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="pc-tag">
            {tag}
          </span>
        ))}
      </div>
      {project.actionLabel ? (
        <div className="pc-action-link">
          <span>{project.actionLabel}</span>
        </div>
      ) : (
        <motion.div
          className="pc-arrow"
          aria-hidden="true"
          whileHover={{ rotate: -12, scale: 1.06 }}
          transition={{ type: 'spring', stiffness: 420, damping: 22 }}
        >
          →
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="pc-body">
      <div className="pc-industry">{project.industry}</div>
      <div className="pc-title">{project.title}</div>
      <div className="pc-desc">{project.description}</div>
      {tagsAndArrow}
      {metrics && <Metrics metrics={metrics} />}
    </div>
  );
}

function Metrics({ metrics }) {
  return (
    <div className="pc-metrics">
      {metrics.map((metric) => (
        <div key={metric.label} className="pc-metric">
          <div className="pc-metric-val">{metric.value}</div>
          <div className="pc-metric-lbl">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const className = [
    'project-card',
    project.featured ? 'project-card-featured' : 'project-card-small',
  ].join(' ');

  const cardInner = (
    <>
      {project.featured ? (
        <>
          <div className="pc-inner">
            <FeaturedImage project={project} />
            <CardBody project={project} featured metrics={project.metrics} />
          </div>
        </>
      ) : (
        <>
          <SmallImage project={project} />
          <CardBody project={project} />
        </>
      )}
    </>
  );

  const motionProps = {
    className,
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
    whileHover: { y: -4, transition: { duration: 0.22 } },
  };

  const cardLabel = `View case study: ${project.title}`;

  if (project.href) {
    const linkClassName = `project-link${project.featured ? ' project-link-featured' : ''}`;
    const isInternal = project.href.startsWith('/');

    if (isInternal) {
      return (
        <Link
          to={project.href}
          className={linkClassName}
          aria-label={cardLabel}
          role="listitem"
        >
          <motion.div {...motionProps}>{cardInner}</motion.div>
        </Link>
      );
    }

    return (
      <a href={project.href} className={linkClassName} aria-label={cardLabel} role="listitem">
        <motion.div {...motionProps}>{cardInner}</motion.div>
      </a>
    );
  }

  return (
    <motion.div
      {...motionProps}
      role="listitem"
      style={project.featured ? { gridColumn: '1 / -1' } : undefined}
    >
      {cardInner}
    </motion.div>
  );
}
