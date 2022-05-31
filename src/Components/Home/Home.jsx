import React, {useState} from 'react'
import css from './Home.module.css'
import img from '../img/gitgub-redonda.png'
import ecommerceImg from './../img/Captura-ecommerce.png'
import dogImg from './../img/Captura-Dogs-App.png'
import Cards from '../Cards/Cards'


function Home() {
  const [projects] = useState({
    ecommerce : {img: ecommerceImg, name: 'Ecommerce-App', gitHubLink: '', deployLink:'https://clothes-22.vercel.app' },
    dogs : {img: dogImg, name: 'Dogs-App', gitHubLink: '', deployLink:'https://dogs-lilac-nu.vercel.app' }
  })
  const [spanish] = useState({
    subTitle:'Frontend developer viviendo en Buenos Aires, Argentina',
    description:'Apasionado por el desarrollo web. Aprendizaje constante de nuevas tecnologías. Mas abajo podras ver algunos de mis proyectos.'
  })
  const [language, setLanguage] = useState('Es')
  const handleTranslate = ()=>{
    if(language === 'Es'){
      setLanguage('En')
    }else{setLanguage('Es')}
  }
  return (
    <div className={css.container}>
      <div className={css.titleImg}>
      <div className={css.title}><h1>Ramiro Casanova</h1><button onClick={()=>handleTranslate()}>{language}</button></div>
      <div className={css.img} ><img src={img} alt="Profile Pic" /></div>
      </div>
      <h4>{language === 'Es'?'Frontend developer based in Buenos Aires, Argentina': spanish.subTitle}</h4>
      <h4>{language === 'Es'?'Passionate about web development. Always learning new technologies. Here you will see some of projects.':spanish.description}</h4>
      <h2>{language === 'Es'?'Projects':'Proyectos'}</h2>
      {/* <img src={ecommerceImg} alt="hola" /> */}
      <Cards 
      img={projects.ecommerce.img}
      name={projects.ecommerce.name}
      gitHubLink={projects.ecommerce.gitHubLink}
      deployLink={projects.ecommerce.deployLink}
      />
      {/* <Cards 
      img={projects.dogs.img}
      name={projects.dogs.name}
      gitHubLink={projects.dogs.gitHubLink}
      deployLink={projects.dogs.deployLink}
      /> */}
    </div>
  )
}

export default Home