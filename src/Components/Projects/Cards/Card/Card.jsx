import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { BsInfoLg } from "react-icons/bs";
import css from "./Card.module.css";
import { pop, rise, stagger } from "../../../Section/variants";

const ease = [0.22, 1, 0.36, 1];

const text = {
  EN: { demo: "Live demo", code: "Code", details: "Details", close: "Close", open: "Open" },
  ES: { demo: "Ver demo", code: "Código", details: "Detalles", close: "Cerrar", open: "Abrir" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease, staggerChildren: 0.08, delayChildren: 0.2 } },
};

const flip = {
  initial: { opacity: 0, rotateY: -75, scale: 0.85, filter: "blur(6px)" },
  animate: { opacity: 1, rotateY: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, rotateY: 75, scale: 0.85, filter: "blur(6px)" },
};

const spring = { stiffness: 160, damping: 18, mass: 0.6 };

function Card({ project, index, language, mobile }) {
  const { name, kind, images, gitHubLink, deployLink, summary, stack } = project;
  const t = text[language];
  const [infoModal, setInfoModal] = useState(false);
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // device tilt + glare follow the pointer
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.22), transparent 55%)`;

  const handleCardMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cardRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
  const handleStageMove = (e) => {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 18);
    rotateX.set((0.5 - py) * 14);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };
  const handleStageLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const host = deployLink.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const view = mobile ? "mobile" : "desktop";

  return (
    <m.article ref={cardRef} className={css.card} variants={cardVariants} onPointerMove={handleCardMove}>
      <div className={css.stage} onPointerMove={handleStageMove} onPointerLeave={handleStageLeave}>
        <span className={css.orbs} aria-hidden="true" />
        <div className={css.float}>
          <m.div className={css.tilt} style={{ rotateX, rotateY, transformPerspective: 900 }}>
            <AnimatePresence mode="wait" initial={false}>
              <m.a
                key={view}
                className={mobile ? css.phone : css.browser}
                href={deployLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t.open} ${name}`}
                {...flip}
                style={{ transformPerspective: 900 }}
                transition={{ duration: 0.35, ease }}
              >
                {!mobile && (
                  <span className={css.chrome} aria-hidden="true">
                    <i /><i /><i />
                    <span className={css.url}>{host}</span>
                  </span>
                )}
                <img src={images[view]} alt={`${name} — ${view}`} draggable="false" />
                <m.span className={css.glare} style={{ background: glare }} aria-hidden="true" />
                <span className={css.badge} aria-hidden="true">
                  {t.demo} <FiArrowUpRight />
                </span>
              </m.a>
            </AnimatePresence>
          </m.div>
        </div>
      </div>

      <div className={css.body}>
        <m.div className={css.eyebrow} variants={rise}>
          <span className={css.index}>{String(index + 1).padStart(2, "0")}</span>
          <span className={css.rule} />
          <span>{kind[language]}</span>
        </m.div>
        <m.h3 className={css.name} variants={rise}>{name}</m.h3>
        <m.p className={css.summary} variants={rise}>{summary[language]}</m.p>

        <m.ul className={css.stack} variants={stagger(0.06, 0)}>
          {stack.map((tech) => (
            <m.li key={tech} variants={pop}>{tech}</m.li>
          ))}
        </m.ul>

        <m.div className={css.actions} variants={rise}>
          <a className={`${css.btn} ${css.primary}`} href={deployLink} target="_blank" rel="noreferrer">
            {t.demo} <FiArrowUpRight className={css.arrow} aria-hidden="true" />
          </a>
          <a className={css.btn} href={gitHubLink} target="_blank" rel="noreferrer">
            <SiGithub aria-hidden="true" /> {t.code}
          </a>
          <button type="button" className={css.btn} onClick={() => setInfoModal(true)}>
            <BsInfoLg aria-hidden="true" /> {t.details}
          </button>
        </m.div>
      </div>

      {/* Portaled: the Section's transform would otherwise trap position: fixed */}
      {createPortal(
        <AnimatePresence>
          {infoModal && <InfoModal project={project} language={language} onClose={() => setInfoModal(false)} />}
        </AnimatePresence>,
        document.body
      )}
    </m.article>
  );
}

function InfoModal({ project, language, onClose }) {
  const { name, kind, summary, highlights, stack, deployLink, gitHubLink } = project;
  const t = text[language];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <m.div
      className={css.overlay}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <m.div
        className={css.modal}
        role="dialog"
        aria-modal="true"
        aria-label={name}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <button type="button" className={css.close} onClick={onClose} aria-label={t.close} autoFocus>
          <FiX size="20px" />
        </button>

        <m.div initial="hidden" animate="show" variants={stagger(0.07, 0.1)}>
          <m.span className={css.modalKind} variants={rise}>{kind[language]}</m.span>
          <m.h3 className={css.modalName} variants={rise}>{name}</m.h3>
          <m.p className={css.modalSummary} variants={rise}>{summary[language]}</m.p>

          <ul className={css.highlights}>
            {highlights[language].map((item, i) => (
              <m.li key={i} variants={rise}>
                <span className={css.bullet}>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </m.li>
            ))}
          </ul>

          <m.ul className={css.stack} variants={stagger(0.05, 0)}>
            {stack.map((tech) => (
              <m.li key={tech} variants={pop}>{tech}</m.li>
            ))}
          </m.ul>

          <m.div className={css.actions} variants={rise}>
            <a className={`${css.btn} ${css.primary}`} href={deployLink} target="_blank" rel="noreferrer">
              {t.demo} <FiArrowUpRight className={css.arrow} aria-hidden="true" />
            </a>
            <a className={css.btn} href={gitHubLink} target="_blank" rel="noreferrer">
              <SiGithub aria-hidden="true" /> {t.code}
            </a>
          </m.div>
        </m.div>
      </m.div>
    </m.div>
  );
}

export default Card;
