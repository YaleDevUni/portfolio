import "./App.css";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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

      // console.log("Cursor X:", e.clientX, "Cursor Y:", e.clientY);
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
      // height: 150,
      // width: 150,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      // backgroundColor: "white",
      mixBlendMode: "difference",
      scale: 5,
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
  const rotationDegreeY = Math.min(
    Math.max((mousePosition.x - 800) * 0.2, -45),
    45
  );
  const rotationDegreeX =
    Math.min(Math.max((mousePosition.y - 500) * 0.2, -45), 45) * -1;

  return (
    <div className="App ">
      <nav className="grid grid-cols-10 grid-rows-1 my-2 mb-10 ">
        <div className=" col-span-7">
          <div className=" text-left mx-4">Yeil's Portfolios</div>
        </div>
        <div>Github</div>
        <div>Resume</div>
        <div>Contact</div>
      </nav>
      {/* Field of Greeting */}
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
      </div>
      {/* Field of Skills */}
      <div className="grid grid-rows-4 grid-cols-6 h-64 mx-[20%] items-center text-center gap-4 ">
        <div className=" text-2xl col-span-6">Languages</div>
        <div className="col-span-6 grid grid-cols-8 h-full">
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`, // Adjust the rotation factor as needed
            }}
            className="h-full w-full"
          >
            <HTMLIcon />
          </motion.svg>

          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`, // Adjust the rotation factor as needed
            }}
            className="h-full w-full"
          >
            <CSSIcon />
          </motion.svg>
          {/* <CSSIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          /> */}
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`, // Adjust the rotation factor as needed
            }}
            className="h-full w-full"
          >
            <JavascriptIcon />
          </motion.svg>
          {/* <JavascriptIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          /> */}
          <TypescriptIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          />
          <JavaIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className=" h-full w-full"
          />
          <CIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full fill-white"
          />
          <PythonIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          />
          <DartIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          />
        </div>
        <div className=" text-2xl col-span-6">Frameworks and DB</div>
        <div className="col-span-6 grid grid-cols-8 h-full">
          <ReactIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          />
          <TailwindIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          />
          <NodeIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          />
          <DjangoIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full fill-white"
          />
          <FlutterIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          />
          <DjangoIcon className="h-full w-full" />
          <MySQLIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          />
          <MongoDBIcon
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="h-full w-full"
          />
        </div>
      </div>
      <hr class=" my-32 h-0.5 border-t-0 bg-white opacity-100 mx-[20%] pulse-divider" />
      <hr class=" my-32 h-0.5 border-t-0 bg-white opacity-100 mx-[30%] pulse-divider2 " />
      <hr class=" my-32 h-0.5 border-t-0 bg-white opacity-100 mx-[40%] pulse-divider3" />
      {/* Apply Effect on cursor */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          ease: "linear",
          duration: 0,
          scale: { duration: 0.2 },
        }}
      />
    </div>
  );
}

export default App;

// <div className="active-scale cursor-none">

// </div>
