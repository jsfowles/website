import { IntersectionOptions } from 'react-intersection-observer';
import useMotionTrigger from '@hooks/useMotionTrigger';
import { MotionHookResponse, Transition } from '../types/motion';

export const useFade = (
  direction: 'down' | 'up' | 'left' | 'right' = 'up',
  distance: number,
  config: IntersectionOptions = {},
  transition: Transition = {},
  transitionOut: Transition = {},
  disable = false
): MotionHookResponse => {
  const [ref, animateEl] = useMotionTrigger({
    triggerOnce: true,
    threshold: 1,
    ...config,
  });
  if (!distance) {
    const variants = {
      hidden: {
        opacity: 0,
        y: 20,
        x: 20,
        transition: { duration: 0.7, ...(transitionOut || transition) },
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.7, ...transition },
      },
    };

    return [ref, variants, !disable && animateEl ? 'visible' : false];
  }

  const y =
    (direction === 'down' && -distance) ||
    (direction === 'up' && distance) ||
    0;
  const x =
    (direction === 'right' && -distance) ||
    (direction === 'left' && distance) ||
    0;

  const variants = {
    hidden: {
      y,
      x,
      opacity: 0,
      transition: transitionOut || transition,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  };

  return [ref, variants, !disable && animateEl ? 'visible' : false];
};
