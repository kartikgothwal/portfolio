import React from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../util/motion";
import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/Computers";
const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div
        className={`${styles.paddingX} flex flex-row gap-10 max-w-7xl mx-auto absolute top-[120px] inset`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 rounded-full w-5 bg-[#915eff]" />
          <div className="h-40 sm:h-80 w-1 violet-gradient" />
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={textVariant()}
          className="font-poppins flex flex-col"
        >
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm{" "}
            <span
              className={`${styles.heroHeadText} text-[#915eff]`}
              style={{ color: "#915eff" }}
            >
              {" "}
              Kartik!
            </span>
          </h1>{" "}
          <h3
            className={`${styles.heroSubText} text-secondary font-normal text-sm md:text-xl  text-gray-850 leading-[30px]`}
          >
            <span>JavaScript /</span> <span> MERN / </span>
            <span>Redux / RTK Query /</span>
            <span>Tailwind / </span>
            <span>Firebase /</span>
            <span> Styled-Component </span>
          </h3>
          <motion.p
            variants={fadeIn()}
            initial="hidden"
            animate="show"
            className={`${styles.heroSubText} mt-4`}
          >
            A passionate Full Stack Developer based in{" "}
            <br className="sm:block hidden" /> Indore, Madhya Pradesh.
          </motion.p>
        </motion.div>
      </div>
      <ComputersCanvas />
      <div className="absolute w-full bottom-5 mx-auto flex items-start justify-center">
        <a href="#about">
          <div className="border-4 border-secondary flex justify-center items-center h-[64px] w-[35px] rounded-3xl">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeateType: "loop",
              }}
              className="h-2 w-2 mb-2 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
