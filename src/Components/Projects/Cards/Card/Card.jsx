import React, { useState } from "react";
import css from "./Card.module.css";
import dogsImage from '../../../Img/Captura-Dogs-App.png'
import ecommerceImage from '../../../Img/Captura-ecommerce.png'
import ecommerceMobile from '../../../Img/ecommerce-mobile.png'
import ITCrowd from '../../../Img/ItCrowd.png'
import ITCrowdMobile from '../../../Img/itCrowd-mobile.png'
import { FaExternalLinkAlt, } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { BsInfoLg } from 'react-icons/bs'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import useMediaQuery from "../../../../Hooks/useMediaQuery";



function Card({ img, name, gitHubLink, deployLink, infoEspañol, infoEnglish, language, mobile }) {
  const [infoModal, setInfoModal] = useState(false)
  const handleInfoModal = () => {
    setInfoModal(!infoModal)
  }
  const alt = useMediaQuery('(min-width: 650px)')
  let image
  if (img === 'ecommerce') { mobile ? image = ecommerceMobile : image = ecommerceImage }
  if (img === 'dogs') { image = dogsImage }
  if (img === 'ITCrowd') { mobile ? image = ITCrowdMobile : image = ITCrowd }

  return (
    <div className={css.contDeCont}>
      {infoModal ? <div className={css.overlay}><div className={css.overlay} onClick={() => handleInfoModal()}></div>
        <div className={css.infoCard}>

          <div className={css.infoContainer}>
            <h3>{name}</h3>
            {language === 'EN' ? infoEnglish.map((e, i) => (<li key={i}>{e}</li>)) : infoEspañol.map((e, i) => (<li key={i}>{e}</li>))}
          </div>

          <span ><AiOutlineCloseSquare size={'30px'} onClick={() => handleInfoModal()} /></span>

        </div>
      </div> : null}
      <div className={mobile ? css.mobileContainer : css.desktopContainer} style={{ backgroundImage: `url(${image})` }}>
        <div className={css.layout}>
          {alt ? <div className={css.iconContainer} >
            <a className={css.link} target="_blank" href={deployLink}>
              <h1 className={css.icon}><FaExternalLinkAlt size='30px' /></h1>
            </a>
            <a className={css.link} target="_blank" href={gitHubLink}>
              <h1 className={css.icon}><SiGithub size='30px' /></h1>
            </a>
            <a className={css.link} target="_blank" onClick={() => handleInfoModal()}>
              <h1 className={css.icon}><BsInfoLg size='30px' /></h1>
            </a>
          </div> : null}
        </div>

      </div>
      {alt === false ? <div className={css.iconContainer} >
        {<a className={css.link} target="_blank" href={deployLink}>
          <h1 className={css.icon}><FaExternalLinkAlt size='30px' /></h1>
        </a>}

        {<a className={css.link} target="_blank" href={gitHubLink}>
          <h1 className={css.icon}><SiGithub size='30px' /></h1>
        </a>}

        {<a className={css.link} target="_blank" onClick={() => handleInfoModal()}>
          <h1 className={css.icon}><BsInfoLg size='30px' /></h1>
        </a>}
      </div> : null}
    </div>
  );
}

export default Card;
