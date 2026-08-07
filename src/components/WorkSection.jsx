import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function WorkSection() {
  return (
    <section id="selected-work" className="work-section" aria-labelledby="work-section-title">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeUp} custom={0}>
          <div className="section-eyebrow">Selected work</div>
          <div className="section-title" id="work-section-title">
            Projects that <span>tell a story.</span>
          </div>
        </motion.div>
        <motion.div className="section-meta" variants={fadeUp} custom={0.1}>
          3 case studies
          <br />
          2023 – 2024
        </motion.div>
      </motion.div>

      <div className="project-grid" role="list">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
