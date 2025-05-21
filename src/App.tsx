import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/experience";
import Diplome from "./components/Diplome";
import Projet from "./components/projet";
import Footer from "./components/footer";


export default function App() {
  return (
    <div id="index">
      <div className="p-1 md:px-[10%] z-50 bg-[#29d9d5] 
      items-center  fixed top-0 w-full  ">
        <Navbar />
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
      <div className=" md:px-[10%] "  id="Footer">
         <Footer/>
      </div>
    </div>
  );
}
