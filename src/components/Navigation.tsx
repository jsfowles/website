import React, { useContext } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MouseContext } from '@context/mouseContext';

const navItems = [
  { id: 0, title: 'about', route: '/about' },
  { id: 1, title: 'projects', route: '/projects' },
  { id: 2, title: 'social', route: '/social' },
  { id: 3, title: 'contact', route: '/contact' },
];

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
  exit: {
    opacity: 0,
  },
};

const item = {
  initial: { opacity: 0, x: 20, y: 20 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.75 },
  },
  exit: { opacity: 0 },
};

const Navigation = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex justify-between w-full  relative z-50 "
    >
      <div className="w-1/3">
        <Link passHref href="/">
          <motion.h4
            // @ts-ignore
            onMouseEnter={() => cursorChangeHandler('jsfowles')}
            // @ts-ignore
            onMouseLeave={() => cursorChangeHandler('')}
            variants={item}
            className="text-center pt-4 text-lg uppercase text-white"
          >
            <a>jsfowles</a>
          </motion.h4>
        </Link>
      </div>
      <ul className="p-8 w-2/3 flex justify-center pt-4">
        {navItems.map(({ route, id, title }) => (
          <motion.li
            // @ts-ignore
            onMouseEnter={() => cursorChangeHandler('menu')}
            // @ts-ignore
            onMouseLeave={() => cursorChangeHandler('')}
            variants={item}
            className="uppercase pl-8 text-white"
          >
            <Link passHref href={route} key={id}>
              <a>{title}</a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Navigation;
