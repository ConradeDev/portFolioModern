import { motion, useScroll } from "motion/react"
import About from "../components/About"
import Contact from "../components/contact"
import Diplome from "../components/Diplome"
import Experience from "../components/experience"
import Footer from "../components/Footer"
import Header from "../components/Hearder"
import Home from "../components/Home"

import Projet from "../components/projet"


const Homes = () => {
   const { scrollYProgress } = useScroll()
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
         <Projet/>
      </div>
      
      <div className=" md:px-[10%] "  id="contact">
         <Contact/>
      </div>
      <div className=" md:px-[10%] "  id="Footer">
         <Footer/>
      </div>
    </div>
  )
}

export default Homes;
