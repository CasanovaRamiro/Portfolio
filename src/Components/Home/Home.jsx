import React, { useState } from "react";
import css from "./Home.module.css";
import img from "../Img/gitgub4.jpeg";
import Technologies from "../Technologies/Technologies";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import Language from "../Language/Language";
import { linkedIn, CvPdfEnglish, CvPdfSpanish } from './links'
import Projects from "../Projects/Projects";

function Home() {
  const [spanish] = useState({
    subTitle: "FullStack Dev.",
    description:
      "Soy un Desarrollador Full Stack altamente capacitado con una sólida base en desarrollo web, actualmente estudiando desarrollo web en la Universidad. Con experiencia en proyectos en tecnologías como Node.js, React, SQL, NoSQL y más, soy apasionado por el código y constantemente busco aprender y adaptarme a las nuevas tecnologías en el mundo de TI. Como profesional orientado al cliente, poseo excelentes habilidades de comunicación, resolución de problemas, trabajo en equipo y autonomía.",

  });
  const [language, setLanguage] = useState("EN");
  const handleTranslate = () => {
    if (language === "ES") {
      setLanguage("EN");
    } else {
      setLanguage("ES");
    }
  };
  return (
    <div className={css.container}>
      <Language
        handleTranslate={handleTranslate}
        language={language}
      />
      <div className={css.headSection}>
        <div className={css.titleImg}>
          <div className={css.imgContainer}>
            <div className={css.img}>
              <img src={img} alt="Profile Pic" />
            </div>
            <div className={css.iconContainer}>
              <span>
                <a
                  style={{ textDecoration: "none", color: "var(--main-white)" }}
                  target="_blank"
                  href={linkedIn}
                >
                  <SiLinkedin size={"30px"} />
                </a>
              </span>
              <span>
                <a
                  style={{ textDecoration: "none", color: "var(--main-white)" }}
                  target="_blank"
                  href="https://github.com/CasanovaRamiro"
                >
                  <SiGithub size={"30px"} />
                </a>
              </span>
              <span>
                <a
                  style={{ textDecoration: "none", color: "var(--main-white)" }}
                  target="_blank"
                  href={language === "EN" ? CvPdfEnglish : CvPdfSpanish}
                >
                  <FaFilePdf size={"30px"} />
                </a>
              </span>
            </div>
          </div>

          <div className={css.title}>
            <div className={css.titleSubTitle}>
              <h1>Ramiro Casanova</h1>
              <h4>
                {language === "EN"
                  ? "FullStack Dev."
                  : spanish.subTitle}
              </h4>
            </div>
          </div>
        </div>
        <h4 className={css.description}>
          {language === "EN"
            ? "I am a highly skilled Full Stack Developer with a strong foundation in web development, currently studying web development at the University. With project experience in technologies such as Node.js, React, SQL, NoSQL, and more, I am passionate about coding and constantly strive to learn and adapt to new technologies in the IT world. As a customer-oriented professional, I possess excellent communication, problem-solving, teamwork, and autonomy skills."
            : spanish.description}
        </h4>
      </div>
      <Projects
        language={language}
      />
      <div className={css.technologies}>
        <h2>{language === "EN" ? "Technologies" : "Tecnologias"}</h2>
        <Technologies language={language} />
      </div>
    </div>
  );
}

export default Home;
