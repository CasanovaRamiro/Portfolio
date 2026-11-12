import React from 'react'
import { AiOutlineDesktop, AiOutlineMobile } from "react-icons/ai";
import css from './SwitchMobileDesktop.module.css'

const labels = {
  EN: { group: 'Preview', desktop: 'Desktop', mobile: 'Mobile' },
  ES: { group: 'Vista previa', desktop: 'Escritorio', mobile: 'Móvil' },
}

function SwitchMobileDesktop({ mobile, onChange, language }) {
  const t = labels[language]
  return (
    <div className={`${css.switch} ${mobile ? css.isMobile : ''}`} role="group" aria-label={t.group}>
      <span className={css.pill} aria-hidden="true" />
      <button type="button" className={css.option} aria-pressed={!mobile} aria-label={t.desktop} onClick={() => onChange(false)}>
        <AiOutlineDesktop size="18px" aria-hidden="true" />
        <span>{t.desktop}</span>
      </button>
      <button type="button" className={css.option} aria-pressed={mobile} aria-label={t.mobile} onClick={() => onChange(true)}>
        <AiOutlineMobile size="18px" aria-hidden="true" />
        <span>{t.mobile}</span>
      </button>
    </div>
  )
}

export default SwitchMobileDesktop
