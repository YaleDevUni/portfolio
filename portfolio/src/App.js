import "./App.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: "difference",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    button: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "red",
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  function textBlenderDiv(text) {
    return (
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        {text}
      </div>
    );
  }

  return (
    <div className="App">
      <nav className="grid grid-cols-10 grid-rows-1 my-2 ">
        <div className=" col-span-7">
          <div className=" text-left mx-4">Yeil's Portfolios</div>
        </div>
        <div>Github</div>
        <div>Resume</div>
        <div>Contact</div>
      </nav>
      <div
        // onMouseEnter={textEnter}
        // onMouseLeave={textLeave}
        className=" cursor-none"
      >
        {textBlenderDiv("Hi,")}
        <div>Hi,</div>
        <div>I'm Yeil,</div>
        <div>I'm software engineer, and fullstack web developer</div>
        <button onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>
          hey
        </button>
        <div>Languages: Python C C++ Java Dart Javascript Typescript </div>
        <div>Frameworks Frontend:HTML CSS React.js tailwindcss Flutter</div>
        <div>Frameworks Backend: Node.js Django</div>
        <div>Database: MySQL MongoDB</div>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
    </div>
  );
}

export default App;

// <div className="active-scale cursor-none">

// </div>
