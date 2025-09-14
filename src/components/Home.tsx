import React, { useState, useEffect, useRef } from 'react';
import { Mail } from "lucide-react";
import img from "../assets/image1.jpg";
import { motion, useAnimation, useInView } from 'motion/react';

const TypingAnimation: React.FC = () => {
  const textArray = [
          "je suis développeur fullstack avec 3ans d'expérience, utilisant React et Node JS. Contactez-moi si vous avez besoin de mes services",
  ];

  const typedDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;

  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (textArray.length) {
      timeoutRef.current = setTimeout(() => {
        type();
      }, newTextDelay + 250);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isTyping) {
      if (charIndex < textArray[textArrayIndex].length) {
        timeoutRef.current = setTimeout(() => {
          setTypedText(prev => prev + textArray[textArrayIndex].charAt(charIndex));
          setCharIndex(prev => prev + 1);
        }, typedDelay);
      } else {
        setIsTyping(false);
        timeoutRef.current = setTimeout(() => {
          erase();
        }, newTextDelay);
      }
    } else {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setTypedText(textArray[textArrayIndex].substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, erasingDelay);
      } else {
        setIsTyping(true);
        setTextArrayIndex(prev => (prev + 1) % textArray.length);
        timeoutRef.current = setTimeout(() => {
          type();
        }, typedDelay + 1100);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [charIndex, textArrayIndex, isTyping]);

  const type = () => {
    setIsTyping(true);
  };

  const erase = () => {
    setIsTyping(false);
  };

  return (
    <>
      {typedText}
      <span className={`cursor ${isTyping ? 'typing' : ''}`}>&nbsp;</span>
    </>
  );
};

const Home = () => {
  const ref=useRef(null);
  const isInView=useInView(ref,{once:false});

  const mainControls=useAnimation();

  useEffect(()=>{
    if (isInView){
      mainControls.start("visible");
    }
  },[isInView]);
  return (
    <motion.div
      className="flex flex-col-reverse md:flex-row 
         justify-center items-center md:my-3
         mt-4 md:mt-6 relative "
    >
      <div className="flex flex-col md:w-2/3">
        <h1
          className="font-bold text-5xl md:text-6xl 
            text-center md:text-left mt-4 md:mt-0"
        >
          Bonjour,
          <br />
          je suis <span className="text-first-color">Conrade Dev</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left typed-text">
         
          <TypingAnimation />
        </p>
        <a href="#contact" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>
      <div className="md:ml-60 animate-pulse  md:w-1/3">
        <img
          src={img}
          alt=""
          className="object-cover 
        w-72 h-72 md:w-96 md:h-96 border-8 border-first-color"
          style={{
            borderRadius: "30% 70% 70% 30%/65% 62% 38% 33%",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Home;