import React from "react";
import css from "./Cards.module.css";

function Cards({ img, name, gitHubLink, deployLink }) {
  return (
    <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
      <div className={css.layout}>
        <a className={css.link} target="_blank" href={deployLink}>
            DeployLink
        </a>
      </div>
      
    </div>
  );
}

export default Cards;
