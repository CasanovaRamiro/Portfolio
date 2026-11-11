import { useState } from "react";

const useProjectsInfo = () => {
  const [projects] = useState([
    {
      img: "shipIt",
      name: "Ship It!",
      gitHubLink: "https://github.com/CasanovaRamiro/ship-it",
      deployLink: "https://casanovaramiro.github.io/ship-it/",
      infoEnglish: [
        "A three-minute browser game about running a sprint: eight days, three developers and more work than fits.",
        "Each day you decide who works on what, then handle scope creep, production incidents and bad estimates. You are scored on value shipped, team morale and stakeholder trust.",
        "The game rules are pure functions with seeded randomness, so every sprint can be replayed and shared by link.",
        "Difficulty is tested, not guessed: two bot players run 500 sprints each and the tests assert that good planning wins.",
        "Tech Stack: React, TypeScript, Vite and Vitest, with no other dependencies.",
      ],
      infoEspañol: [
        "Un juego de tres minutos sobre dirigir un sprint: ocho días, tres desarrolladores y más trabajo del que entra.",
        "Cada día decidís quién trabaja en qué y resolvés cambios de alcance, incidentes en producción y malas estimaciones. Se puntúa el valor entregado, la moral del equipo y la confianza de los stakeholders.",
        "Las reglas del juego son funciones puras con aleatoriedad por semilla, así cada sprint se puede repetir y compartir con un link.",
        "La dificultad está testeada, no adivinada: dos bots juegan 500 sprints cada uno y los tests verifican que planificar bien gana.",
        "Tecnologías utilizadas: React, TypeScript, Vite y Vitest, sin otras dependencias.",
      ],
      mobile: true,
    },
  ]);

  return projects;
};

export default useProjectsInfo;
