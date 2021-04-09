import React from 'react';
import { motion } from 'framer-motion';
import { IntersectionOptions } from 'react-intersection-observer';
import useMotionTrigger from '@hooks/useMotionTrigger';
import { Transition } from '@typings/motion';

interface Props {
  children: React.ReactNode;
  as?: string;
  config?: IntersectionOptions;
  transition?: Transition;
  transitionOut?: Transition;
  animate?: boolean;
  ref?: React.ReactNode;
}

export const MotionParentContext = React.createContext<Partial<Transition>>({});

const MotionParent = ({
  children,
  as = 'div',
  config = {},
  transition: transitionConfig = {},
  transitionOut: transitionOutConfig = {},
  animate: manualAnimate,
}: Props) => {
  const [ref, animate] = useMotionTrigger({
    triggerOnce: true,
    threshold: 0.2,
    ...config,
  });

  const animation = React.useMemo(() => {
    if (manualAnimate === undefined) return false;
    return manualAnimate && !!animate ? 'visible' : 'hidden';
  }, [manualAnimate, animate]);

  const key = React.useMemo(() => Math.random().toString(16), []);

  const El = motion[as];

  const transition = {
    duration: 0.25,
    staggerChildren: 0.1,
    ...transitionConfig,
  };
  const transitionOut = {
    duration: 0.25,
    ...transitionOutConfig,
  };

  return (
    <El
      ref={ref}
      key={key}
      initial="hidden"
      exit="hidden"
      variants={{
        hidden: {
          transition: transitionOut,
        },
        visible: {
          transition,
        },
      }}
      animate={animation || (animate ? 'visible' : 'hidden')}
    >
      <MotionParentContext.Provider value={transition}>
        {children}
      </MotionParentContext.Provider>
    </El>
  );
};

export default MotionParent;
