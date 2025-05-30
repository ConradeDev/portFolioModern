import Title from "./Title";

import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";
import { Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gestionnaire de tâches",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "#",
    image: img1,
  },
  {
    id: 2,
    title: "Plateforme E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 3,
    title: "Portfolio interactif",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    repoLink: "#",
    image: img3,
  },
  {
    id: 4,
    title: "Application de Chat en temps réel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Socket.io", "Express.js"],
    demoLink: "#",
    repoLink: "#",
    image: img4,
  },
  {
    id: 5,
    title: "Système de réservation de salles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "MongoDB", "Chakra UI"],
    demoLink: "#",
    repoLink: "#",
    image: img5,
  },
  {
    id: 6,
    title: "Analyseur de sentiment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Python", "Flask", "NLTK"],
    demoLink: "#",
    repoLink: "#",
    image: img6,
  },
];

const Projet = () => {
  return (
    <div className="w-full mt-2 scroll-animation ">
      <Title title=" Mes Projet" />
      <div className=" grid md:grid-cols-3 gap-4 mt-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"
          >
            <div className="">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-56 rounded-xl"
              />
            </div>
            <div>
              <h1 className="my-2 font-bold">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
                 {project.technologies.map((teck)=>(
                    <span className="badge badge-accent badge-sm">
                         {teck}
                    </span>
                 ))}
            </div>
            <div className="flex">
                <a className="btn btn-accent w-2/3" href={project.demoLink}>
                    Demo
                    <Video className="w-4" />
                </a>

                <a className="btn btn-neutral ml-2 w-1/3" href={project.repoLink}>
                    <Github className="w-4" />
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projet;
