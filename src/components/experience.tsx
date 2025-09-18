import Title from "./Title";

import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgNODE from "../assets/techno/node-js.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgPRISMA from "../assets/techno/prisma.webp";

import google from "../assets/companies/google.png";
import simplon from "../assets/companies/simplonLogo.jpg";
// import amazon from "../assets/companies/amazon.png";

import { motion, useInView, Variants } from "motion/react";
import {  useRef } from "react";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Node.js", image: imgNODE },
  { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 7, name: "TypeScript", image: imgTYPE },
  { id: 8, name: "Next.js", image: imgNEXT },
  { id: 9, name: "Prisma", image: imgPRISMA },
];

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Google",
    period: "Sep 2024 - Oct 2024",
    description: [
      "Développement de nouvelles fonctionnalités pour Google.",
      "Optimisation des performances de l'application.",
    ],
    image: google,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Simplon",
    period: "Jan 2025 - Juin 2025",
    description: [
      "Création d'une plateforme interne de collaboration pour les équipes.",
      "Mise en place d'une architecture scalable et optimisée.",
    ],
    image: simplon,
  },
  // {
  //   id: 3,
  //   role: "Frontend Developer",
  //   company: "Amazon",
  //   period: "Mai 2019 - Déc 2020",
  //   description: [
  //     "Développement d'une interface utilisateur pour Amazon Web Services.",
  //     "Implémentation des tests unitaires et E2E.",
  //   ],
  //   image: amazon,
  // }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once:true
  });

  const variant: Variants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col mt-1 "
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Title title="Mes Expériences" />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center space-x-1 p-4 mt-1">
        <div className="flex flex-wrap gap-4 md:flex-row md:ml-0 md:w-2/3 mt-4 md:mt-0">
          <motion.div className="flex flex-wrap gap-4 justify-center items-center"
               ref={ref}
              variants={variant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}>
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-24 h-24 p-2 rounded-full border-2 border-first-color hover:border-gray-200 justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <span className="mt-2 text-sm">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div className="flex flex-col md:ml-4 space-y-4 justify-center items-center"
              ref={ref}
              variants={variant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}>
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="flex flex-col bg-base-200 
            p-5 rounded-xl shadow-lg"
            >
              <div className="flex  p-2">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="rounded-full w-16 h-16 object-cover justify-center"
                />

                <div className="ml-2">
                  <h2 className="font-bold text-first-color hover:text-white">
                    {experience.role} , {experience.company}
                  </h2>
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>
              <ul className="list-disc mt-4 ml-16 ">
                {experience.description.map((desc, index) => (
                  <li key={index} className="hover:text-first-color">
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Experience;
