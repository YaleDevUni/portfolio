import "./App.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactComponent as DjangoIcon } from "./logos/django.svg";
import { ReactComponent as ReactIcon } from "./logos/react_logo.svg";

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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: "difference",
      backgroundColor: "red",
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  // function textBlenderDiv(text) {
  //   return (
  //     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
  //       {text}
  //     </div>
  //   );
  // }

  return (
    <div className="App cursor-none">
      <nav className="grid grid-cols-10 grid-rows-1 my-2 mb-10 ">
        <div className=" col-span-7">
          <div className=" text-left mx-4">Yeil's Portfolios</div>
        </div>
        <div>Github</div>
        <div>Resume</div>
        <div>Contact</div>
      </nav>

      <div
        className="animated-box in"
        // onMouseEnter={textEnter}
        // onMouseLeave={textLeave}
      >
        {/* <div className=" rainbow-block">df</div> */}
        {/* <div className=" p-6 my-[30vh] mx-[5vh]"> */}
        <div className="">
          <div
            className=" text-7xl"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Hello, I'm Yeil,
          </div>
          <div
            className=" text-5xl"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <br />
            I'm software engineer, and fullstack web developer
          </div>
        </div>
        {/* <button onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>
          hey
        </button>
        <div>Languages: Python C C++ Java Dart Javascript Typescript </div>
        <div>Frameworks Frontend:HTML CSS React.js tailwindcss Flutter</div>
        <div>Frameworks Backend: Node.js Django</div>
        <div>Database: MySQL MongoDB</div> */}

        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
      <DjangoIcon onMouseEnter={textEnter} onMouseLeave={textLeave} />

      <ReactIcon className=" w-1/4" />
    </div>
  );
}

export default App;

// <div className="active-scale cursor-none">

// </div>
