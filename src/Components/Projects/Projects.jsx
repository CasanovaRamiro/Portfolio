import React, { useState } from 'react'
import useProjectsInfo from '../../Hooks/useProjectsInfo';
import Card from './Cards/Card/Card';
import css from './Projects.module.css'
import SwitchMobileDesktop from './SwitchMobileDesktop/SwitchMobileDesktop';
// AiOutlineDesktop


function Projects({ language }) {
  const projects = useProjectsInfo()

  const [mobile, setMobile] = useState(false)
  const handleSwitch = () => {
    setMobile(!mobile)
  }

  return (
    <div className={css.projects}>
      <div className={css.header}>
        <h2>{language === "EN" ? "Projects" : "Proyectos"}<SwitchMobileDesktop
          handleSwitch={handleSwitch}
        /></h2>


      </div>

      <div className={css.cardContainer}>
        {!mobile ? projects.map((e) => {
          return (
            <Card
              key={e.name}
              img={e.img}
              name={e.name}
              gitHubLink={e.gitHubLink}
              deployLink={e.deployLink}
              infoEspañol={e.infoEspañol}
              infoEnglish={e.infoEnglish}
              language={language}
              mobile={mobile}
            />
          );
        }) :
          projects.filter(e => e.mobile == true).map((e) => {
            return (
              <Card
                key={e.name}
                img={e.img}
                name={e.name}
                gitHubLink={e.gitHubLink}
                deployLink={e.deployLink}
                infoEspañol={e.infoEspañol}
                infoEnglish={e.infoEnglish}
                language={language}
                mobile={mobile}
              />
            );
          })
        }
      </div>
    </div>
  )
}

export default Projects