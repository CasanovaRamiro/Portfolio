import React from 'react'
import { MdLanguage } from "react-icons/md";
import css from './Language.module.css'

function Language({ handleTranslate, language }) {
  return (
    <div className={css.container}>
      <span onClick={() => handleTranslate()}>
        <MdLanguage className={css.icon} size="30px" />
        <h4>{language === "EN" ? "English" : "Español"}</h4>
      </span>
    </div>
  )
}

export default Language