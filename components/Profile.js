import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Helmet from "../public/helmet.png";
import { Paragraph, Letter, Img, Div } from "../motions/animationVariants";

const texts = [
  "Priyanshu Gupta, born in 2007. A passionate explorer of programming, graphic design, psychology, and space. Always pushing the boundaries of creativity.",
  "This is the first additional paragraph. It contains more information about my interests and hobbies.",
  "This is the second additional paragraph. Here you can learn more about my future goals and aspirations."
];

export default function Profile() {
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: true });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [key, setKey] = useState(0);
  const [isRepeating, setIsRepeating] = useState(false);

  const handleNext = () => {
    const newIndex = (currentTextIndex + 1) % texts.length;
    setCurrentTextIndex(newIndex);
    setIsRepeating(newIndex === 0);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <section ref={profileRef} className="flex flex-col my-4 mx-4 lg:mx-8">
      <motion.div
        className="relative w-full rounded-md flex bg-gradient-to-br from-[#A3A3A2] via-[#727272] to-[#555555] shadow-xl text-white overflow-hidden backdrop-blur-md z-30"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={Div}
      >
        <motion.div
          className="flex-none w-1/3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={Img}
        >
          <Image
            src={Helmet}
            alt="Helmet"
            className="object-contain object-cover h-full w-full opacity-60"
          />
        </motion.div>
        <div className="flex-grow pr-4 text-xs md:text-2xl flex items-center justify-center text-right">
          <motion.p
            key={key}
            className="py-4 mx-2"
            initial="hidden"
            animate="visible"
            variants={(currentTextIndex === 0 && !isRepeating) ? {} : Paragraph}
          >
            {texts[currentTextIndex].split("").map((char, index) => (
              <motion.span key={index} variants={(currentTextIndex === 0 && !isRepeating) ? {} : Letter}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <div
          className="absolute bottom-2 right-2 bg-[#a5a5a5] rounded-full p-2 cursor-pointer opacity-60"
          onClick={handleNext}
        >
          <FaChevronRight className="text-lg" />
        </div>
      </motion.div>
    </section>
  );
}