import React, { useState } from "react";
import css from "./Home.module.css";
import img from "../Img/gitgub4.jpeg";
import Cards from "../Cards/Cards";
import Technologies from "../Technologies/Technologies";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

function Home() {
  const [projects] = useState([
    {
      img: "ecommerce",
      name: "Ecommerce-App",
      gitHubLink: "https://github.com/CasanovaRamiro/ecommerce-pf",
      deployLink: "https://clothes-22.vercel.app",
      infoEspañol: [
        "Diseñar y desarrollar en un equipo conformado por un total de 7 integrantes un E-Commerce de indumentaria masculina y femenina que incluía: carrito de compras, plataforma de pago Mercado Pago, perfil del usuario, perfil de administrador con permisos especiales, historial de compras/ventas, descarga de órdenes de compra en PDF, búsquedas por parámetros, filtrados por categorías, ordenamientos y creación de nuevos productos.",
        "Desarrollar la app usando para el Front-End React, Redux, CSS puro y Back-End desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize.",
        "Complementar funcionalidades en colaboración de otros colegas para el área de Front-End.",
        "Aportar funcionalidades destacadas: Local Storage (para persistir los datos de la sesión en curso y/o el dispositivo que se esté utilizando), control de Stock y manejo del carrito de compras.",
        "Cooperar en Deploy del proyecto usando para Back-End Heroku CLI y para Front-End con Vercel",
      ],
      infoEnglish: [
        "Design and develop an E-Commerce in a team of seven members. The app`s purpose was to sell men´s and women´s clothing. it included: shopping cart, Mercado Pago payment platform, user profile, administrator profile with special permissions, purchase history /sales, download of purchase invoices in PDF, search by parameters, filtering by categories, ordering and creation of new products.",
        "The app was developed using React, Redux, pure CSS for the Front-End and the Back-End was developed in Node.js with Express, PostgreSQL and Sequelize.",
        "I implemented functionalities in collaboration with other colleagues for the Front-End section.",
        "I Provided outstanding functionalities: Local Storage (to save the data of the current session and/or the device being used), Stock control and shopping cart management.",
        "I Cooperated in the Deploy of the project using Heroku CLI for Back-End and Vercel for Front-End.",
      ],
    },
    {
      img: "dogs",
      name: "Dogs-App",
      gitHubLink: "https://github.com/CasanovaRamiro/Dogs",
      deployLink: "https://dogs-lilac-nu.vercel.app",
      infoEnglish: [
        "Develop a fullstack app to display information about the most popular dog breeds.",
        "Fetch data from The Dog API.",
        "Dynamic pagination and filtering.",
        "Possibility to create, update and delete dog breeds and save it to a database through a validated form.",
        "Tech Stack: React, Express, sequelize and PostgreSQL",
      ],
      infoEspañol: [
        "Programar una app Full-Stack que muestre información detallada sobre razas populares de perros.",
        "Buscar datos de The Dog API.",
        "Paginación y Filtrado dinámicos.",
        "Posibilidad de crear, modificar y eliminar razas de perros, guardándolas en una base de datos a través de un formulario validado",
        "Tecnologías utilizadas: React, Express, sequelize y PostgreSQL",
      ],
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
      <div onClick={() => handleTranslate()} className={css.translateButton}>
        <span>
          <MdLanguage size="30px" />
        </span>
        <h4>{language === "EN" ? "English" : "Español"}</h4>
      </div>
      <div className={css.titleImg}>
        <div className={css.imgContainer}>
          <div className={css.img}>
            <img src={img} alt="Profile Pic" />
          </div>
          <div className={css.iconContainer}>
            <span>
              <a
                style={{ textDecoration: "none", color: "rgb(255, 255, 255)" }}
                target="_blank"
                href="https://www.linkedin.com/in/ramiro-casanova"
              >
                <SiLinkedin size={"30px"} />
              </a>
            </span>
            <span>
              <a
                style={{ textDecoration: "none", color: "rgb(255, 255, 255)" }}
                target="_blank"
                href="https://github.com/CasanovaRamiro"
              >
                <SiGithub size={"30px"} />
              </a>
            </span>
            <span>
              <a
                style={{ textDecoration: "none", color: "rgb(255, 255, 255)" }}
                target="_blank"
                href="https://docs.google.com/document/d/1DqOwwVHV_OoW2KHo0cQISzs63r_nIlgPo0NDadsyiPQ/edit?usp=sharing"
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
                ? "Frontend developer based in Buenos Aires, Argentina"
                : spanish.subTitle}
            </h4>
          </div>
        </div>
      </div>
      <h4 className={css.description}>
        {language === "EN"
          ? "Passionate about web development. Always learning new technologies. Here you will see some of projects."
          : spanish.description}
      </h4>
      <div className={css.projects}>
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
                infoEspañol={e.infoEspañol}
                infoEnglish={e.infoEnglish}
                language={language}
              />
            );
          })}
        </div>
      </div>
      <div className={css.technologies}>
        <h2>{language === "EN" ? "Technologies" : "Tecnologias"}</h2>
        <Technologies language={language} />
      </div>
    </div>
  );
}

export default Home;
