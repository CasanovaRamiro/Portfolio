import React from "react";
import css from "./Cards.module.css";
import image from '../Img/Captura-Dogs-App.png'
function Cards({ img, name, gitHubLink, deployLink }) {
  return (
    <div className={css.container} style={{ backgroundImage: `url(${image})` }}>
      <div className={css.layout}>
        <a className={css.link} target="_blank" href={deployLink}>
            DeployLink
        </a>
      </div>
      
    </div>
  );
}

export default Cards;
