import { motion } from 'framer-motion';
import React, { useContext } from 'react';

import { MouseContext } from 'src/context/mouseContext';

export const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.1,
      delayChildren: 0.75,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const item = {
  initial: { opacity: 0, x: 20, y: 20 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 2, type: 'spring' },
  },
  exit: { opacity: 0 },
};

const Home = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <motion.div
      key="card"
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="md:h-[520px] flex md:flex-row flex-col relative overflow-hidden"
    >
      <figure className="mobile-image-fade brighten transform -scale-x-1 md:mb-0 -mb-20">
        <motion.img
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 2 },
          }}
          exit={{ opacity: 0 }}
          src="/images/nothisone.png"
          className="md:shadowed w-full  md:h-full h-[65vh] object-contain object-bottom md:pt-16 pt-20"
        />
      </figure>
      <div className="md:w-2/3 flex flex-col justify-center items-center self-center relative text-white">
        <motion.div
          key="text"
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full px-10 pb-10 pt-10 md:pt-0"
        >
          <motion.h1
            variants={item}
            className="text-4xl lg:text-5xl flex flex-col bg-white items-center text-pink-bright max-w-max rounded-xl p-2 mx-auto md:mx-0"
          >
            developer.
          </motion.h1>

          <motion.p variants={item} className="prose pt-6">
            This site is mostly a collection of things I've made, finished and
            unfinished.
          </motion.p>
          <motion.p variants={item} className="prose pt-6">
            Since this site is experimental you'll for sure notice random bugs,
            like weird font pairings, buttons that don't work, or wild color
            schemes that make your eyes hurt.
          </motion.p>
          <motion.p variants={item} className="prose pt-6">
            Oh yeah, I'm also the Engineering Manager @{' '}
            <a className="relative" href="https://underbelly.is">
              Underbelly Creative
            </a>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
