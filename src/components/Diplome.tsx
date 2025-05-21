import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import Title from "./Title";

const Diplome = () => {
    
  const sliders = [
    { id: 1, title: "HTML", image:imgHTML},
    { id: 2, title: "CSS", image: imgCSS },
    { id: 3, title: "JavaScript", image:imgJS }
  ];
  return (
    <div >
      <Title title="Diplome et Formation"/>
      <div
      className="flex flex-col md:flex-row 
         justify-center items-center"
    >
      
      <section className="timelinePortFolio">
      <div className="container left">
        <div className="content">
          <h2>2024-2025 (formation Simplon)</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            tempora quod accusamus mollitia dicta odio obcaecati, neque maxime
            quis aut illum nulla officia doloremque, laborum veniam
            necessitatibus deleniti corrupti ex?
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="content">
          <h2>2024-2025 (formation Simplon)</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            tempora quod accusamus mollitia dicta odio obcaecati, neque maxime
            quis aut illum nulla officia doloremque, laborum veniam
            necessitatibus deleniti corrupti ex?
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="content">
          <h2>2024-2025 (formation Simplon)</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            tempora quod accusamus mollitia dicta odio obcaecati, neque maxime
            quis aut illum nulla officia doloremque, laborum veniam
            necessitatibus deleniti corrupti ex?
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="content">
          <h2>2024-2025 (formation Simplon)</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            tempora quod accusamus mollitia dicta odio obcaecati, neque maxime
            quis aut illum nulla officia doloremque, laborum veniam
            necessitatibus deleniti corrupti ex?
          </p>
        </div>
      </div>
        
    </section>
       <div className="md:w-1/3 md:h-1/3 md:right-0 justify-center items-center 
       w-64 ">
       <Carousel className="max-w-md">
        {
            sliders.map((slider)=>(
                <div key={slider.id} className="">
                    <img src={slider.image} alt="" className="object-cover w-32 h-32  "/>
                    <h2>{slider.title}</h2>
                </div>
            ))
        }
      </Carousel>
       </div>
    </div>
    </div>
    
   
  );
};
export default Diplome;
