import React,{useState} from "react";
import css from "./Cards.module.css";
import dogsImage from '../Img/Captura-Dogs-App.png'
import ecommerceImage from '../Img/Captura-ecommerce.png'
import{FaExternalLinkAlt, } from 'react-icons/fa'
import { SiGithub} from 'react-icons/si'
import { BsInfoLg} from 'react-icons/bs'
import {AiOutlineCloseSquare} from 'react-icons/ai'




function Cards({ img, name, gitHubLink, deployLink, infoEspañol, infoEnglish , language}) {
    const [icons, setIcons]=useState(false)
    const handleIcons = ()=>{
        setIcons(!icons)
    }
    const [infoModal, setInfoModal]=useState(false)
    const handleInfoModal=()=>{
      setInfoModal(!infoModal)
    }
    
    let image
    if(img === 'ecommerce'){image = ecommerceImage}
    if(img === 'dogs'){image = dogsImage}
  return (
    <div>
      {infoModal? <div className={css.overlay}><div className={css.overlay} onClick={()=>handleInfoModal()}></div>
          <div className={css.infoCard}>
             
             <div className={css.infoContainer}>
              <h3>{name}</h3>
              {language === 'EN'? infoEnglish.map((e, i)=>(<li  key={i}>{e}</li>)):infoEspañol.map((e, i)=>(<li  key={i}>{e}</li>))}
             </div>

             <span ><AiOutlineCloseSquare size={'30px'} onClick={()=>handleInfoModal()}/></span>

          </div>
      </div>:null}
      <div className={css.container} style={{ backgroundImage: `url(${image})` }}>
        <div className={css.layout}>
          <div className={css.iconContainer} onMouseEnter={()=>handleIcons()} onMouseLeave={()=>handleIcons()} >
              {icons && <a className={css.link} target="_blank" href={deployLink}>
                  <h1 className={css.icon}><FaExternalLinkAlt size='30px'/></h1>
              </a>}
              
            {icons && <a className={css.link} target="_blank" href={gitHubLink}>
                  <h1 className={css.icon}><SiGithub size='30px'/></h1>
              </a>}

              {icons && <a className={css.link} target="_blank" onClick={()=>handleInfoModal()}>
                  <h1 className={css.icon}><BsInfoLg size='30px'/></h1>
              </a>}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Cards;
