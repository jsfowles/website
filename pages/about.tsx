import { motion } from 'framer-motion';
import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import { container, item } from 'pages/index';

const Home = () => {
  return (
    <div className="md:h-[520px] flex md:flex-row flex-col relative">
      <figure className="transform md:mb-0 -mb-20">
        <motion.img
          initial={{ opacity: 0, x: -100, y: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 2 },
          }}
          exit={{ opacity: 0 }}
          src="/images/whole-fam-trimmy.png"
          className="mobile-image-fade md:shadowed w-full md:w-[30vw]  h-full md:self-end object-contain lg:object-bottom object-center  md:pt-16 pt-20"
        />
      </figure>
      <div className="w-full flex flex-col justify-center items-center self-center relative text-white">
        <motion.div
          key="text"
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full pb-10 pl-10 pr-10"
        >
          <div className="flex md:flex-row flex-col items-center pb-6">
            <motion.h2 variants={item} className="text-4xl md:pb-0 pb-6">
              Hi, I'm
            </motion.h2>
            <motion.h2
              variants={item}
              className="ml-6 text-4xl flex flex-col bg-white items-center text-pink-bright max-w-max rounded-xl p-2"
            >
              <ReactRotatingText items={['jake', 'jacob']} />
            </motion.h2>
          </div>

          <motion.p variants={item} className="text-white prose">
            Once a professional guitarist, I now make cool website for big
            companies like Netflix and Facebook.
          </motion.p>
          <motion.p variants={item} className="text-white prose pt-6">
            I enjoy all things related to AI and the neurosciences, especially
            learning machines.
          </motion.p>

          <motion.p variants={item} className="text-white prose pt-6">
            Lover of my wife and two kids, fly-fishing, and guitars.
          </motion.p>
          <motion.p variants={item} className="text-white prose pt-6">
            I strongly believe you're never too old or too young to learn how to
            build a guitar and play it while fly fishing in Idaho from a wood
            drift boat you carved with your bare hands.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
