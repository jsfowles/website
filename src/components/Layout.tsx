import React from 'react';
import Navigation from '@components/Navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import MobileNav from '@components/MobileNav';

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className="md:block hidden absolute top-8 right-[5vw] text-center">
        <div className="group">
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
          <span className="h-2/5 animate group-hover:bg-white w-0.5 absolute left-0 top-5 z-10" />
          <span className="h-3/5 animate group-hover:bg-white w-0.5 absolute left-1.5 top-3.5 z-10" />
          <span className="h-4/5 animate group-hover:bg-white w-0.5 absolute left-3 top-2 z-10" />
        </div>
      </div>

      <div className="max-w-[1024px] w-full mx-auto transition-height duration-500 ease-in-out lg:px-0 px-[2vw]">
        <div className="transition-height duration-500 ease-in-out mx-auto md:rounded-5xl md:border-0 md:border-pink-bright md:border-opacity-50 md:shadow-2xl overflow-hidden">
          <div className="transition-height duration-500 ease-in-out">
            <nav className="hidden md:flex justify-between w-full">
              <Navigation />
            </nav>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
