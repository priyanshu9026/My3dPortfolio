import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import {styles} from'../styles'
import {github} from '../assets'
import{SectionWrapper} from '../hoc'

import{fadeIn, textVariant} from '../utils/motion';

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
         variants={fadeIn("", "", 0.1)}
         className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, consectetur ullam alias dolores facilis incidunt ut at laudantium minus, dolorem veniam vero id error deleniti aperiam? Rem magni id repellendus, tempore voluptate exercitationem beatae eligendi facilis. Deleniti sed cupiditate alias.

        </motion.p>
      </div>
    </>

  )
}

export default SectionWrapper(Works ,"");