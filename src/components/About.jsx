import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { textVariant, fadeIn } from "../util/motion";
import SectionWrapper from "./hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h1 className="text-white text-[20px] font-bold text-center">
            {title}
          </h1>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>ABOUT ME</p>
        <h1
          className={`${styles.sectionHeadText} hover:text-secondary transition-colors duration-150 ease-in cursor-pointer`}
        >
          A{" "}
          <span
            className={`${styles.heroHeadText} text-[#915eff]`}
            style={{ color: "#915eff" }}
          >
            {" "}
            Full Stack
          </span>{" "}
          Developer.
        </h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a Full Stack Developer, I possess an impressive arsenal of skills in
        React.js,Redux Tailwind CSS, JavaScript, Node.js, Express.js, Firebase,
        HTML, CSS, Styled Component and Material UI. I have developed multiple
        projects which helped me to enhance my skills. Yes, having your strong
        base really helps and hence I am open to adapting to whichever framework
        is required. I believe Project Based Learning is the best approach to
        learn anything. Hence, I've got projects in all the different
        technologies that I've learned over time.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        By the way, when I'm not coding, you'll find me reading non-fiction, or
        watching UFC, or playing chess : )
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
