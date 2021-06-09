import React, { useContext } from 'react';
import Navigation from '@components/Navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import MobileNav from '@components/MobileNav';
import { MouseContext } from 'src/context/mouseContext';

const container = {
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      scale: 0.9,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.0)',
    },
    show: {
      opacity: 1,
      scale: 1,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: { duration: 1 },
    },
  },
};

const Layout = ({ children }) => {
  const router = useRouter();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <div className="md:block hidden absolute top-8 right-[5vw] text-center">
        <div
          className="group flex items-center"
          onMouseEnter={() => cursorChangeHandler('nav')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          <button className="animate text-sm font-display bg-auto text-white relative transform group-hover:translate-x-5 border-cyan-500 border-1 rounded-md h-12 px-2 z-50">
            <p className="uppercase pt-1">
              <a
                className="no-hover"
                target="_blank"
                href="https://playground.jsfowles.com"
              >
                Playground
              </a>
            </p>
          </button>
          <span className="h-2/5 animate group-hover:bg-white w-[1px] absolute left-0 rounded-full z-10" />
          <span className="h-3/5 animate group-hover:bg-white w-[1px] absolute left-1.5 rounded-full z-10" />
          <span className="h-4/5 animate group-hover:bg-white w-[1px] absolute left-3 rounded-full z-10" />
        </div>
      </div>

      <div className="max-w-[1024px] w-full mx-auto   lg:px-0 px-[2vw]">
        <motion.div
          {...container}
          className="  mx-auto md:rounded-5xl md:border-0 md:border-pink-bright md:border-opacity-50 md:shadow-2xl overflow-hidden"
        >
          <motion.nav className="hidden md:flex justify-between w-full">
            <Navigation />
          </motion.nav>

          <MobileNav />

          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={router.route}
              className="h-full relative"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
