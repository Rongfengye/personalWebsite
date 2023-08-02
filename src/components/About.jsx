import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a proud alumnus of Carnegie Mellon University, holding a Bachelor of Science degree in Electrical and Computer Engineering. My academic journey at one of the world's leading institutions instilled in me a deep understanding of the intricacies of electrical and computer systems, as well as the expertise to harness their potential to create groundbreaking solutions.

        Complementing my engineering expertise, I pursued a Minor in Computational Finance, recognizing the increasing significance of technology in the financial domain. My grasp of quantitative analysis and financial markets equips me to bridge the gap between engineering and finance, unlocking new possibilities for businesses and individuals alike.
        
        My time at Carnegie Mellon and beyond has ignited a relentless passion for innovation. I have actively engaged in diverse research projects, team collaborations, and practical applications, constantly seeking opportunities to push the boundaries of what's possible. With each endeavor, I strive to deliver results that not only meet but exceed expectations, making a positive impact in the world.
        
      </motion.p>

      {/* building the icons in 1:13:36 */}
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div> */}
    </>


    // <div>About</div>
  )
}

export default SectionWrapper(About, "about")