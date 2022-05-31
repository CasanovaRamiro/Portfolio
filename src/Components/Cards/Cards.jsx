import React from 'react'
import css from './Cards.module.css'

function Cards({img, name,gitHubLink,deployLink}) {
  return (
    <div className={css.container} style={{backgroundImage:`url(${img})`}}> <a target="_blank" href={deployLink}>Link</a></div>
  )
}

export default Cards