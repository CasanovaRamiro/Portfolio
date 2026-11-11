import shipIt from "../Components/Img/ship-it.png";
import shipItMobile from "../Components/Img/ship-it-mobile.png";

const projects = [
  {
    name: "Ship It!",
    kind: { EN: "Browser game", ES: "Juego de navegador" },
    images: { desktop: shipIt, mobile: shipItMobile },
    gitHubLink: "https://github.com/CasanovaRamiro/ship-it",
    deployLink: "https://casanovaramiro.github.io/ship-it/",
    summary: {
      EN: "A three-minute browser game about running a sprint: eight days, three developers and more work than fits.",
      ES: "Un juego de tres minutos sobre dirigir un sprint: ocho días, tres desarrolladores y más trabajo del que entra.",
    },
    highlights: {
      EN: [
        "Each day you decide who works on what, then handle scope creep, production incidents and bad estimates. You are scored on value shipped, team morale and stakeholder trust.",
        "The game rules are pure functions with seeded randomness, so every sprint can be replayed and shared by link.",
        "Difficulty is tested, not guessed: two bot players run 500 sprints each and the tests assert that good planning wins.",
      ],
      ES: [
        "Cada día decidís quién trabaja en qué y resolvés cambios de alcance, incidentes en producción y malas estimaciones. Se puntúa el valor entregado, la moral del equipo y la confianza de los stakeholders.",
        "Las reglas del juego son funciones puras con aleatoriedad por semilla, así cada sprint se puede repetir y compartir con un link.",
        "La dificultad está testeada, no adivinada: dos bots juegan 500 sprints cada uno y los tests verifican que planificar bien gana.",
      ],
    },
    stack: ["React", "TypeScript", "Vite", "Vitest"],
    mobile: true,
  },
];

const useProjectsInfo = () => projects;

export default useProjectsInfo;
