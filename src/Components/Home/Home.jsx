import React, { useState } from "react";
import css from "./Home.module.css";
import img from "../Img/gitgub-redonda.png";
import Cards from "../Cards/Cards";

function Home() {
  const [projects] = useState([
    {
      img: "ecommerce",
      name: "Ecommerce-App",
      gitHubLink: "https://github.com/CasanovaRamiro/ecommerce-pf",
      deployLink: "https://clothes-22.vercel.app",
    },
    {
      img: "dogs",
      name: "Dogs-App",
      gitHubLink: "https://github.com/CasanovaRamiro/Dogs",
      deployLink: "https://dogs-lilac-nu.vercel.app",
    },
  ]);
  const [spanish] = useState({
    subTitle: "Frontend developer viviendo en Buenos Aires, Argentina",
    description:
      "Apasionado por el desarrollo web. Aprendizaje constante de nuevas tecnologías. Mas abajo podras ver algunos de mis proyectos.",
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
      <div className={css.translateButton}><button onClick={() => handleTranslate()}>{language}</button></div>
      <div className={css.titleImg}>
        <div className={css.title}>
          <div className={css.titleSubTitle}>
            <h1>Ramiro Casanova</h1>
            <h4>
              {language === "EN"
                ? "Frontend developer based in Buenos Aires, Argentina"
                : spanish.subTitle}
            </h4>
          </div>
          
        </div>
        <div className={css.img}>
          <img src={img} alt="Profile Pic" />
        </div>
      </div>
      <h4>
        {language === "EN"
          ? "Passionate about web development. Always learning new technologies. Here you will see some of projects."
          : spanish.description}
      </h4>
      <h2>{language === "EN" ? "Projects" : "Proyectos"}</h2>

      <div className={css.cardContainer}>
        {projects.map((e) => {
          return (
            <Cards
              key={e.name}
              img={e.img}
              name={e.name}
              gitHubLink={e.gitHubLink}
              deployLink={e.deployLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
