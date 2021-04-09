import React from 'react';
import { IntersectionOptions } from 'react-intersection-observer';
import { motion, MotionProps } from 'framer-motion';
import { MotionParentContext } from '@components/Motion/MotionParent';
import { useFade } from '@hooks/useFade';
import { MotionDirection, Transition } from '@typings/motion';

interface Props extends MotionProps {
  children: React.ReactNode;
  as?: string;
  config?: IntersectionOptions;
  direction?: MotionDirection;
  distance?: number;
  transition?: Transition;
  transitionOut?: Transition;
  animate?: boolean;
}

const Fade = ({
  children,
  direction = 'up',
  distance = 0,
  transition = {},
  transitionOut = {},
  config = {},
  animate: manualAnimate,
  as = 'div',
  ...props
}: Props) => {
  const context = React.useContext(MotionParentContext);
  const disable = !!context?.staggerChildren;
  const [ref, variants, animate] = useFade(
    direction,
    distance,
    config,
    transition,
    transitionOut,
    disable
  );
  const animation = React.useMemo(() => {
    if (manualAnimate === undefined) return animate;
    return manualAnimate ? 'visible' : 'hidden';
  }, [manualAnimate, animate]);

  const El = motion[as];
  return (
    <El
      ref={ref}
      initial="hidden"
      exit={!disable && 'hidden'}
      animate={animation}
      variants={variants}
      {...props}
    >
      {children}
    </El>
  );
};

export default Fade;
