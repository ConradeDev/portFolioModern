import { Facebook, Instagram, Linkedin,  } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-gray-900 text-white  ">
      <div className=" mx-auto flex justify-betwen items-center py-3 px-4">
        <div className="flex items-center space-x-4 text-first-color">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-50">
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-50">
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-50">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>Soyez les Bienvenues sur mon portfolio</span>
        </div>
        <div className="text-sm md:block hidden">
          <a href="tel:+2290160168813" className="hover:text-gray-300">
            +229 01 60-16-88-13
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
