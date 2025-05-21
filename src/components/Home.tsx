import {useEffect} from "react";

import { Mail } from "lucide-react";
import img from "../assets/image1.jpg";
const Home = () => {
  useEffect(()=>{

  }, [])
  return (
    <div
      className="flex flex-col-reverse md:flex-row 
         justify-center items-center md:my-32 my-10
         mt-4 md:mt-0 "
    >
      <div className="flex flex-col ">
        <h1
          className="font-bold text-5xl md:text-6xl 
            text-center md:text-left mt-4 md:mt-0"
        >
          Bonjour,
          <br />
          je suis <span className="text-[#29d9d5]">Conrade Dev</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left typed-text">
          je suis développeur fullstack
          <br />
          avec 3ans d'expérience, utilisant React
          <br />
          et Node JS. Contactez-moi si vous avez besoin de mes services
          <span className="cursorWriting">&nbsp;</span>
        </p>
        <a href="" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>
      <div className="md:ml-60 animate-pulse">
        <img
          src={img}
          alt=""
          className="object-cover 
        w-72 h-72 md:w-96 md:h-96 border-8 border-[#29d9d5]"
          style={{
            borderRadius: "30% 70% 70% 30%/65% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
};
export default Home;
