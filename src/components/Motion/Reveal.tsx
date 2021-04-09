import React, { useContext } from 'react';
import { IntersectionOptions } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MotionParentContext } from '@components/Motion/MotionParent';
import useReveal from '@hooks/useReveal';
import { MotionDirection, Transition } from '@typings/motion';

interface Props {
  children: React.ReactNode;
  as?: string;
  config?: IntersectionOptions;
  transition?: Transition;
  transitionOut?: Transition;
  direction?: MotionDirection;
  animate?: boolean;
  onAnimationComplete?: () => void;
}

const Reveal = ({
  children,
  as = 'div',
  direction = 'up',
  transition = {},
  transitionOut = {},
  config = {},
  animate: manualAnimate,
  onAnimationComplete,
  ...props
}: Props) => {
  const context = useContext(MotionParentContext);
  const disabled = !!context?.staggerChildren;
  const [ref, variants, animate] = useReveal(
    direction,
    config,
    transition,
    transitionOut,
    disabled
  );
  const animation = React.useMemo(() => {
    if (manualAnimate === undefined) return false;
    return manualAnimate && !!animate ? 'visible' : 'hidden';
  }, [manualAnimate, animate]);
  const key = React.useMemo(() => Math.random().toString(16), []);

  const El = motion[as];

  return (
    <motion.div ref={ref}>
      <El
        key={key}
        initial="hidden"
        exit={!disabled && 'hidden'}
        animate={animation || animate}
        variants={variants}
        onAnimationComplete={onAnimationComplete}
        {...props}
      >
        {children}
      </El>
    </motion.div>
  );
};

export default Reveal;
