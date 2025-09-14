import { Container, Facebook, Instagram, Linkedin, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center  p-10 flex flex-col-reverse md:flex-row ">
      <aside className="md:w-1/3">
        <Container className="w-10 h-10" />
        <p className="font-bold">
          Conrade
          <span className="text-first-color">DEV</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>
      <nav className="md:w-2/3 flex flex-col md:flex-row ">

        <div className=" md:w-1/2 flex items-center space-x-4 text-first-color">
          <a
            href="https://www.facebook.com/conrade.bossoudaho/"
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
            href="https://www.linkedin.com/in/conrade-bossoudaho-89a009243"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-50">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <div className="md:w-1/2">
        <p className="text-gray-200"> Call me</p>
          <p className="text-gray-100">
            <a href="tel:+2290160168813" className="hover:text-gray-300">
              <PhoneCall className="w-5 h-5 inline-block mr-2" />
                +229 01 60-16-88-13
            </a>
          </p>
      </div>
      </nav>

    </footer>
  );
};
export default Footer;
