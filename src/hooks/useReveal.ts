import useMotionTrigger from '@hooks/useMotionTrigger';
import { MotionHookResponse, Transition } from '../types/motion';

import { IntersectionOptions } from 'react-intersection-observer';

const useReveal = (
  direction = 'up',
  config: IntersectionOptions,
  transition: Transition = {},
  transitionOut: Transition = {},
  disable = false
): MotionHookResponse => {
  const [ref, animateEl] = useMotionTrigger({
    triggerOnce: true,
    threshold: 1,
    ...config,
  });

  const isVertical = direction === 'up' || direction === 'down';
  const initialHeight = direction === 'up' ? 100 : 0;
  const initialWidth = direction === 'left' ? 100 : 0;
  const finalHeight = initialHeight === 0 ? 100 : 0;
  const finalWidth = initialWidth === 0 ? 100 : 0;
  const clipHeight = direction === 'up' ? 100 : 0;
  const clipWidth = direction === 'left' ? 100 : 0;

  const variants = {
    hidden: {
      // rotate: 6,
      y: 20,
      x: 20,
      clipPath: isVertical
        ? `polygon(100% ${initialHeight}%, 100% ${clipHeight}%, 0% ${clipHeight}%, 0% ${initialHeight}%)`
        : `polygon(${initialWidth}% 100%, ${clipWidth}% 100%, ${clipWidth}% 0%, ${initialWidth}% 0%)`,
      transition: {
        duration: 0.7,
        ...(transitionOut || transition),
      },
    },
    visible: {
      transformOrigin: 'top left',
      rotate: 0,
      y: 0,
      x: 0,
      clipPath: isVertical
        ? `polygon(100% ${finalHeight}%, 100% ${clipHeight}%, 0% ${clipHeight}%, 0% ${finalHeight}%)`
        : `polygon(${finalWidth}% 100%, ${clipWidth}% 100%, ${clipWidth}% 0%, ${finalWidth}% 0%)`,
      transition: {
        duration: 0.7,
        ...transition,
      },
    },
  };

  return [ref, variants, !disable && animateEl ? 'visible' : false];
};

export default useReveal;
