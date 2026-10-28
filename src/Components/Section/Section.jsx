import React, { useRef } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "motion/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import css from "./Section.module.css";
import { stagger } from "./variants";

// A full-screen snap section. Its content scales/fades with scroll as it enters and leaves,
// and re-runs its children's stagger animation every time it comes into view.
function Section({ id, className = "", cue, children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress: entering } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const { scrollYProgress: leaving } = useScroll({ target: ref, offset: ["end end", "end start"] });

  const opacity = useTransform(() => Math.min(0.15 + entering.get() * 0.85, 1 - leaving.get() * 0.85));
  const scale = useTransform(() => 1 - (1 - entering.get()) * 0.08 - leaving.get() * 0.08);
  const y = useTransform(() => (1 - entering.get()) * 60 - leaving.get() * 60);

  // The snap target itself stays untransformed: Chrome measures snap positions from the
  // transformed box, which made the page settle mid-section on load.
  return (
    <m.section id={id} ref={ref} className={css.section} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
      <m.div
        className={`${css.inner} ${className}`}
        style={reduceMotion ? undefined : { opacity, scale, y }}
        variants={stagger()}
      >
        {children}
        {cue && (
          <a className={css.cue} href={cue.href}>
            {cue.up && <HiChevronUp size="22px" />}
            {cue.label}
            {!cue.up && <HiChevronDown size="22px" />}
          </a>
        )}
      </m.div>
    </m.section>
  );
}

export default Section;
