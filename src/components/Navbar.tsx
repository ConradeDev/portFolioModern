import { Container } from "lucide-react";
import { useState } from "react";

const Navbar=()=>{
    const [showLinks,setShowLinks]=useState(false);
    const handleShowLinks=()=>{
        setShowLinks(!showLinks)
    }
    return (
        <div className={`flex justify-center md:justify-between 
        items-center p-4 z-50 ${showLinks? "show-navbar":"hide-nav"}`}>
        <a href="#index" className="flex items-center font-bold text-3xl md:text-xl">
            <Container className="mr-2"/>
            Conrade
            <span className="text-[#29d9d5]">DEV</span>
        </a>
        <ul  className="md:flex space-x-4 navbar-links right-[-10px]">
            <li className="navbar-item  slideInDown-1">
                <a href="#Accueil"
                     className="btn btn-sm btn-ghost navbar-link"
                >
                    Accueil
                </a>
            </li>
            <li className="navbar-item slideInDown-2">
                <a href="#About"
                     className="btn btn-sm btn-ghost navbar-link"
                >
                    A propos
                </a>
            </li>
            <li className="navbar-item slideInDown-3">
                <a href="#Experience"
                     className="btn btn-sm btn-ghost navbar-link"
                >
                    Mes Experience
                </a>
            </li>
            <li className="navbar-item slideInDown-4">
                <a href="#Diplome"
                     className="btn btn-sm btn-ghost navbar-link"
                >
                    Diplome & Formation
                </a>
            </li>
            <li className="navbar-item slideInDown-5">
                <a href="#Projets"
                     className="btn btn-sm btn-ghost navbar-link"
                >
                    Mes projets
                </a>
            </li>
        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}>
            <span className="burger-bar" ></span>
        </button>
        </div>
        
    )
}

export default Navbar;