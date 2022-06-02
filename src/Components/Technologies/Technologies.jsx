import React from 'react'
import css from "./Technologies.module.css";
import {FaReact, FaNodeJs} from 'react-icons/fa'
import {SiPostgresql, SiRedux, SiCss3, SiGit, SiExpress, SiSequelize, SiJava, SiTypescript, SiMongodb} from 'react-icons/si'
import {DiJavascript1, DiHtml5} from 'react-icons/di'



function Technologies({language}) {

  return (
    <div className={css.container}>
        <div className={css.techContainer}>
            <h3>FrontEnd</h3>
            <div className={css.iconSection}>   
                <div className={css.icon}><h5><FaReact size='50px'/></h5><h5 className={css.abs}>React</h5></div>
                <div className={css.icon}><h5><SiRedux size='50px'/></h5><h5 className={css.abs}>Redux</h5></div>
                <div className={css.icon}><h5><SiCss3 size='50px'/></h5><h5 className={css.abs}>CSS 3</h5></div>
                <div className={css.icon}><h5><DiJavascript1 size='50px'/></h5><h5 className={css.abs}>JavaScript</h5></div>
                <div className={css.icon}><h5><DiHtml5 size='50px'/></h5><h5 className={css.abs}>HTML 5</h5></div>
                <div className={css.icon}><h5><SiGit size='50px'/></h5><h5 className={css.abs}>Git</h5></div>
            </div>
        </div>

        <div className={css.techContainer}>
            <h3>BackEnd</h3>
            <div className={css.iconSection}>   
                <div className={css.icon}><h5><DiJavascript1 size='50px'/></h5><h5 className={css.abs}>JavaScript</h5></div>
                <div className={css.icon}><h5><SiPostgresql size='50px'/></h5><h5 className={css.abs}>PostgreSQL</h5></div>
                <div className={css.icon}><h5><FaNodeJs size='50px'/></h5><h5 className={css.abs}>Node Js</h5></div>
                <div className={css.icon}><h5><SiExpress size='50px'/></h5><h5 className={css.abs}>ExpressJs</h5></div>
                <div className={css.icon}><h5><SiSequelize size='50px'/></h5><h5 className={css.abs}>Sequelize</h5></div>
                <div className={css.icon}><h5><SiGit size='50px'/></h5><h5 className={css.abs}>Git</h5></div>
            </div>
        </div>

        <div className={css.techContainer}>
            <h3>{language=== 'EN' ? 'In Progress' : 'En Progreso'}</h3>
            <div className={css.iconSection}>   
                <div className={css.icon}><h5><SiJava size='50px'/></h5><h5 className={css.abs}>Java</h5></div>
                <div className={css.icon}><h5><SiTypescript size='50px'/></h5><h5 className={css.abs}>TypeScript</h5></div>
                <div className={css.icon}><h5><SiMongodb size='50px'/></h5><h5 className={css.abs}>MongoDB</h5></div>
            </div>
        </div>
    </div>
  )
}

export default Technologies