import "./App.css";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import StackButton from "./components/stack_button";
import DemoButton from "./components/demo_button";
import Footer from "./components/footer";
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
  // Initialize state to store the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Define a function to update the window width when it changes
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Set up an effect to add and remove the event listener
  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener("resize", handleWindowResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // The empty dependency array means this effect runs once, similar to componentDidMount

  // Check if the window size is reduced (you can define your own threshold)
  const isReduced = windowWidth < 768;

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
  const tiltVariants = {
    initial: { rotateX: 0, rotateY: 0 },
    tilt: { rotateX: 0, rotateY: 100 },
  };
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  // function textBlenderDiv(text) {
  //   return (
  //     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
  //       {text}
  //     </div>
  //   );
  // }
  const rotationDegreeY = isReduced
    ? 0
    : Math.min(Math.max((mousePosition.x - windowWidth / 2) * 0.2, -45), 45);
  const rotationDegreeX = isReduced
    ? 0
    : Math.min(Math.max((mousePosition.y - 500) * 0.2, -45), 45) * -1;
  return (
    <div className="App  md:cursor-none">
      <nav className="grid grid-cols-10 grid-rows-1 my-4 mb-10 font-bold ">
        <div className=" col-span-6 md:col-span-8">
          <div className=" text-left mx-4">Yeil's Portfolios</div>
        </div>
        <button
          className=" col-span-2 md:col-span-1"
          onClick={() => {
            window.open("https://github.com/YaleDevUni");
          }}
        >
          Github
        </button>
        <button
          onClick={() => {
            window.open("https://pdfhost.io/v/gHg1ee8pj_ResumeGeneral2");
          }}
        >
          Resume
        </button>
      </nav>
      {/* Field of Greeting */}
      <div className="animated-box in">
        <div className="">
          <div
            className=" text-2xl md:text-7xl"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Hello, I'm Yeil,
          </div>
          <div
            className=" md:text-5xl"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <br />
            I'm software engineer, and fullstack web developer
          </div>
        </div>
      </div>
      <motion.div
        className="tilt-container"
        initial="initial"
        whileHover="tilt"
        variants={tiltVariants}
        style={{ perspective: "1000px" }}
      ></motion.div>
      {/* Field of Skills */}
      <div className="mx-0 grid grid-rows-5 grid-cols-6 h-72  items-center text-center gap-4 md:mx-[20%]">
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
              rotateX: `${rotationDegreeX}deg`,
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
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <JavascriptIcon />
          </motion.svg>

          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <TypescriptIcon />
          </motion.svg>
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <JavaIcon />
          </motion.svg>
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <CIcon />
          </motion.svg>
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <PythonIcon />
          </motion.svg>
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <DartIcon />
          </motion.svg>
        </div>
        <div className="col-span-6 grid grid-cols-8 h-full">
          <p className=" text-black hover:text-white ">HTML</p>
        </div>
        <div className=" text-2xl col-span-6">Frameworks and DB</div>
        <div className="col-span-6 grid grid-cols-8 h-full">
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <ReactIcon />
          </motion.svg>
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <TailwindIcon />
          </motion.svg>
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <NodeIcon />
          </motion.svg>
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full fill-white"
          >
            <DjangoIcon />
          </motion.svg>
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <FlutterIcon />
          </motion.svg>
          <DjangoIcon className="h-full w-full" />
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <MySQLIcon />
          </motion.svg>
          <motion.svg
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              // Set rotation based on cursor position
              rotateY: `${rotationDegreeY}deg`,
              rotateX: `${rotationDegreeX}deg`,
            }}
            className="h-full w-full"
          >
            <MongoDBIcon />
          </motion.svg>
        </div>
      </div>
      <hr class=" my-12  h-0.5 border-t-0 bg-white opacity-100 mx-[20%] pulse-divider md:my-32" />
      <hr class=" my-12 h-0.5 border-t-0 bg-white opacity-100 mx-[30%] pulse-divider2 md:my-32 " />
      <hr class=" my-12 h-0.5 border-t-0 bg-white opacity-100 mx-[40%] pulse-divider3 md:my-32" />
      <div className=" text-2xl text-white text-center">Projects</div>
      <div className="mx-[5%] my-8 bg-zinc-900  rounded-md md:mx-[20%]">
        {" "}
        <div className="p-4">
          <div className=" text-2xl text-white mb-2">Weather Website</div>
          <img className=" rounded" src="/weather.jpg" alt="weather"></img>{" "}
          <div className=" text-white text-xl my-4">
            Fully functional full-stack website fetching weather data from an
            API, and performing visualization and analysis of the relationship
            between UV index and temperature.
          </div>
          <div className="flex flex-wrap gap-2">
            <StackButton text="Django" />
            <StackButton text="MySql" />
            <StackButton text="Tailwind" />
            <StackButton text="AWS EC2" />
            <StackButton text="SSR" />
          </div>
          <div className="flex justify-end ">
            <DemoButton text="Go Live" url="https://weather.yesyeil.ca" />
            <DemoButton
              text="Github"
              url="https://github.com/YaleDevUni/data_analyzer"
            />
          </div>
        </div>
      </div>
      <div className="mx-[5%] my-8 bg-zinc-900  rounded-md md:mx-[20%]">
        {" "}
        <div className="p-4">
          <div className=" text-2xl text-white mb-2">Porfolio Website</div>
          <img
            className=" rounded"
            src="/portfolio.jpg"
            alt="portfolio"
          ></img>{" "}
          <div className=" text-white text-xl my-4">
            User interacitve portfolio website built with React and Tailwind.
            Mounted framer motion for animation effect.
          </div>
          <div className="flex flex-wrap gap-2">
            <StackButton text="React" />
            <StackButton text="Tailwind" />
            <StackButton text="Framer Motion" />
            <StackButton text="Netlify" />
          </div>
          <div className="flex justify-end ">
            <DemoButton
              text="Github"
              url="https://github.com/YaleDevUni/portfolio"
            />
          </div>
        </div>
      </div>
      <Footer />
      {isReduced ? (
        <div />
      ) : (
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
      )}
    </div>
  );
}

export default App;
