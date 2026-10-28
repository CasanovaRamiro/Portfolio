import React from 'react'
import { m } from 'motion/react'
import css from "./Technologies.module.css";
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNestjs, SiPostgresql, SiRedux, SiCss, SiGit, SiExpress, SiSequelize, SiTypescript, SiMongodb, SiVuedotjs, SiTailwindcss, SiMui, SiVite, SiJest, SiStripe, SiSentry, SiZod } from 'react-icons/si'
import { DiJavascript1, DiHtml5 } from 'react-icons/di'
import { TbBrandNextjs } from "react-icons/tb";
import { pop, rise, stagger } from '../Section/variants';

const javascript = { name: 'JavaScript', Icon: DiJavascript1, color: '#F7DF1E' }
const typescript = { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' }
const git = { name: 'Git', Icon: SiGit, color: '#F05032' }
const react = { name: 'React', Icon: FaReact, color: '#61DAFB' }
const node = { name: 'Node Js', Icon: FaNodeJs, color: '#5FA04E' }
const express = { name: 'ExpressJs', Icon: SiExpress, color: '#FFFFFF' }
const postgres = { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' }
const tailwind = { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' }
const mui = { name: 'Material UI', Icon: SiMui, color: '#007FFF' }
const vite = { name: 'Vite', Icon: SiVite, color: '#646CFF' }
const jest = { name: 'Jest', Icon: SiJest, color: '#C21325' }
const stripe = { name: 'Stripe', Icon: SiStripe, color: '#635BFF' }
const sentry = { name: 'Sentry', Icon: SiSentry, color: '#9E86C8' }
const zod = { name: 'Zod', Icon: SiZod, color: '#3E67B1' }

const groups = [
    {
        key: 'frontend',
        title: { EN: 'Frontend', ES: 'Frontend' },
        items: [
            react,
            { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
            javascript,
            typescript,
            { name: 'Next.js', Icon: TbBrandNextjs, color: '#FFFFFF' },
            { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
            tailwind,
            mui,
            vite,
            { name: 'CSS 3', Icon: SiCss, color: '#1572B6' },
            { name: 'HTML 5', Icon: DiHtml5, color: '#E34F26' },
            git,
        ],
    },
    {
        key: 'backend',
        title: { EN: 'Backend', ES: 'Backend' },
        items: [
            node,
            express,
            { name: 'Nest.js', Icon: SiNestjs, color: '#E0234E' },
            javascript,
            typescript,
            postgres,
            { name: 'Sequelize', Icon: SiSequelize, color: '#52B0E7' },
            { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
            jest,
            stripe,
            sentry,
            zod,
            git,
        ],
    },
    {
        key: 'current',
        title: { EN: 'Currently working with', ES: 'Trabajando con' },
        items: [
            react,
            typescript,
            node,
            express,
            postgres,
            mui,
            tailwind,
            vite,
            jest,
            stripe,
            sentry,
            zod,
        ],
    },
]

// Animates through the parent Section's variants, so tiles replay on every visit.
function Technologies({ language }) {
    return (
        <m.div className={css.container} variants={stagger(0.12, 0)}>
            {groups.map((group) => (
                <m.div key={group.key} className={`${css.group} ${css[group.key]}`} variants={rise}>
                    <div className={css.groupHeader}>
                        <h3>{group.title[language]}</h3>
                        {group.key === 'current'
                            ? <span className={css.pulse} aria-hidden="true" />
                            : <span className={css.count}>{group.items.length}</span>}
                    </div>
                    <m.ul className={css.grid} variants={stagger(0.04, 0.15)}>
                        {group.items.map(({ name, Icon, color }) => (
                            // the motion wrapper owns transform for the entrance; the inner tile owns hover
                            <m.li key={name} variants={pop}>
                                <div className={css.tile} style={{ '--brand': color }}>
                                    <Icon size="36px" aria-hidden="true" />
                                    <span>{name}</span>
                                </div>
                            </m.li>
                        ))}
                    </m.ul>
                </m.div>
            ))}
        </m.div>
    )
}

export default Technologies
