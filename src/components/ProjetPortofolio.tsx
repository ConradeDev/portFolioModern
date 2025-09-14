import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Title from "./Title";
import { Github, Video, X } from "lucide-react";

// Importez vos images
import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gestionnaire de tâches",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "#",
    image: img1,
  },
  {
    id: 2,
    title: "Plateforme E-commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 3,
    title: "Portfolio interactif",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    repoLink: "#",
    image: img3,
  },
  {
    id: 4,
    title: "Application de Chat en temps réel",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Socket.io", "Express.js"],
    demoLink: "#",
    repoLink: "#",
    image: img4,
  },
  {
    id: 5,
    title: "Système de réservation de salles",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "MongoDB", "Chakra UI"],
    demoLink: "#",
    repoLink: "#",
    image: img5,
  },
  {
    id: 6,
    title: "Analyseur de sentiment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Python", "Flask", "NLTK"],
    demoLink: "#",
    repoLink: "#",
    image: img6,
  },
];

const AnimatedProject: React.FC<{
  project: Project;
  index: number;
  onSelect: (project: Project, index: number) => void;
  isSelected: boolean;
  delay?: number;
}> = ({ project, index, onSelect, isSelected, delay = 0 }) => {
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
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-56 rounded-xl"
          />
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
          <a className="btn btn-accent w-2/3" href={project.demoLink}>
            Demo
            <Video className="w-4 ml-2" />
          </a>
          <a className="btn btn-neutral ml-2 w-1/3" href={project.repoLink}>
            <Github className="w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projet: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

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
    // Ajoutez ici d'autres actions si nécessaire
  };



  const [selectedId, setSelectedId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = (id) => {
    if (!isExpanded) {
      setSelectedId(id);
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <div className="w-full mt-2  ">
      <Title title="Mes Projets" />
      
      <div className="relative w-full max-w-4xl mx-auto">
        <div
          ref={listRef}
          className=" p-4 scrollbar-thin scrollbar-thumb-[#222] scrollbar-track-[#060010]"
          onScroll={handleScroll}
        >
          {projects.map((project, index) => (
            <AnimatedProject
              key={project.id}
              project={project}
              index={index}
              onSelect={handleProjectSelect}
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
            {isExpanded && (
              <motion.div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer max-h-screen"
                onClick={() => handleImageClick(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  {/* Close Button */}
                  <div className=" flex justify-end p-4 rigt-0">
                    <button onClick={() => handleImageClick(null)}>
                      <X className="h-6 w-6 text-gray-600" />
                    </button>
                  </div>

                  {projects.map((project) => {
                    if (project.id === selectedId) {
                      return (
                        <motion.div
                          key={project.id}
                          layoutId={`project-${project.id}`}
                          className="relative w-full max-w-4xl h-auto mt-4"
                          onClick={(e) => e.stopPropagation()}
                          initial={{ scale: 0.8 }}
                          animate={{
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          }}
                          exit={{ scale: 0.8 }}
                        >
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto max-h-[80vh] object-cover rounded-lg mt-10"
                          />
                          <motion.h2
                            className="mt-4 text-white text-2xl text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {project.title}
                          </motion.h2>
                        </motion.div>
                      )
                    }
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </div>
  );
};

export default Projet;