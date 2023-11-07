import { motion } from "framer-motion";
import { styles } from "../../styles";
import { staggerContainer } from "../../util/motion";

const SectionWrapper = (OriginalComponent, idName) =>
  function HOC() {
    return (
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <OriginalComponent />
      </motion.div>
    );
  };

export default SectionWrapper;
