import React from "react";
import css from "./Cards.module.css";
import dogsImage from '../Img/Captura-Dogs-App.png'
import ecommerceImage from '../Img/Captura-ecommerce.png'
function Cards({ img, name, gitHubLink, deployLink }) {
    let image
    if(img === 'ecommerce'){image = ecommerceImage}
    if(img === 'dogs'){image = dogsImage}
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
