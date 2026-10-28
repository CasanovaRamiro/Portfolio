import React, { useState } from "react";
import { m } from "motion/react";
import css from "./Home.module.css";
import img from "../Img/gitgub4.jpeg";
import Technologies from "../Technologies/Technologies";
import { SiGithub } from "react-icons/si";
import { FaFilePdf, FaLinkedin } from "react-icons/fa";
import Language from "../Language/Language";
import { linkedIn, CvPdfEnglish, CvPdfSpanish } from './links'
import Projects from "../Projects/Projects";
import Section from "../Section/Section";
import { rise, stagger } from "../Section/variants";

const text = {
  EN: {
    description:
      "I am a highly skilled Full Stack Developer with a strong foundation in web development, currently studying web development at the University. With project experience in technologies such as Node.js, React, SQL, NoSQL, and more, I am passionate about coding and constantly strive to learn and adapt to new technologies in the IT world. As a customer-oriented professional, I possess excellent communication, problem-solving, teamwork, and autonomy skills.",
    technologies: "Technologies",
    scroll: "Scroll",
    top: "Top",
  },
  ES: {
    description:
      "Soy un Desarrollador Full Stack altamente capacitado con una sólida base en desarrollo web, actualmente estudiando desarrollo web en la Universidad. Con experiencia en proyectos en tecnologías como Node.js, React, SQL, NoSQL y más, soy apasionado por el código y constantemente busco aprender y adaptarme a las nuevas tecnologías en el mundo de TI. Como profesional orientado al cliente, poseo excelentes habilidades de comunicación, resolución de problemas, trabajo en equipo y autonomía.",
    technologies: "Tecnologias",
    scroll: "Bajar",
    top: "Inicio",
  },
};

function Home() {
  const [language, setLanguage] = useState("EN");
  const handleTranslate = () => {
    setLanguage(language === "ES" ? "EN" : "ES");
  };
  const t = text[language];

  const links = [
    { href: linkedIn, label: "LinkedIn", Icon: FaLinkedin },
    { href: "https://github.com/CasanovaRamiro", label: "GitHub", Icon: SiGithub },
    { href: language === "EN" ? CvPdfEnglish : CvPdfSpanish, label: "CV", Icon: FaFilePdf },
  ];

  return (
    <div className={css.container}>
      <Section id="home" className={css.hero} cue={{ href: "#projects", label: t.scroll }}>
        <div className={css.glow} aria-hidden="true" />
        <Language handleTranslate={handleTranslate} language={language} />

        <m.div className={css.avatar} variants={rise}>
          <img src={img} alt="Ramiro Casanova" />
        </m.div>

        <m.h1 className={css.name} variants={stagger(0.12, 0)}>
          {"Ramiro Casanova".split(" ").map((word) => (
            <m.span key={word} variants={rise}>{word}</m.span>
          ))}
        </m.h1>
        <m.p className={css.role} variants={rise}>FullStack Developer</m.p>

        <m.div className={css.links} variants={rise}>
          {links.map(({ href, label, Icon }) => (
            <a key={label} className={css.link} href={href} target="_blank" rel="noreferrer">
              <Icon size="18px" />
              {label}
            </a>
          ))}
        </m.div>

        <m.p className={css.description} variants={rise}>{t.description}</m.p>
      </Section>

      <Section id="projects" cue={{ href: "#technologies", label: t.scroll }}>
        <m.div variants={rise}>
          <Projects language={language} />
        </m.div>
      </Section>

      <Section id="technologies" cue={{ href: "#home", label: t.top, up: true }}>
        <m.h2 className={css.sectionTitle} variants={rise}>{t.technologies}</m.h2>
        <Technologies language={language} />
      </Section>
    </div>
  );
}

export default Home;
