import { Container, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center  p-10 flex flex-col md:flex-row">
      <aside>
        <Container className="w-10 h-10" />
        <p className="font-bold">
          Conrade
          <span className="text-first-color">DEV</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
