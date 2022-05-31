import React,{useState} from "react";
import css from "./Cards.module.css";
import dogsImage from '../Img/Captura-Dogs-App.png'
import ecommerceImage from '../Img/Captura-ecommerce.png'
import gitHub from '../Img/github.png'
import Link from '../Img/link.png'


function Cards({ img, name, gitHubLink, deployLink }) {
    const [icons, setIcons]=useState(false)
    const handleIcons = ()=>{
        setIcons(!icons)
    }
    let image
    if(img === 'ecommerce'){image = ecommerceImage}
    if(img === 'dogs'){image = dogsImage}
  return (
    <div className={css.container} style={{ backgroundImage: `url(${image})` }}>
      <div className={css.layout}>
        <div className={css.iconContainer} onMouseEnter={()=>handleIcons()} onMouseLeave={()=>handleIcons()} >
            {icons && <a className={css.link} target="_blank" href={deployLink}>
                <img className={css.icon} src={Link} alt="Deploy icon" />
            </a>}
            
           {icons && <a className={css.link} target="_blank" href={gitHubLink}>
                <img className={css.icon} src={gitHub} alt="Github icon" />
            </a>}
        </div>
      </div>
      
    </div>
  );
}

export default Cards;
