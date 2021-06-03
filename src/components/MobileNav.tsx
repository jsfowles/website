import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { id: 0, title: 'about', route: '/about' },
  { id: 1, title: 'projects', route: '/projects' },
  { id: 2, title: 'social', route: '/social' },
  { id: 3, title: 'contact', route: '/contact' },
  { id: 4, title: 'playground', route: 'https://playground.jsfowles.com' },
];

const wrapperVariants = {
  initial: {
    opacity: 0,
    // clipPath: 'polygon(100% 0%,0% 0%,0% 0%,100% 100%)',
    // width: '100%',
    // x: '100%',
  },
  animate: {
    opacity: 1,
    // clipPath: 'polygon(100% 0%,0% 0%,0% 100%,100% 100%)',
    transition: {
      duration: 0.7,
      staggerChildren: 0.07,
      delayChildren: 0.5,
    },
    // width: '100%',
    // x: '0%',
  },
  exit: {
    opacity: 0,
    // clipPath: 'polygon(100% 0%,0% 0%,0% 0%,100% 100%)',
    // transition: { duration: 0.7 },
    // width: '100%',
    // x: '100%',
  },
};

const item = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const Navigation = () => {
  const [toggleNav, setToggleNav] = React.useState(false);
  console.log(toggleNav);
  return (
    <nav className="md:hidden absolute top-0 left-0 right-0 p-9 z-50 flex w-full justify-between items-center">
      <Link passHref href="/">
        <h4 className="text-lg uppercase text-white">
          <a>jsfowles</a>
        </h4>
      </Link>

      <div
        onClick={() => setToggleNav(!toggleNav)}
        className="group relative z-50 p-4 -m-4"
      >
        <div
          className={` ${
            toggleNav
              ? 'w-8 h-0.5 -rotate-45 translate-x-[10px] translate-y-[6px]'
              : 'w-1.5 h-1.5'
          }  animate bg-white rounded-full transform`}
        />
        <div
          className={` ${
            toggleNav ? 'opacity-0' : 'w-1.5 opacity-100 delay-200'
          }  transition duration-75  bg-white rounded-full my-1 h-1.5`}
        />
        <div
          className={` ${
            toggleNav
              ? 'w-8 h-0.5 rotate-45 translate-x-[10px] translate-y-[-10px]'
              : 'w-1.5 h-1.5'
          }  animate bg-white rounded-full transform`}
        />
      </div>
      <AnimatePresence>
        {toggleNav && (
          <motion.ul
            key="card"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 h-screen w-screen bg-pink z-40 mobile-nav-gradient pt-[20vh]"
          >
            {navItems.map(({ id, title, route }) => (
              <motion.li
                className=" font-display text-4xl text-white  py-6 text-center uppercase"
                variants={item}
                key={id}
                onClick={() => setToggleNav(!toggleNav)}
              >
                <Link passHref href={route}>
                  <a>{title}</a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
