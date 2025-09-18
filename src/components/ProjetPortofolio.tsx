import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Title from "./Title";
import { Github, Video, X } from "lucide-react";

// Importez vos images
import gestionTaskImg from "../assets/projects/gestionTask.png";
import plateformShop from "../assets/projects/plateformShop.png";
import portFolioImg from "../assets/projects/portFolio.png";
import gameNumberImg from "../assets/projects/gameNumber.png";
// import img5 from "../assets/projects/5.png";
// import img6 from "../assets/projects/6.png";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  image: string;
}



const AnimatedProject: React.FC<{
  project: Project;
  index: number;
  onSelect: (project: Project, index: number) => void;
  onImageClick: (id: number) => void;
  isSelected: boolean;
  delay?: number;
}> = ({ project, index, onSelect, onImageClick, isSelected, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  return ( 
    <motion.div
      ref={ref}
      data-index={index}
      onClick={() => onSelect(project, index)}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer relative"
    >
      <div className={`p-4 bg-[#111] rounded-lg ${isSelected ? "bg-[#222] border border-accent" : ""}`}>
        <div>
          <motion.div
            layoutId={`image-container-${project.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onImageClick(project.id);
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-96 rounded-xl cursor-pointer"
            />
          </motion.div>
        </div>
        <div>
          <h1 className="my-2 font-bold text-white">{project.title}</h1>
          <p className="text-sm text-gray-300">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 my-3">
          {project.technologies.map((tech, i) => (
            <span key={i} className="badge badge-accent badge-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex">
          <a className="btn btn-accent w-2/3"
            href={project.demoLink}
            target="_blank"
            >
            Demo
            <Video className="w-4 ml-2" />
          </a>
          <a className="btn btn-neutral ml-2 w-1/3" 
            href={project.repoLink}
            target="_blank"
            >
            <Github className="w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};




const projects: Project[] = [
  {
    id: 1,
    title: "Gestionnaire de tâches",
    description: "Une plateforme intuitive qui transforme la gestion des projets d'équipe. Cette application élimine la complexité en offrant un espace centralisé où les équipes peuvent prioriser leur travail, visualiser les progrès et atteindre leurs objectifs plus efficacement. Développée avec une stack moderne pour des performances et une fiabilité optimales.",
    technologies: ["HTML", "Node.js", "Tailwind CSS","TypeScript"],
    demoLink: "https://www.loom.com/share/6e2f071b8bf4446c959319605fbfab0e?sid=3b658254-4c4e-43ed-b238-095df103ec3c",
    repoLink: "https://github.com/Jo-194/GESTION-",
    image: gestionTaskImg,
  },
  {
    id: 2,
    title: "Plateforme E-commerce Full-Stack",
    description: "Développement d'une boutique en ligne complète et dynamique. Cette application full-stack allie un frontend réactif et moderne construit avec React et Tailwind CSS à un backend robuste développé avec Node.js, ExpressJS et TypeScript pour offrir une expérience d'achat fluide et sécurisée.",
    technologies: ["html","css","Tailwind CSS","React","ExpressJS" ,"TypeScript", "nodeJS"],
    demoLink: "https://www.loom.com/share/abb94f14c0d849a6840560d257c1b239?sid=0aed6334-fae7-4205-ade3-7530ad4d1529",
    repoLink: "https://github.com/ConradeDev/projetEcommerceSimplon",
    image: plateformShop,
  },
  {
    id: 3,
    title: "Portfolio interactif",
    description: "Création d'une expérience en ligne unique qui sert à la fois de vitrine et de démonstration de compétences. Ce portfolio allie un design soigné, une ergonomie intuitive et des performances optimisées, le tout construit avec les technologies modernes React, TypeScript et Tailwind CSS pour un résultat professionnel et engageant.",
    technologies:  ["HTML", "JavaScript","react","Tailwind css","TypeScript"],
    demoLink: "#",
    repoLink: "https://github.com/ConradeDev/portFolioModern",
    image: portFolioImg,
  },
  {
    id: 4,
    title: "Jeu de Devinette de Nombre",
    description: "Développement d'un jeu interactif et ludique où le joueur doit trouver un nombre mystère généré aléatoirement. Une interface intuitive, des indices en temps réel et un compteur de tentatives rendent l'expérience engageante et addictive.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://www.loom.com/share/17237ccbd80542af8404f59a6f4fcf99?sid=1b90ec66-f3c0-45a8-b5ee-0aed0d4c380e",
    repoLink: "https://github.com/ConradeDev/gameNumber",
    image: gameNumberImg,
  },
  // {
  //   id: 5,
  //   title: "Système de réservation de salles",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
  //   technologies: ["Next.js", "MongoDB", "Chakra UI"],
  //   demoLink: "#",
  //   repoLink: "#",
  //   image: img5,
  // },
  // {
  //   id: 6,
  //   title: "Analyseur de sentiment",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
  //   technologies: ["Python", "Flask", "NLTK"],
  //   demoLink: "#",
  //   repoLink: "#",
  //   image: img6,
  // },
];

const ProjetPortfolio: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, projects.length - 1));
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < projects.length) {
          e.preventDefault();
          // Action supplémentaire si nécessaire
        }
      } else if (e.key === "Escape" && isExpanded) {
        e.preventDefault();
        handleImageClick(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, isExpanded]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    
    const container = listRef.current;
    const selectedItem = container.querySelector(
      `[data-index="${selectedIndex}"]`
    ) as HTMLElement | null;
    
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: "smooth",
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  const handleProjectSelect = (project: Project, index: number) => {
    setSelectedIndex(index);
  };

  const handleImageClick = (id: number | null) => {
    if (id !== null) {
      setSelectedId(id);
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
      setTimeout(() => setSelectedId(null), 300);
    }
  };

  // Trouver le projet sélectionné pour l'overlay
 const selectedProject = projects.find(project => project.id === selectedId); 

  return (
    <div className="w-full mt-2">
      <Title title="Mes Projets" />
      
      <div className="relative w-full max-w-4xl mx-auto">
        <div
          ref={listRef}
          className="p-4 "
          onScroll={handleScroll}
          // style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          {projects.map((project, index) => (
            <AnimatedProject
              key={project.id}
              project={project}
              index={index}
              onSelect={handleProjectSelect}
              onImageClick={handleImageClick}
              isSelected={selectedIndex === index}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Dégradés visuels pour le défilement */}
        <div
          className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#060010] to-transparent pointer-events-none transition-opacity duration-300"
          style={{ opacity: topGradientOpacity }}
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#060010] to-transparent pointer-events-none transition-opacity duration-300"
          style={{ opacity: bottomGradientOpacity }}
        ></div>

        {/* Overlay pour l'image agrandie */}
        <AnimatePresence>
          {isExpanded && selectedId && selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
              onClick={() => handleImageClick(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full max-w-4xl max-h-full overflow-auto">
                {/* Close Button */}
                <div className="flex justify-end p-4 sticky top-0 bg-black/70 rounded-lg">
                  <button 
                    onClick={() => handleImageClick(null)}
                    className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <X className="h-6 w-6 text-white" />
                  </button>
                </div>

                <motion.div
                  layoutId={`image-container-${selectedProject.id}`}
                  className="relative w-full h-auto"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },
                  }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg mx-auto"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="mt-4 text-white text-2xl text-center">
                    {selectedProject.title}
                  </h2>
                  <p className="mt-2 text-gray-300 text-center">
                    {selectedProject.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjetPortfolio;