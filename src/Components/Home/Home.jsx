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
      "Apasionado por el desarrollo web. Aprendizaje constante de nuevas tecnologías. Mas abajo podras ver algunos de mis proyectos. Viviendo en Buenos Aires, Argentina",

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
          ? "Passionate about web development. Always learning new technologies. Here you will see some of projects. Based in Buenos Aires, Argentina"
          : spanish.description}
      </h4>
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
