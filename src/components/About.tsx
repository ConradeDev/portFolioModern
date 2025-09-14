import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import Title from "./Title";
import img from "../assets/image1.jpg";

import { motion, useScroll } from "motion/react";

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description: "Je suis un développeur frontend avec une bonne expérience.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description:
      "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description:
      "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
    icon: <Paintbrush className="text-accent scale-150" />,
  },
];

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <Title title="A Propos" />
      <div className=" bg-base-300 p-10 mb-4 md:mb-5 ml-5 mr-5">
      <div className=" flex justify-center p-4 mb-0 items-center">
        <div className="hidden md:block ">
          <img
            src={img}
            alt=""
            className="w-96 object-cover border-8 border-first-color"
          />
        </div>
        <motion.div style={{ scaleX: scrollYProgress }} />

        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <motion.div
              key={section.id}
              className="flex flex-col bg-base-100 p-5 rounded-xl md:flex-row items-center md:w-96  mb-4"
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
export default About;
