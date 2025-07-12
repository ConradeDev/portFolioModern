import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import Title from "./Title";

import OIF from "../assets/diplome/OIF.jpg";
import UAC from "../assets/diplome/UAC.png";
import valley from "../assets/diplome/valley.jpg";
// import office from "../assets/diplome/Office Bac.png";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";

const Diplome = () => {
  const sliders = [
    { id: 1, title: "HTML", image: imgHTML },
    { id: 2, title: "CSS", image: imgCSS },
    { id: 3, title: "JavaScript", image: imgJS },
  ];
  return (
    <div>
      <Title title="Diplome et Formation" />
      <div
        className="flex flex-col  
         justify-center items-center"
      >
        <section className="timelinePortFolio flex flex-col">

          {/* timeline Portfolio left Simplon */}
          <motion.div 
            className="container left "
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{margin:"0px 0px -100px 0px"}}
            transition={{
              duration:1,
              ease:"easeOut"
            }}
          >
             <div
              className="flex flex-col bg-white 
             text-black p-5 rounded-sm shadow-lg overflow-hidden "
            >
              <h1 className="flex justify-center ">Formation</h1>
              <div className="flex ">
                <div className="flex justify-center items-center shadow-lg rounded-full border overflow-hidden">
                  <img
                    src={OIF}
                    alt="Simplon"
                    className=" w-16 h-16 object-scale-down flex "
                  />
                </div>
                <div className="ml-2">
                  <span className="text-xs tracking-tighter">
                    Jan 2025 - Juin 2025
                  </span>
                  <h2 className="font-bold  text-sm text-nowrap hover:text-first-color">
                    Developpement Web FullStack
                  </h2>
                  <div className="text-first-color flex tracking-tighter hover:text-gray-900">
                    <span className="flex items-center tracking-tighter mr-2">
                      <MapPin className="w-4 h-4 text-black hover:text-first-color" /> 
                    </span>
                    SIMPLON BENIN
                    </div>
                </div>
              </div>

              {/* description formation */}
              <ul className="list-disc mt-4 ml-6 text-sm tracking-tighter ">
                <li className="hover:text-gray-600">
                  <p className="flex">
                    Formation approfondie en développement web Avancés, couvrant
                    des technologies comme JavaScript, React, Express.JS Node.JS
                  </p>
                </li>
                <li className="hover:text-gray-600">
                  <p className="flex">
                    D-CLIC Un Programme de formation organisé par l'Organisation 
                    Internationale de la Francophonie(OIF)
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* timeline Portfolio right */}
          <motion.div 
            className="container right"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{margin:"0px 0px -100px 0px"}}
            transition={{
              duration:1,
              ease:"easeOut"
            }}
          >
             <div
              className="flex flex-col bg-white 
             text-black p-5 rounded-sm shadow-lg overflow-hidden"
            >
              <h1 className="flex justify-center ">Diplome</h1>
              <div className="flex ">
                <div className="flex justify-center items-center">
                  <img
                    src={UAC}
                    alt="Simplon"
                    className="rounded-full w-16 h-16 object-cover flex "
                  />
                </div>
                <div className="ml-2">
                  <span className="text-xs tracking-tighter">
                    Nov 2020 - Juin 2025
                  </span>
                  <h2 className="font-bold  text-sm hover:text-first-color">
                    Licence Mathématique Informatique Application
                  </h2>
                  <div className="text-first-color flex  hover:text-gray-900">
                    <span className="flex items-center tracking-tighter mr-2">
                      <MapPin className="w-4 h-4 text-black hover:text-first-color" /> 
                    </span>
                    Université d'Abomey-Calavi
                    </div>
                </div>
              </div>

              <div className="bg-base-200 text-xs p-2 mt-2 mb-2 text-white">
                <p className="flex text-nowrap "> Sciences naturel et recherche structuré en informatique</p>
              </div>

              {/* description formation */}
              <ul className="list-disc mt-4 ml-6 text-sm tracking-tighter">
                <li className="hover:text-gray-600">
                  <p className="flex">
                    Introduction à la physique quantique
                  </p>
                </li>
                <li className="hover:text-gray-600">
                  <p className="flex">
                    Mathématique Fondamentale
                  </p>
                </li>
                <li className="hover:text-gray-600">
                  <p className="flex">
                    Programmation orientée Object en C/C++
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* timeline Portfolio left Programmtion Python */}
          <motion.div className="container left"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{margin:"0px 0px -100px 0px"}}
            transition={{
              duration:1,
              ease:"easeOut"
            }}
          >
            <div
              className="flex flex-col bg-white 
             text-black p-5 rounded-sm shadow-lg overflow-hidden"
            >
              <h1 className="flex justify-center ">Formation</h1>
              <div className="flex ">
                <div className="flex justify-center items-center shadow-lg rounded-lg border ">
                  <img
                    src={valley}
                    alt="Python"
                    className=" w-16 h-16 object-cover flex "
                  />
                </div>
                <div className="ml-2">
                  <span className="text-xs tracking-tighter">
                    Février 2024 - Mai 2024
                  </span>
                  <h2 className="font-bold  text-sm hover:text-first-color">
                    Programmation en PYTHON & Initiation au machine Learning
                  </h2>
                  <div className="text-first-color flex text-nowrap hover:text-gray-900">
                    <span className="flex items-center tracking-tighter mr-2">
                      <MapPin className="w-4 h-4 text-black hover:text-first-color" /> 
                    </span>
                    Fondation Valley - Bénin Excellence
                  </div>
                </div>
              </div>

              {/* description formation */}
              <ul className="list-disc mt-4 ml-6 text-sm tracking-tighter ">
                <li className="hover:text-gray-600">
                  <p className="flex">
                    Formation en Programmation en Python et intelligence Artificielle,
                    couvrant
                    des technologies comme Python, Jupiter, Numpy,searbon etc
                  </p>
                </li>
                <li className="hover:text-gray-600">
                  <p className="flex">
                    Apprentissage en machine learning , modèle de regression lineaire
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>


             {/* timeline Portfolio right Baccalaureat */}
          <motion.div className="container right"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{margin:"0px 0px -100px 0px"}}
            transition={{
              duration:1,
              ease:"easeOut"
            }}
          >
             <div
              className="flex flex-col bg-white 
             text-black p-5 rounded-sm shadow-lg overflow-hidden"
            >
              <h1 className="flex justify-center ">Diplôme</h1>
              <div className="flex ">
                {/* <div className=" ">
                  <img
                    src={office}
                    alt="Baccalaureat"
                    className="rounded-full w-full h-full object-cover flex "
                  />
                </div> */}
                <div className="ml-2">
                  <span className="text-xs tracking-tighter">
                    Nov 2019 - Jun 2020
                  </span>
                  <h2 className="font-bold  text-sm hover:text-first-color">
                    Bachelor série C
                  </h2>
                  <div className="text-first-color flex text-nowrap hover:text-gray-900">
                    <span className="flex items-center tracking-tighter mr-2">
                      <MapPin className="w-4 h-4 text-black hover:text-first-color" /> 
                    </span>
                    Office du Baccalauréat, Cotonou/Bénin
                    </div>
                </div>
              </div>

              {/* description formation */}
              <ul className="list-disc mt-4 ml-6 text-sm tracking-tighter  ">
                <li className="hover:text-gray-600">
                  <p className="flex">
                    Premier diplôme universitaire
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* carousel preuve diplome */}
        <div
          className="md:w-1/3 md:h-1/3 md:right-0 justify-center items-center 
       w-64 "
        >
          <Title title="Preuve Diplôme & Formation" />
          <Carousel className="max-w-md mt-4 flex" showThumbs={false}>
            {sliders.map((slider) => (
              <div key={slider.id} className="">
                <img
                  src={slider.image}
                  alt=""
                  className="object-cover w-full h-full  "
                />
                <h2>{slider.title}</h2>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Diplome;
