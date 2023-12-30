import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../util/motion";
import SectionWrapper from "./hoc";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative h-[230px] w-full ">
          <img
            src={image}
            alt={image}
            className="w-full h-full rounded-2xl object-cover  "
          />
          <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link.github, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => {
                window.open(source_code_link.link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-external-link"
              >
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                <path d="M11 13l9 -9"></path>
                <path d="M15 4h5v5"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <a href={source_code_link.link} target="_blank">
            <h3 className="hover:underline font-bold text-[24px] cursor-pointer text-white">
              {name}
            </h3>
          </a>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 whitespace-nowrap">
          {tags.map((tag) => {
            return (
              <p
                key={tag.name}
                className={`flex  flex-wrap gap-2 text-[14px] text-white`}
              >
                {tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h1
          className={`${styles.sectionHeadText} hover:text-secondary transition-colors duration-150 ease-in cursor-pointer`}
        >
          <span
            className={`${styles.heroHeadText} text-[#915eff]`}
            style={{ color: "#915eff" }}
          >
            {" "}
            Projects .
          </span>{" "}
        </h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4
        text-secondary text-[17px] leading-[30px] max-w-3xl "
        >
          Each project is a unique piece of development 🧩
        </motion.p>
      </div>
      <div className="mt-8 flex flex-wrap gap-7 h-full">
        {projects.map((project, index) => {
          return <ProjectCard key={index} index={index} {...project} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
