


  import { motion, useAnimation, useInView, useScroll } from "motion/react"
import About from "./components/About"
import Contact from "./components/contact"
import Diplome from "./components/Diplome"
import Experience from "./components/experience"
import Footer from "./components/Footer"
import Header from "./components/Hearder"
import Home from "./components/Home"

import ProjetPortfolio from "./components/ProjetPortofolio"
import { useEffect, useRef } from "react"


export default function App() {
   const { scrollYProgress } = useScroll();


     const ref=useRef(null);
     const isInView=useInView(ref,{once:true});
   
     const mainControls=useAnimation();
   
     useEffect(()=>{
       if (isInView){
         mainControls.start("visible");
       }
     });
  return (
    <div 
      id="index">
      
      <div className=" z-50  
      fixed top-0 w-full  ">

         <div className="bg-gray-900">
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#bda926",
                }}
            />
         </div>
         {/* Header */}
      <Header/>
      </div>
      
      <motion.div
      ref={ref}
      variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration:1, delay:0.5
      }}
      >
         <div className="md:px-[5%] p-1 pt-24 " id="Accueil">
         <Home/>
      </div>
      <div className="" id="About">
         <About/>
      </div>
      <div className=" md:px-[10%]" id="Experience">
         <Experience/>
      </div>
      <div className=" md:px-[0%]" id="Diplome">
         <Diplome/>
      </div>
      <div className=" md:px-[10%] "  id="Projets">
         <ProjetPortfolio/>
      </div>
      
      <div className=" md:px-[10%] "  id="contact">
         <Contact/>
      </div>
      </motion.div>
      <div className=" md:px-[10%] "  id="Footer">
         <Footer/>
      </div>
    </div>
  )
}



