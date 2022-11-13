import React from 'react'
import { AiOutlineMobile } from "react-icons/ai";
import css from './SwitchMobileDesktop.module.css'
function SwitchMobileDesktop({ handleSwitch }) {
  return (
    <div className={css.container}>
      <input type="checkbox" className={css.iosSwitch} onClick={() => handleSwitch()} /><div><div></div></div>
      <span><AiOutlineMobile size={'30px'} /></span>
    </div>
  )
}

export default SwitchMobileDesktop