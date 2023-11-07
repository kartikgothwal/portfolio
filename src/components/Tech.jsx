import { BallCanvas } from "./canvas";
import SectionWrapper from "./hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../util/motion";
import { styles } from "../styles";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech Stack</p>
        <h1
          className={`${styles.sectionHeadText} hover:text-secondary transition-colors duration-150 ease-in cursor-pointer`}
        >
          <span
            className={`${styles.heroHeadText} text-[#915eff]`}
            style={{ color: "#915eff" }}
          >
            {" "}
            Skills .
          </span>{" "}
        </h1>
      </motion.div>

      <div className="flex mt-16 flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="mt-2 text-center text-secondary font-poppins font-medium">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
