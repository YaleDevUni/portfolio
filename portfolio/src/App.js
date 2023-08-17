import "./App.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactComponent as DjangoIcon } from "./logos/Django.svg";
import { ReactComponent as ReactIcon } from "./logos/React_logo.svg";
import { ReactComponent as PythonIcon } from "./logos/Python_logo.svg";
import { ReactComponent as CIcon } from "./logos/C_logo.svg";
import { ReactComponent as CSSIcon } from "./logos/CSS_logo.svg";
import { ReactComponent as HTMLIcon } from "./logos/HTML_logo.svg";
import { ReactComponent as JavaIcon } from "./logos/Java_logo.svg";
import { ReactComponent as DartIcon } from "./logos/Dart_logo.svg";
import { ReactComponent as JavascriptIcon } from "./logos/Javascript_logo.svg";
import { ReactComponent as TypescriptIcon } from "./logos/Typescript_logo.svg";
import { ReactComponent as TailwindIcon } from "./logos/Tailwind_logo.svg";
import { ReactComponent as FlutterIcon } from "./logos/Flutter_logo.svg";
import { ReactComponent as NodeIcon } from "./logos/Node_logo.svg";
import { ReactComponent as MySQLIcon } from "./logos/MySql_logo.svg";
import { ReactComponent as MongoDBIcon } from "./logos/MongoDB_logo.svg";
import { ReactComponent as WebGlIcon } from "./logos/WebGl_logo.svg";

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

      <div className="animated-box in">
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
      </div>
      <div className="grid grid-rows-1 grid-cols-6 h-40 mx-[10%]  items-center bg-white">
        <div className=" text-2xl text-black col-span-1">
          Programming Languages :{" "}
        </div>
        <div className="col-span-5 grid grid-cols-6 h-full gap-4">
          <JavaIcon className=" h-full w-full" />
          <CIcon className="h-full w-full fill-white" />
          <TypescriptIcon className="h-full w-full" />
          <JavascriptIcon className="h-full w-full" />
          <DartIcon className="h-full w-full" />
        </div>
      </div>
      {/* Apply Effect on cursor */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
}

export default App;

// <div className="active-scale cursor-none">

// </div>
