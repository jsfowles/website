import { InViewHookResponse } from 'react-intersection-observer';

export type MotionDirection = 'down' | 'up' | 'left' | 'right';

export interface MotionConfig {
  threshold?: number;
  triggerOnce?: boolean;
}

// this should really be TransitionDefinition from framer
// but it doesn't export that type
export interface Transition {
  delay?: number;
  staggerChildren?: number;
  delayChildren?: number;
  duration?: number;
  staggerDirection?: number;
}

export type MotionHookResponse = [
  InViewHookResponse['ref'],
  Record<string, any>,
  false | 'visible'
];
