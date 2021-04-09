import React from 'react';
import Fade from '@components/Motion/Fade';
import Reveal from '@components/Motion/Reveal';
import MotionParent from '@components/Motion/MotionParent';
import ReactRotatingText from 'react-rotating-text';
import { useTheme } from 'next-themes';

const Home = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <div className="dark:bg-black dark:text-white h-screen flex items-center pt-32 md:pt-0 md:justify-center md:pb-0 flex-col transition px-2 md:px-0">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="absolute top-2 md:top-10 right-2 md:right-10 p-4 bg-black dark:bg-pink rounded-full transition"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="h-4 w-4 md:h-6 md:w-6 text-white"
          >
            {theme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>
      <MotionParent>
        <Fade>
          <Reveal direction="right">
            <h1 className="dark:text-white text-5xl md:text-9xl font-serif">
              hello world.
            </h1>
          </Reveal>
        </Fade>
        <Fade>
          <Reveal direction="right">
            <h2 className="text-4xl md:text-8xl font-serif">this is a</h2>
          </Reveal>
        </Fade>
        <Fade>
          <Reveal direction="right">
            <h3 className="text-3xl md:text-7xl md:pt-4 font-serif">
              <span className="text-blue">
                <ReactRotatingText
                  items={[
                    'tailwind',
                    'react',
                    'typescript',
                    'motion',
                    'next.js',
                  ]}
                />{' '}
              </span>
              template.
            </h3>
          </Reveal>
        </Fade>
        <Fade>
          <Reveal direction="right">
            <p className="py-4 text-xs font-mono">
              by{' '}
              <a
                className="text-blue dark:text-pink hover:text-pink duration-200 transition-all"
                target="__blank"
                href="https://github.com/jessieleigh30"
              >
                jessieleigh30
              </a>{' '}
              &&{' '}
              <a
                className="text-blue dark:text-pink hover:text-pink duration-200 transition-all"
                target="__blank"
                href="https://github.com/jsfowles"
              >
                jsfowles
              </a>{' '}
              &&{' '}
              <a
                className="text-blue dark:text-pink hover:text-pink duration-200 transition-all"
                target="__blank"
                href="https://github.com/simplycomplexable"
              >
                simplycomplexable
              </a>
            </p>
          </Reveal>
        </Fade>
        <Fade>
          <a
            target="__blank"
            className="font-mono text-xs hover:text-blue duration-200 transition-all"
            href="https://github.com/jsfowles/tw-template"
          >
            github
          </a>
        </Fade>
      </MotionParent>
    </div>
  );
};

export default Home;
