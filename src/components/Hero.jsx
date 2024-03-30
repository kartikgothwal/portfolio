import React from "react";
import { styles } from "../styles";
import { fadeIn, slideIn, textVariant } from "../util/motion";
import { motion } from "framer-motion";
import { mypic } from "../assets";
import { heroSubSkills, socials } from "../constants";
const SocialLinks = (props) => {
  return (
    <a href={props.link} target="_blank">
      <img
        src={props.icon}
        alt={props.name}
        className="h-8 cursor-pointer transition-all ease-in duration-200 w-8 hover:scale-125"
      />
    </a>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="h-full w-full flex items-center justify-center flex-wrap-reverse">
        <div className={`${styles.paddingX} flex flex-row gap-10 max-w-5xl`}>
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
              {heroSubSkills.map((skills, index) => {
                return (
                  <span key={skills.id}>
                    {" "}
                    {index == 0 ? skills.title : " / " + skills.title}
                  </span>
                );
              })}
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
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              initial="hidden"
              animate="show"
              className="flex mt-8 flex-row flex-wrap gap-6"
            >
              {socials.map((social) => {
                return (
                  <SocialLinks
                    key={social.name}
                    link={social.link}
                    name={social.name}
                    icon={social.icon}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <div className="  shape border-2 2xl:flex hidden border-black ">
          <img src={mypic} alt="" className="" />
        </div>
      </div>

      <div className="  flex absolute w-full bottom-5 mx-auto  items-start justify-center">
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
