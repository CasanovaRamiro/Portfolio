import React, { useState } from 'react'
import { m } from 'motion/react'
import useProjectsInfo from '../../Hooks/useProjectsInfo';
import Card from './Cards/Card/Card';
import css from './Projects.module.css'
import SwitchMobileDesktop from './SwitchMobileDesktop/SwitchMobileDesktop';
import { rise, stagger } from '../Section/variants';

// Animates through the parent Section's variants, so it replays on every visit.
function Projects({ language }) {
  const projects = useProjectsInfo()
  const [mobile, setMobile] = useState(false)
  const visible = mobile ? projects.filter((p) => p.mobile) : projects

  return (
    <m.div className={css.projects} variants={stagger(0.14, 0)}>
      <m.div className={css.header} variants={rise}>
        <h2>
          {language === "EN" ? "Projects" : "Proyectos"}
          <span className={css.count}>{String(visible.length).padStart(2, '0')}</span>
        </h2>
        <SwitchMobileDesktop mobile={mobile} onChange={setMobile} language={language} />
      </m.div>

      <div className={css.cardContainer}>
        {visible.map((project, i) => (
          <Card
            key={project.name}
            project={project}
            index={i}
            language={language}
            mobile={mobile}
          />
        ))}
      </div>
    </m.div>
  )
}

export default Projects
